import { Output, EventEmitter, Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class Events {
    constructor() {
        this.onBeforePaste = new EventEmitter();
        this.onBlur = new EventEmitter();
        this.onClick = new EventEmitter();
        this.onContextMenu = new EventEmitter();
        this.onCopy = new EventEmitter();
        this.onCut = new EventEmitter();
        this.onDblclick = new EventEmitter();
        this.onDrag = new EventEmitter();
        this.onDragDrop = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onDragGesture = new EventEmitter();
        this.onDragOver = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onFocusIn = new EventEmitter();
        this.onFocusOut = new EventEmitter();
        this.onKeyDown = new EventEmitter();
        this.onKeyPress = new EventEmitter();
        this.onKeyUp = new EventEmitter();
        this.onMouseDown = new EventEmitter();
        this.onMouseEnter = new EventEmitter();
        this.onMouseLeave = new EventEmitter();
        this.onMouseMove = new EventEmitter();
        this.onMouseOut = new EventEmitter();
        this.onMouseOver = new EventEmitter();
        this.onMouseUp = new EventEmitter();
        this.onPaste = new EventEmitter();
        this.onSelectionChange = new EventEmitter();
        this.onActivate = new EventEmitter();
        this.onAddUndo = new EventEmitter();
        this.onBeforeAddUndo = new EventEmitter();
        this.onBeforeExecCommand = new EventEmitter();
        this.onBeforeGetContent = new EventEmitter();
        this.onBeforeRenderUI = new EventEmitter();
        this.onBeforeSetContent = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onClearUndos = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.onDirty = new EventEmitter();
        this.onExecCommand = new EventEmitter();
        this.onGetContent = new EventEmitter();
        this.onHide = new EventEmitter();
        this.onInit = new EventEmitter();
        this.onInitNgModel = new EventEmitter();
        this.onLoadContent = new EventEmitter();
        this.onNodeChange = new EventEmitter();
        this.onPostProcess = new EventEmitter();
        this.onPostRender = new EventEmitter();
        this.onPreInit = new EventEmitter();
        this.onPreProcess = new EventEmitter();
        this.onProgressState = new EventEmitter();
        this.onRedo = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onReset = new EventEmitter();
        this.onResizeEditor = new EventEmitter();
        this.onSaveContent = new EventEmitter();
        this.onSetAttrib = new EventEmitter();
        this.onObjectResizeStart = new EventEmitter();
        this.onObjectResized = new EventEmitter();
        this.onObjectSelected = new EventEmitter();
        this.onSetContent = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onSubmit = new EventEmitter();
        this.onUndo = new EventEmitter();
        this.onVisualAid = new EventEmitter();
    }
}
Events.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: Events, deps: [], target: i0.ɵɵFactoryTarget.Directive });
Events.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.0.4", type: Events, outputs: { onBeforePaste: "onBeforePaste", onBlur: "onBlur", onClick: "onClick", onContextMenu: "onContextMenu", onCopy: "onCopy", onCut: "onCut", onDblclick: "onDblclick", onDrag: "onDrag", onDragDrop: "onDragDrop", onDragEnd: "onDragEnd", onDragGesture: "onDragGesture", onDragOver: "onDragOver", onDrop: "onDrop", onFocus: "onFocus", onFocusIn: "onFocusIn", onFocusOut: "onFocusOut", onKeyDown: "onKeyDown", onKeyPress: "onKeyPress", onKeyUp: "onKeyUp", onMouseDown: "onMouseDown", onMouseEnter: "onMouseEnter", onMouseLeave: "onMouseLeave", onMouseMove: "onMouseMove", onMouseOut: "onMouseOut", onMouseOver: "onMouseOver", onMouseUp: "onMouseUp", onPaste: "onPaste", onSelectionChange: "onSelectionChange", onActivate: "onActivate", onAddUndo: "onAddUndo", onBeforeAddUndo: "onBeforeAddUndo", onBeforeExecCommand: "onBeforeExecCommand", onBeforeGetContent: "onBeforeGetContent", onBeforeRenderUI: "onBeforeRenderUI", onBeforeSetContent: "onBeforeSetContent", onChange: "onChange", onClearUndos: "onClearUndos", onDeactivate: "onDeactivate", onDirty: "onDirty", onExecCommand: "onExecCommand", onGetContent: "onGetContent", onHide: "onHide", onInit: "onInit", onInitNgModel: "onInitNgModel", onLoadContent: "onLoadContent", onNodeChange: "onNodeChange", onPostProcess: "onPostProcess", onPostRender: "onPostRender", onPreInit: "onPreInit", onPreProcess: "onPreProcess", onProgressState: "onProgressState", onRedo: "onRedo", onRemove: "onRemove", onReset: "onReset", onResizeEditor: "onResizeEditor", onSaveContent: "onSaveContent", onSetAttrib: "onSetAttrib", onObjectResizeStart: "onObjectResizeStart", onObjectResized: "onObjectResized", onObjectSelected: "onObjectSelected", onSetContent: "onSetContent", onShow: "onShow", onSubmit: "onSubmit", onUndo: "onUndo", onVisualAid: "onVisualAid" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.4", ngImport: i0, type: Events, decorators: [{
            type: Directive
        }], propDecorators: { onBeforePaste: [{
                type: Output
            }], onBlur: [{
                type: Output
            }], onClick: [{
                type: Output
            }], onContextMenu: [{
                type: Output
            }], onCopy: [{
                type: Output
            }], onCut: [{
                type: Output
            }], onDblclick: [{
                type: Output
            }], onDrag: [{
                type: Output
            }], onDragDrop: [{
                type: Output
            }], onDragEnd: [{
                type: Output
            }], onDragGesture: [{
                type: Output
            }], onDragOver: [{
                type: Output
            }], onDrop: [{
                type: Output
            }], onFocus: [{
                type: Output
            }], onFocusIn: [{
                type: Output
            }], onFocusOut: [{
                type: Output
            }], onKeyDown: [{
                type: Output
            }], onKeyPress: [{
                type: Output
            }], onKeyUp: [{
                type: Output
            }], onMouseDown: [{
                type: Output
            }], onMouseEnter: [{
                type: Output
            }], onMouseLeave: [{
                type: Output
            }], onMouseMove: [{
                type: Output
            }], onMouseOut: [{
                type: Output
            }], onMouseOver: [{
                type: Output
            }], onMouseUp: [{
                type: Output
            }], onPaste: [{
                type: Output
            }], onSelectionChange: [{
                type: Output
            }], onActivate: [{
                type: Output
            }], onAddUndo: [{
                type: Output
            }], onBeforeAddUndo: [{
                type: Output
            }], onBeforeExecCommand: [{
                type: Output
            }], onBeforeGetContent: [{
                type: Output
            }], onBeforeRenderUI: [{
                type: Output
            }], onBeforeSetContent: [{
                type: Output
            }], onChange: [{
                type: Output
            }], onClearUndos: [{
                type: Output
            }], onDeactivate: [{
                type: Output
            }], onDirty: [{
                type: Output
            }], onExecCommand: [{
                type: Output
            }], onGetContent: [{
                type: Output
            }], onHide: [{
                type: Output
            }], onInit: [{
                type: Output
            }], onInitNgModel: [{
                type: Output
            }], onLoadContent: [{
                type: Output
            }], onNodeChange: [{
                type: Output
            }], onPostProcess: [{
                type: Output
            }], onPostRender: [{
                type: Output
            }], onPreInit: [{
                type: Output
            }], onPreProcess: [{
                type: Output
            }], onProgressState: [{
                type: Output
            }], onRedo: [{
                type: Output
            }], onRemove: [{
                type: Output
            }], onReset: [{
                type: Output
            }], onResizeEditor: [{
                type: Output
            }], onSaveContent: [{
                type: Output
            }], onSetAttrib: [{
                type: Output
            }], onObjectResizeStart: [{
                type: Output
            }], onObjectResized: [{
                type: Output
            }], onObjectSelected: [{
                type: Output
            }], onSetContent: [{
                type: Output
            }], onShow: [{
                type: Output
            }], onSubmit: [{
                type: Output
            }], onUndo: [{
                type: Output
            }], onVisualAid: [{
                type: Output
            }] } });
