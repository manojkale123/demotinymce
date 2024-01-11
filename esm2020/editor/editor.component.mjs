/* eslint-disable @typescript-eslint/no-parameter-properties */
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Component, forwardRef, Inject, Input, PLATFORM_ID, InjectionToken, Optional } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getTinymce } from '../TinyMCE';
import { listenTinyMCEEvent, bindHandlers, isTextarea, mergePlugins, uuid, noop, isNullOrUndefined } from '../utils/Utils';
import { Events } from './Events';
import { ScriptLoader } from '../utils/ScriptLoader';
import * as i0 from "@angular/core";
export const TINYMCE_SCRIPT_SRC = new InjectionToken('TINYMCE_SCRIPT_SRC');
const EDITOR_COMPONENT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EditorComponent),
    multi: true
};
export class EditorComponent extends Events {
    constructor(elementRef, ngZone, platformId, tinymceScriptSrc) {
        super();
        this.platformId = platformId;
        this.tinymceScriptSrc = tinymceScriptSrc;
        this.cloudChannel = '6';
        this.apiKey = 'no-api-key';
        this.id = '';
        this.modelEvents = 'change input undo redo';
        this.onTouchedCallback = noop;
        this.destroy$ = new Subject();
        this.initialise = () => {
            const finalInit = {
                ...this.init,
                selector: undefined,
                target: this._element,
                inline: this.inline,
                readonly: this.disabled,
                plugins: mergePlugins((this.init && this.init.plugins), this.plugins),
                toolbar: this.toolbar || (this.init && this.init.toolbar),
                setup: (editor) => {
                    this._editor = editor;
                    listenTinyMCEEvent(editor, 'init', this.destroy$).subscribe(() => {
                        this.initEditor(editor);
                    });
                    bindHandlers(this, editor, this.destroy$);
                    if (this.init && typeof this.init.setup === 'function') {
                        this.init.setup(editor);
                    }
                }
            };
            if (isTextarea(this._element)) {
                this._element.style.visibility = '';
            }
            this.ngZone.runOutsideAngular(() => {
                getTinymce().init(finalInit);
            });
        };
        this._elementRef = elementRef;
        this.ngZone = ngZone;
    }
    set disabled(val) {
        this._disabled = val;
        if (this._editor && this._editor.initialized) {
            if (typeof this._editor.mode?.set === 'function') {
                this._editor.mode.set(val ? 'readonly' : 'design');
            }
            else {
                this._editor.setMode(val ? 'readonly' : 'design');
            }
        }
    }
    get disabled() {
        return this._disabled;
    }
    get editor() {
        return this._editor;
    }
    writeValue(value) {
        if (this._editor && this._editor.initialized) {
            this._editor.setContent(isNullOrUndefined(value) ? '' : value);
        }
        else {
            this.initialValue = value === null ? undefined : value;
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.id = this.id || uuid('tiny-angular');
            this.inline = this.inline !== undefined ? this.inline !== false : !!(this.init?.inline);
            this.createElement();
            if (getTinymce() !== null) {
                this.initialise();
            }
            else if (this._element && this._element.ownerDocument) {
                // Caretaker note: the component might be destroyed before the script is loaded and its code is executed.
                // This will lead to runtime exceptions if `initialise` will be called when the component has been destroyed.
                ScriptLoader.load(this._element.ownerDocument, this.getScriptSrc())
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(this.initialise);
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        if (getTinymce() !== null) {
            getTinymce().remove(this._editor);
        }
    }
    createElement() {
        const tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
        this._element = document.createElement(this.inline ? tagName : 'textarea');
        if (this._element) {
            if (document.getElementById(this.id)) {
                /* eslint no-console: ["error", { allow: ["warn"] }] */
                console.warn(`TinyMCE-Angular: an element with id [${this.id}] already exists. Editors with duplicate Id will not be able to mount`);
            }
            this._element.id = this.id;
            if (isTextarea(this._element)) {
                this._element.style.visibility = 'hidden';
            }
            this._elementRef.nativeElement.appendChild(this._element);
        }
    }
    getScriptSrc() {
        return isNullOrUndefined(this.tinymceScriptSrc) ?
            `https://cdn.tiny.cloud/1/${this.apiKey}/tinymce/${this.cloudChannel}/tinymce.min.js` :
            this.tinymceScriptSrc;
    }
    initEditor(editor) {
        listenTinyMCEEvent(editor, 'blur', this.destroy$).subscribe(() => {
            this.ngZone.run(() => this.onTouchedCallback());
        });
        listenTinyMCEEvent(editor, this.modelEvents, this.destroy$).subscribe(() => {
            this.ngZone.run(() => this.emitOnChange(editor));
        });
        if (typeof this.initialValue === 'string') {
            this.ngZone.run(() => {
                editor.setContent(this.initialValue);
                if (editor.getContent() !== this.initialValue) {
                    this.emitOnChange(editor);
                }
                if (this.onInitNgModel !== undefined) {
                    this.onInitNgModel.emit(editor);
                }
            });
        }
    }
    emitOnChange(editor) {
        if (this.onChangeCallback) {
            this.onChangeCallback(editor.getContent({ format: this.outputFormat }));
        }
    }
}
EditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: EditorComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: PLATFORM_ID }, { token: TINYMCE_SCRIPT_SRC, optional: true }], target: i0.ɵɵFactoryTarget.Component });
EditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.4", type: EditorComponent, isStandalone: true, selector: "editor", inputs: { cloudChannel: "cloudChannel", apiKey: "apiKey", init: "init", id: "id", initialValue: "initialValue", outputFormat: "outputFormat", inline: "inline", tagName: "tagName", plugins: "plugins", toolbar: "toolbar", modelEvents: "modelEvents", allowedEvents: "allowedEvents", ignoreEvents: "ignoreEvents", disabled: "disabled" }, providers: [EDITOR_COMPONENT_VALUE_ACCESSOR], usesInheritance: true, ngImport: i0, template: '<ng-template></ng-template>', isInline: true, styles: [":host{display:block}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: FormsModule }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: EditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'editor', template: '<ng-template></ng-template>', providers: [EDITOR_COMPONENT_VALUE_ACCESSOR], standalone: true, imports: [CommonModule, FormsModule], styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [TINYMCE_SCRIPT_SRC]
                }] }]; }, propDecorators: { cloudChannel: [{
                type: Input
            }], apiKey: [{
                type: Input
            }], init: [{
                type: Input
            }], id: [{
                type: Input
            }], initialValue: [{
                type: Input
            }], outputFormat: [{
                type: Input
            }], inline: [{
                type: Input
            }], tagName: [{
                type: Input
            }], plugins: [{
                type: Input
            }], toolbar: [{
                type: Input
            }], modelEvents: [{
                type: Input
            }], allowedEvents: [{
                type: Input
            }], ignoreEvents: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RpbnltY2UtYW5ndWxhci1jb21wb25lbnQvc3JjL21haW4vdHMvZWRpdG9yL2VkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0RBQStEO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBcUIsV0FBVyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUosT0FBTyxFQUFFLFdBQVcsRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0gsT0FBTyxFQUFZLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBS3JELE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLElBQUksY0FBYyxDQUFTLG9CQUFvQixDQUFDLENBQUM7QUFFbkYsTUFBTSwrQkFBK0IsR0FBRztJQUN0QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO0lBQzlDLEtBQUssRUFBRSxJQUFJO0NB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LE1BQU07MkJBQUMsV0FBVzs7MEJBQ2xCLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsa0JBQWtCOzRDQWpEeEIsWUFBWTtzQkFBM0IsS0FBSztnQkFDVSxNQUFNO3NCQUFyQixLQUFLO2dCQUNVLElBQUk7c0JBQW5CLEtBQUs7Z0JBQ1UsRUFBRTtzQkFBakIsS0FBSztnQkFDVSxZQUFZO3NCQUEzQixLQUFLO2dCQUNVLFlBQVk7c0JBQTNCLEtBQUs7Z0JBQ1UsTUFBTTtzQkFBckIsS0FBSztnQkFDVSxPQUFPO3NCQUF0QixLQUFLO2dCQUNVLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsT0FBTztzQkFBdEIsS0FBSztnQkFDVSxXQUFXO3NCQUExQixLQUFLO2dCQUNVLGFBQWE7c0JBQTVCLEtBQUs7Z0JBQ1UsWUFBWTtzQkFBM0IsS0FBSztnQkFFSyxRQUFRO3NCQURsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXBhcmFtZXRlci1wcm9wZXJ0aWVzICovXHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIEluamVjdCwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBQTEFURk9STV9JRCwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBnZXRUaW55bWNlIH0gZnJvbSAnLi4vVGlueU1DRSc7XHJcbmltcG9ydCB7IGxpc3RlblRpbnlNQ0VFdmVudCwgYmluZEhhbmRsZXJzLCBpc1RleHRhcmVhLCBtZXJnZVBsdWdpbnMsIHV1aWQsIG5vb3AsIGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMvVXRpbHMnO1xyXG5pbXBvcnQgeyBFdmVudE9iaiwgRXZlbnRzIH0gZnJvbSAnLi9FdmVudHMnO1xyXG5pbXBvcnQgeyBTY3JpcHRMb2FkZXIgfSBmcm9tICcuLi91dGlscy9TY3JpcHRMb2FkZXInO1xyXG5pbXBvcnQgeyBFZGl0b3IgYXMgVGlueU1DRUVkaXRvciwgVGlueU1DRSB9IGZyb20gJ3RpbnltY2UnO1xyXG5cclxudHlwZSBFZGl0b3JPcHRpb25zID0gUGFyYW1ldGVyczxUaW55TUNFWydpbml0J10+WzBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRJTllNQ0VfU0NSSVBUX1NSQyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdUSU5ZTUNFX1NDUklQVF9TUkMnKTtcclxuXHJcbmNvbnN0IEVESVRPUl9DT01QT05FTlRfVkFMVUVfQUNDRVNTT1IgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRWRpdG9yQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlZGl0b3InLFxyXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+JyxcclxuICBzdHlsZXM6IFsgJzpob3N0IHsgZGlzcGxheTogYmxvY2s7IH0nIF0sXHJcbiAgcHJvdmlkZXJzOiBbIEVESVRPUl9DT01QT05FTlRfVkFMVUVfQUNDRVNTT1IgXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBFdmVudHMgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGNsb3VkQ2hhbm5lbCA9ICc2JztcclxuICBASW5wdXQoKSBwdWJsaWMgYXBpS2V5ID0gJ25vLWFwaS1rZXknO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpbml0OiBFZGl0b3JPcHRpb25zIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpZCA9ICcnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpbml0aWFsVmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSBwdWJsaWMgb3V0cHV0Rm9ybWF0OiAnaHRtbCcgfCAndGV4dCcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgcHVibGljIGlubGluZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSBwdWJsaWMgdGFnTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwbHVnaW5zOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgcHVibGljIHRvb2xiYXI6IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtb2RlbEV2ZW50cyA9ICdjaGFuZ2UgaW5wdXQgdW5kbyByZWRvJztcclxuICBASW5wdXQoKSBwdWJsaWMgYWxsb3dlZEV2ZW50czogc3RyaW5nIHwgc3RyaW5nW10gfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgcHVibGljIGlnbm9yZUV2ZW50czogc3RyaW5nIHwgc3RyaW5nW10gfCB1bmRlZmluZWQ7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IGRpc2FibGVkKHZhbCkge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWw7XHJcbiAgICBpZiAodGhpcy5fZWRpdG9yICYmIHRoaXMuX2VkaXRvci5pbml0aWFsaXplZCkge1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuX2VkaXRvci5tb2RlPy5zZXQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB0aGlzLl9lZGl0b3IubW9kZS5zZXQodmFsID8gJ3JlYWRvbmx5JyA6ICdkZXNpZ24nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9lZGl0b3Iuc2V0TW9kZSh2YWwgPyAncmVhZG9ubHknIDogJ2Rlc2lnbicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGRpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBlZGl0b3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWRpdG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nWm9uZTogTmdab25lO1xyXG5cclxuICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG4gIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2VkaXRvcjogVGlueU1DRUVkaXRvciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjayA9IG5vb3A7XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoVElOWU1DRV9TQ1JJUFRfU1JDKSBwcml2YXRlIHRpbnltY2VTY3JpcHRTcmM/OiBzdHJpbmdcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcclxuICAgIHRoaXMubmdab25lID0gbmdab25lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9lZGl0b3IgJiYgdGhpcy5fZWRpdG9yLmluaXRpYWxpemVkKSB7XHJcbiAgICAgIHRoaXMuX2VkaXRvci5zZXRDb250ZW50KGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlKSA/ICcnIDogdmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcbiAgICAgIHRoaXMuaWQgPSB0aGlzLmlkIHx8IHV1aWQoJ3RpbnktYW5ndWxhcicpO1xyXG4gICAgICB0aGlzLmlubGluZSA9IHRoaXMuaW5saW5lICE9PSB1bmRlZmluZWQgPyB0aGlzLmlubGluZSAhPT0gZmFsc2UgOiAhISh0aGlzLmluaXQ/LmlubGluZSk7XHJcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgICBpZiAoZ2V0VGlueW1jZSgpICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fZWxlbWVudCAmJiB0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQpIHtcclxuICAgICAgICAvLyBDYXJldGFrZXIgbm90ZTogdGhlIGNvbXBvbmVudCBtaWdodCBiZSBkZXN0cm95ZWQgYmVmb3JlIHRoZSBzY3JpcHQgaXMgbG9hZGVkIGFuZCBpdHMgY29kZSBpcyBleGVjdXRlZC5cclxuICAgICAgICAvLyBUaGlzIHdpbGwgbGVhZCB0byBydW50aW1lIGV4Y2VwdGlvbnMgaWYgYGluaXRpYWxpc2VgIHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWQuXHJcbiAgICAgICAgU2NyaXB0TG9hZGVyLmxvYWQodGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LCB0aGlzLmdldFNjcmlwdFNyYygpKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSh0aGlzLmluaXRpYWxpc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuXHJcbiAgICBpZiAoZ2V0VGlueW1jZSgpICE9PSBudWxsKSB7XHJcbiAgICAgIGdldFRpbnltY2UoKS5yZW1vdmUodGhpcy5fZWRpdG9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGVFbGVtZW50KCkge1xyXG4gICAgY29uc3QgdGFnTmFtZSA9IHR5cGVvZiB0aGlzLnRhZ05hbWUgPT09ICdzdHJpbmcnID8gdGhpcy50YWdOYW1lIDogJ2Rpdic7XHJcbiAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLmlubGluZSA/IHRhZ05hbWUgOiAndGV4dGFyZWEnKTtcclxuICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKSkge1xyXG4gICAgICAgIC8qIGVzbGludCBuby1jb25zb2xlOiBbXCJlcnJvclwiLCB7IGFsbG93OiBbXCJ3YXJuXCJdIH1dICovXHJcbiAgICAgICAgY29uc29sZS53YXJuKGBUaW55TUNFLUFuZ3VsYXI6IGFuIGVsZW1lbnQgd2l0aCBpZCBbJHt0aGlzLmlkfV0gYWxyZWFkeSBleGlzdHMuIEVkaXRvcnMgd2l0aCBkdXBsaWNhdGUgSWQgd2lsbCBub3QgYmUgYWJsZSB0byBtb3VudGApO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQuaWQgPSB0aGlzLmlkO1xyXG4gICAgICBpZiAoaXNUZXh0YXJlYSh0aGlzLl9lbGVtZW50KSkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0aWFsaXNlID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgZmluYWxJbml0OiBFZGl0b3JPcHRpb25zID0ge1xyXG4gICAgICAuLi50aGlzLmluaXQsXHJcbiAgICAgIHNlbGVjdG9yOiB1bmRlZmluZWQsXHJcbiAgICAgIHRhcmdldDogdGhpcy5fZWxlbWVudCxcclxuICAgICAgaW5saW5lOiB0aGlzLmlubGluZSxcclxuICAgICAgcmVhZG9ubHk6IHRoaXMuZGlzYWJsZWQsXHJcbiAgICAgIHBsdWdpbnM6IG1lcmdlUGx1Z2lucygodGhpcy5pbml0ICYmIHRoaXMuaW5pdC5wbHVnaW5zKSBhcyBzdHJpbmcsIHRoaXMucGx1Z2lucyksXHJcbiAgICAgIHRvb2xiYXI6IHRoaXMudG9vbGJhciB8fCAodGhpcy5pbml0ICYmIHRoaXMuaW5pdC50b29sYmFyKSxcclxuICAgICAgc2V0dXA6IChlZGl0b3I6IFRpbnlNQ0VFZGl0b3IpID0+IHtcclxuICAgICAgICB0aGlzLl9lZGl0b3IgPSBlZGl0b3I7XHJcblxyXG4gICAgICAgIGxpc3RlblRpbnlNQ0VFdmVudChlZGl0b3IsICdpbml0JywgdGhpcy5kZXN0cm95JCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaW5pdEVkaXRvcihlZGl0b3IpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBiaW5kSGFuZGxlcnModGhpcywgZWRpdG9yLCB0aGlzLmRlc3Ryb3kkKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaW5pdCAmJiB0eXBlb2YgdGhpcy5pbml0LnNldHVwID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICB0aGlzLmluaXQuc2V0dXAoZWRpdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGlzVGV4dGFyZWEodGhpcy5fZWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBnZXRUaW55bWNlKCkuaW5pdChmaW5hbEluaXQpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBnZXRTY3JpcHRTcmMoKSB7XHJcbiAgICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQodGhpcy50aW55bWNlU2NyaXB0U3JjKSA/XHJcbiAgICAgIGBodHRwczovL2Nkbi50aW55LmNsb3VkLzEvJHt0aGlzLmFwaUtleX0vdGlueW1jZS8ke3RoaXMuY2xvdWRDaGFubmVsfS90aW55bWNlLm1pbi5qc2AgOlxyXG4gICAgICB0aGlzLnRpbnltY2VTY3JpcHRTcmM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRFZGl0b3IoZWRpdG9yOiBUaW55TUNFRWRpdG9yKSB7XHJcbiAgICBsaXN0ZW5UaW55TUNFRXZlbnQoZWRpdG9yLCAnYmx1cicsIHRoaXMuZGVzdHJveSQpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLm9uVG91Y2hlZENhbGxiYWNrKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGlzdGVuVGlueU1DRUV2ZW50KGVkaXRvciwgdGhpcy5tb2RlbEV2ZW50cywgdGhpcy5kZXN0cm95JCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuZW1pdE9uQ2hhbmdlKGVkaXRvcikpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmluaXRpYWxWYWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICBlZGl0b3Iuc2V0Q29udGVudCh0aGlzLmluaXRpYWxWYWx1ZSBhcyBzdHJpbmcpO1xyXG4gICAgICAgIGlmIChlZGl0b3IuZ2V0Q29udGVudCgpICE9PSB0aGlzLmluaXRpYWxWYWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5lbWl0T25DaGFuZ2UoZWRpdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub25Jbml0TmdNb2RlbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLm9uSW5pdE5nTW9kZWwuZW1pdChlZGl0b3IgYXMgdW5rbm93biBhcyBFdmVudE9iajxhbnk+KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbWl0T25DaGFuZ2UoZWRpdG9yOiBUaW55TUNFRWRpdG9yKSB7XHJcbiAgICBpZiAodGhpcy5vbkNoYW5nZUNhbGxiYWNrKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayhlZGl0b3IuZ2V0Q29udGVudCh7IGZvcm1hdDogdGhpcy5vdXRwdXRGb3JtYXQgfSkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=