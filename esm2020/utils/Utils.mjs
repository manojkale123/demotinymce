/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { validEvents } from '../editor/Events';
// Caretaker note: `fromEvent` supports passing JQuery-style event targets, the editor has `on` and `off` methods which
// will be invoked upon subscription and teardown.
const listenTinyMCEEvent = (editor, eventName, destroy$) => fromEvent(editor, eventName).pipe(takeUntil(destroy$));
const bindHandlers = (ctx, editor, destroy$) => {
    const allowedEvents = getValidEvents(ctx);
    allowedEvents.forEach((eventName) => {
        const eventEmitter = ctx[eventName];
        listenTinyMCEEvent(editor, eventName.substring(2), destroy$).subscribe((event) => {
            // Caretaker note: `ngZone.run()` runs change detection since it notifies the forked Angular zone that it's
            // being re-entered. We don't want to run `ApplicationRef.tick()` if anyone listens to the specific event
            // within the template. E.g. if the `onSelectionChange` is not listened within the template like:
            // `<editor (onSelectionChange)="..."></editor>`
            // then its `observers` array will be empty, and we won't run "dead" change detection.
            if (eventEmitter.observers.length > 0) {
                ctx.ngZone.run(() => eventEmitter.emit({ event, editor }));
            }
        });
    });
};
const getValidEvents = (ctx) => {
    const ignoredEvents = parseStringProperty(ctx.ignoreEvents, []);
    const allowedEvents = parseStringProperty(ctx.allowedEvents, validEvents).filter((event) => validEvents.includes(event) && !ignoredEvents.includes(event));
    return allowedEvents;
};
const parseStringProperty = (property, defaultValue) => {
    if (typeof property === 'string') {
        return property.split(',').map((value) => value.trim());
    }
    if (Array.isArray(property)) {
        return property;
    }
    return defaultValue;
};
let unique = 0;
const uuid = (prefix) => {
    const date = new Date();
    const time = date.getTime();
    const random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
const isTextarea = (element) => typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
const normalizePluginArray = (plugins) => {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
const mergePlugins = (initPlugins, inputPlugins) => normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => { };
const isNullOrUndefined = (value) => value === null || value === undefined;
export { listenTinyMCEEvent, bindHandlers, uuid, isTextarea, normalizePluginArray, mergePlugins, noop, isNullOrUndefined };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi90aW55bWNlLWFuZ3VsYXItY29tcG9uZW50L3NyYy9tYWluL3RzL3V0aWxzL1V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUdILE9BQU8sRUFBRSxTQUFTLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFFMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxXQUFXLEVBQVUsTUFBTSxrQkFBa0IsQ0FBQztBQUV2RCx1SEFBdUg7QUFDdkgsa0RBQWtEO0FBQ2xELE1BQU0sa0JBQWtCLEdBQUcsQ0FDekIsTUFBVyxFQUNYLFNBQWlCLEVBQ2pCLFFBQXVCLEVBQ3ZCLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBd0YsRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFFOUksTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFvQixFQUFFLE1BQVcsRUFBRSxRQUF1QixFQUFRLEVBQUU7SUFDeEYsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtRQUNsQyxNQUFNLFlBQVksR0FBc0IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXZELGtCQUFrQixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQy9FLDJHQUEyRztZQUMzRyx5R0FBeUc7WUFDekcsaUdBQWlHO1lBQ2pHLGdEQUFnRDtZQUNoRCxzRkFBc0Y7WUFDdEYsSUFBSSxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3JDLEdB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UyxDQUFDO0FBRTNHLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsWUFBWSxFQUNaLElBQUksRUFDSixVQUFVLEVBQ1Ysb0JBQW9CLEVBQ3BCLFlBQVksRUFDWixJQUFJLEVBQ0osaUJBQWlCLEVBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ29weXJpZ2h0IChjKSAyMDE3LXByZXNlbnQsIEVwaG94LCBJbmMuXHJcbiAqXHJcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cclxuICpcclxuICovXHJcblxyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEhhc0V2ZW50VGFyZ2V0QWRkUmVtb3ZlIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uL2VkaXRvci9lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgdmFsaWRFdmVudHMsIEV2ZW50cyB9IGZyb20gJy4uL2VkaXRvci9FdmVudHMnO1xyXG5cclxuLy8gQ2FyZXRha2VyIG5vdGU6IGBmcm9tRXZlbnRgIHN1cHBvcnRzIHBhc3NpbmcgSlF1ZXJ5LXN0eWxlIGV2ZW50IHRhcmdldHMsIHRoZSBlZGl0b3IgaGFzIGBvbmAgYW5kIGBvZmZgIG1ldGhvZHMgd2hpY2hcclxuLy8gd2lsbCBiZSBpbnZva2VkIHVwb24gc3Vic2NyaXB0aW9uIGFuZCB0ZWFyZG93bi5cclxuY29uc3QgbGlzdGVuVGlueU1DRUV2ZW50ID0gKFxyXG4gIGVkaXRvcjogYW55LFxyXG4gIGV2ZW50TmFtZTogc3RyaW5nLFxyXG4gIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+XHJcbikgPT4gZnJvbUV2ZW50KGVkaXRvciBhcyBIYXNFdmVudFRhcmdldEFkZFJlbW92ZTx1bmtub3duPiB8IEFycmF5TGlrZTxIYXNFdmVudFRhcmdldEFkZFJlbW92ZTx1bmtub3duPj4sIGV2ZW50TmFtZSkucGlwZSh0YWtlVW50aWwoZGVzdHJveSQpKTtcclxuXHJcbmNvbnN0IGJpbmRIYW5kbGVycyA9IChjdHg6IEVkaXRvckNvbXBvbmVudCwgZWRpdG9yOiBhbnksIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+KTogdm9pZCA9PiB7XHJcbiAgY29uc3QgYWxsb3dlZEV2ZW50cyA9IGdldFZhbGlkRXZlbnRzKGN0eCk7XHJcbiAgYWxsb3dlZEV2ZW50cy5mb3JFYWNoKChldmVudE5hbWUpID0+IHtcclxuICAgIGNvbnN0IGV2ZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBjdHhbZXZlbnROYW1lXTtcclxuXHJcbiAgICBsaXN0ZW5UaW55TUNFRXZlbnQoZWRpdG9yLCBldmVudE5hbWUuc3Vic3RyaW5nKDIpLCBkZXN0cm95JCkuc3Vic2NyaWJlKChldmVudCkgPT4ge1xyXG4gICAgICAvLyBDYXJldGFrZXIgbm90ZTogYG5nWm9uZS5ydW4oKWAgcnVucyBjaGFuZ2UgZGV0ZWN0aW9uIHNpbmNlIGl0IG5vdGlmaWVzIHRoZSBmb3JrZWQgQW5ndWxhciB6b25lIHRoYXQgaXQnc1xyXG4gICAgICAvLyBiZWluZyByZS1lbnRlcmVkLiBXZSBkb24ndCB3YW50IHRvIHJ1biBgQXBwbGljYXRpb25SZWYudGljaygpYCBpZiBhbnlvbmUgbGlzdGVucyB0byB0aGUgc3BlY2lmaWMgZXZlbnRcclxuICAgICAgLy8gd2l0aGluIHRoZSB0ZW1wbGF0ZS4gRS5nLiBpZiB0aGUgYG9uU2VsZWN0aW9uQ2hhbmdlYCBpcyBub3QgbGlzdGVuZWQgd2l0aGluIHRoZSB0ZW1wbGF0ZSBsaWtlOlxyXG4gICAgICAvLyBgPGVkaXRvciAob25TZWxlY3Rpb25DaGFuZ2UpPVwiLi4uXCI+PC9lZGl0b3I+YFxyXG4gICAgICAvLyB0aGVuIGl0cyBgb2JzZXJ2ZXJzYCBhcnJheSB3aWxsIGJlIGVtcHR5LCBhbmQgd2Ugd29uJ3QgcnVuIFwiZGVhZFwiIGNoYW5nZSBkZXRlY3Rpb24uXHJcbiAgICAgIGlmIChldmVudEVtaXR0ZXIub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjdHgubmdab25lLnJ1bigoKSA9PiBldmVudEVtaXR0ZXIuZW1pdCh7IGV2ZW50LCBlZGl0b3IgfSkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldFZhbGlkRXZlbnRzID0gKGN0eDogRWRpdG9yQ29tcG9uZW50KTogKGtleW9mIEV2ZW50cylbXSA9PiB7XHJcbiAgY29uc3QgaWdub3JlZEV2ZW50cyA9IHBhcnNlU3RyaW5nUHJvcGVydHkoY3R4Lmlnbm9yZUV2ZW50cywgW10pO1xyXG4gIGNvbnN0IGFsbG93ZWRFdmVudHMgPSBwYXJzZVN0cmluZ1Byb3BlcnR5KGN0eC5hbGxvd2VkRXZlbnRzLCB2YWxpZEV2ZW50cykuZmlsdGVyKFxyXG4gICAgKGV2ZW50KSA9PiB2YWxpZEV2ZW50cy5pbmNsdWRlcyhldmVudCBhcyAoa2V5b2YgRXZlbnRzKSkgJiYgIWlnbm9yZWRFdmVudHMuaW5jbHVkZXMoZXZlbnQpKSBhcyAoa2V5b2YgRXZlbnRzKVtdO1xyXG4gIHJldHVybiBhbGxvd2VkRXZlbnRzO1xyXG59O1xyXG5cclxuY29uc3QgcGFyc2VTdHJpbmdQcm9wZXJ0eSA9IChwcm9wZXJ0eTogc3RyaW5nIHwgc3RyaW5nW10gfCB1bmRlZmluZWQsIGRlZmF1bHRWYWx1ZTogKGtleW9mIEV2ZW50cylbXSk6IHN0cmluZ1tdID0+IHtcclxuICBpZiAoIHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiBwcm9wZXJ0eS5zcGxpdCgnLCcpLm1hcCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSk7XHJcbiAgfVxyXG4gIGlmICggQXJyYXkuaXNBcnJheShwcm9wZXJ0eSkpIHtcclxuICAgIHJldHVybiBwcm9wZXJ0eTtcclxuICB9XHJcbiAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxufTtcclxuXHJcbmxldCB1bmlxdWUgPSAwO1xyXG5cclxuY29uc3QgdXVpZCA9IChwcmVmaXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgdGltZSA9IGRhdGUuZ2V0VGltZSgpO1xyXG4gIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDApO1xyXG5cclxuICB1bmlxdWUrKztcclxuXHJcbiAgcmV0dXJuIHByZWZpeCArICdfJyArIHJhbmRvbSArIHVuaXF1ZSArIFN0cmluZyh0aW1lKTtcclxufTtcclxuXHJcbmNvbnN0IGlzVGV4dGFyZWEgPSAoZWxlbWVudD86IEVsZW1lbnQpOiBlbGVtZW50IGlzIEhUTUxUZXh0QXJlYUVsZW1lbnQgPT4gdHlwZW9mIGVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGV4dGFyZWEnO1xyXG5cclxuY29uc3Qgbm9ybWFsaXplUGx1Z2luQXJyYXkgPSAocGx1Z2lucz86IHN0cmluZyB8IHN0cmluZ1tdKTogc3RyaW5nW10gPT4ge1xyXG4gIGlmICh0eXBlb2YgcGx1Z2lucyA9PT0gJ3VuZGVmaW5lZCcgfHwgcGx1Z2lucyA9PT0gJycpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIHJldHVybiBBcnJheS5pc0FycmF5KHBsdWdpbnMpID8gcGx1Z2lucyA6IHBsdWdpbnMuc3BsaXQoJyAnKTtcclxufTtcclxuXHJcbmNvbnN0IG1lcmdlUGx1Z2lucyA9IChpbml0UGx1Z2luczogc3RyaW5nIHwgc3RyaW5nW10sIGlucHV0UGx1Z2lucz86IHN0cmluZyB8IHN0cmluZ1tdKSA9PlxyXG4gIG5vcm1hbGl6ZVBsdWdpbkFycmF5KGluaXRQbHVnaW5zKS5jb25jYXQobm9ybWFsaXplUGx1Z2luQXJyYXkoaW5wdXRQbHVnaW5zKSk7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXHJcbmNvbnN0IG5vb3A6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuXHJcbmNvbnN0IGlzTnVsbE9yVW5kZWZpbmVkID0gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBudWxsIHwgdW5kZWZpbmVkID0+IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XHJcblxyXG5leHBvcnQge1xyXG4gIGxpc3RlblRpbnlNQ0VFdmVudCxcclxuICBiaW5kSGFuZGxlcnMsXHJcbiAgdXVpZCxcclxuICBpc1RleHRhcmVhLFxyXG4gIG5vcm1hbGl6ZVBsdWdpbkFycmF5LFxyXG4gIG1lcmdlUGx1Z2lucyxcclxuICBub29wLFxyXG4gIGlzTnVsbE9yVW5kZWZpbmVkXHJcbn07XHJcbiJdfQ==