export const validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onResizeEditor',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdGlueW1jZS1hbmd1bGFyLWNvbXBvbmVudC9zcmMvbWFpbi90cy9lZGl0b3IvRXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFTaEUsTUFBTSxPQUFPLE1BQU07SUFEbkI7UUFFbUIsa0JBQWEsR0FBMkMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzRSxXQUFNLEdBQXVDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEUsWUFBTyxHQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pFLGtCQUFhLEdBQXVDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkUsV0FBTSxHQUEyQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BFLFVBQUssR0FBMkMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRSxlQUFVLEdBQXVDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEUsV0FBTSxHQUFzQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9ELGVBQVUsR0FBc0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRSxjQUFTLEdBQXNDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEUsa0JBQWEsR0FBc0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0RSxlQUFVLEdBQXNDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkUsV0FBTSxHQUFzQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9ELFlBQU8sR0FBdUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRSxjQUFTLEdBQXVDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkUsZUFBVSxHQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BFLGNBQVMsR0FBMEMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0RSxlQUFVLEdBQTBDLElBQUksWUFBWSxF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V0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osUUFBUTtJQUNSLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsUUFBUTtJQUNSLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGNBQWM7SUFDZCxjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0lBQ2QsUUFBUTtJQUNSLFVBQVU7SUFDVixRQUFRO0lBQ1IsYUFBYTtDQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVkaXRvciBhcyBUaW55TUNFRWRpdG9yIH0gZnJvbSAndGlueW1jZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50T2JqPFQ+IHtcclxuICBldmVudDogVDtcclxuICBlZGl0b3I6IFRpbnlNQ0VFZGl0b3I7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgY2xhc3MgRXZlbnRzIHtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uQmVmb3JlUGFzdGU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxDbGlwYm9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25CbHVyOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Rm9jdXNFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25DbGljazogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uQ29udGV4dE1lbnU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxNb3VzZUV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkNvcHk6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxDbGlwYm9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25DdXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxDbGlwYm9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25EYmxjbGljazogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uRHJhZzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPERyYWdFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25EcmFnRHJvcDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPERyYWdFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RHJhZ0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkRyYWdHZXN0dXJlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RHJhZ0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkRyYWdPdmVyOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8RHJhZ0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkRyb3A6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxEcmFnRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uRm9jdXM6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxGb2N1c0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkZvY3VzSW46IEV2ZW50RW1pdHRlcjxFdmVudE9iajxGb2N1c0V2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkZvY3VzT3V0OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8Rm9jdXNFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25LZXlEb3duOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8S2V5Ym9hcmRFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25LZXlQcmVzczogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEtleWJvYXJkRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uS2V5VXA6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxLZXlib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbk1vdXNlRG93bjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uTW91c2VFbnRlcjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uTW91c2VMZWF2ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uTW91c2VNb3ZlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Nb3VzZU91dDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPE1vdXNlRXZlbnQ+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uTW91c2VPdmVyOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Nb3VzZVVwOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8TW91c2VFdmVudD4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25QYXN0ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPENsaXBib2FyZEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvblNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPEV2ZW50Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkFjdGl2YXRlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkFkZFVuZG86IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uQmVmb3JlQWRkVW5kbzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25CZWZvcmVFeGVjQ29tbWFuZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25CZWZvcmVHZXRDb250ZW50OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkJlZm9yZVJlbmRlclVJOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkJlZm9yZVNldENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkNsZWFyVW5kb3M6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uRGVhY3RpdmF0ZTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25EaXJ0eTogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25FeGVjQ29tbWFuZDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25HZXRDb250ZW50OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkhpZGU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uSW5pdDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Jbml0TmdNb2RlbDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Mb2FkQ29udGVudDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25Ob2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvblBvc3RQcm9jZXNzOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvblBvc3RSZW5kZXI6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uUHJlSW5pdDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25QcmVQcm9jZXNzOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvblByb2dyZXNzU3RhdGU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uUmVkbzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25SZW1vdmU6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uUmVzZXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uUmVzaXplRWRpdG9yOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvblNhdmVDb250ZW50OiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvblNldEF0dHJpYjogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25PYmplY3RSZXNpemVTdGFydDogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25PYmplY3RSZXNpemVkOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbk9iamVjdFNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8RXZlbnRPYmo8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvblNldENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uU2hvdzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25TdWJtaXQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uVW5kbzogRXZlbnRFbWl0dGVyPEV2ZW50T2JqPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25WaXN1YWxBaWQ6IEV2ZW50RW1pdHRlcjxFdmVudE9iajxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkRXZlbnRzOiAoa2V5b2YgRXZlbnRzKVtdID0gW1xyXG4gICdvbkFjdGl2YXRlJyxcclxuICAnb25BZGRVbmRvJyxcclxuICAnb25CZWZvcmVBZGRVbmRvJyxcclxuICAnb25CZWZvcmVFeGVjQ29tbWFuZCcsXHJcbiAgJ29uQmVmb3JlR2V0Q29udGVudCcsXHJcbiAgJ29uQmVmb3JlUmVuZGVyVUknLFxyXG4gICdvbkJlZm9yZVNldENvbnRlbnQnLFxyXG4gICdvbkJlZm9yZVBhc3RlJyxcclxuICAnb25CbHVyJyxcclxuICAnb25DaGFuZ2UnLFxyXG4gICdvbkNsZWFyVW5kb3MnLFxyXG4gICdvbkNsaWNrJyxcclxuICAnb25Db250ZXh0TWVudScsXHJcbiAgJ29uQ29weScsXHJcbiAgJ29uQ3V0JyxcclxuICAnb25EYmxjbGljaycsXHJcbiAgJ29uRGVhY3RpdmF0ZScsXHJcbiAgJ29uRGlydHknLFxyXG4gICdvbkRyYWcnLFxyXG4gICdvbkRyYWdEcm9wJyxcclxuICAnb25EcmFnRW5kJyxcclxuICAnb25EcmFnR2VzdHVyZScsXHJcbiAgJ29uRHJhZ092ZXInLFxyXG4gICdvbkRyb3AnLFxyXG4gICdvbkV4ZWNDb21tYW5kJyxcclxuICAnb25Gb2N1cycsXHJcbiAgJ29uRm9jdXNJbicsXHJcbiAgJ29uRm9jdXNPdXQnLFxyXG4gICdvbkdldENvbnRlbnQnLFxyXG4gICdvbkhpZGUnLFxyXG4gICdvbkluaXQnLFxyXG4gICdvbktleURvd24nLFxyXG4gICdvbktleVByZXNzJyxcclxuICAnb25LZXlVcCcsXHJcbiAgJ29uTG9hZENvbnRlbnQnLFxyXG4gICdvbk1vdXNlRG93bicsXHJcbiAgJ29uTW91c2VFbnRlcicsXHJcbiAgJ29uTW91c2VMZWF2ZScsXHJcbiAgJ29uTW91c2VNb3ZlJyxcclxuICAnb25Nb3VzZU91dCcsXHJcbiAgJ29uTW91c2VPdmVyJyxcclxuICAnb25Nb3VzZVVwJyxcclxuICAnb25Ob2RlQ2hhbmdlJyxcclxuICAnb25PYmplY3RSZXNpemVTdGFydCcsXHJcbiAgJ29uT2JqZWN0UmVzaXplZCcsXHJcbiAgJ29uT2JqZWN0U2VsZWN0ZWQnLFxyXG4gICdvblBhc3RlJyxcclxuICAnb25Qb3N0UHJvY2VzcycsXHJcbiAgJ29uUG9zdFJlbmRlcicsXHJcbiAgJ29uUHJlUHJvY2VzcycsXHJcbiAgJ29uUHJvZ3Jlc3NTdGF0ZScsXHJcbiAgJ29uUmVkbycsXHJcbiAgJ29uUmVtb3ZlJyxcclxuICAnb25SZXNldCcsXHJcbiAgJ29uUmVzaXplRWRpdG9yJyxcclxuICAnb25TYXZlQ29udGVudCcsXHJcbiAgJ29uU2VsZWN0aW9uQ2hhbmdlJyxcclxuICAnb25TZXRBdHRyaWInLFxyXG4gICdvblNldENvbnRlbnQnLFxyXG4gICdvblNob3cnLFxyXG4gICdvblN1Ym1pdCcsXHJcbiAgJ29uVW5kbycsXHJcbiAgJ29uVmlzdWFsQWlkJ1xyXG5dO1xyXG4iXX0=