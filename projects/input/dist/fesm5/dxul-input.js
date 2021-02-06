import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

var InputService = /** @class */ (function () {
    function InputService() {
    }
    InputService.ɵfac = function InputService_Factory(t) { return new (t || InputService)(); };
    InputService.ɵprov = ɵɵdefineInjectable({ token: InputService, factory: InputService.ɵfac, providedIn: 'root' });
    return InputService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var InputComponent = /** @class */ (function () {
    function InputComponent() {
    }
    InputComponent.prototype.ngOnInit = function () {
        console.log('INPUT');
    };
    InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
    InputComponent.ɵcmp = ɵɵdefineComponent({ type: InputComponent, selectors: [["lib-input"]], decls: 2, vars: 0, template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " input works! ");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return InputComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputComponent, [{
        type: Component,
        args: [{
                selector: 'lib-input',
                template: "\n    <p>\n      input works!\n    </p>\n  ",
                styles: []
            }]
    }], function () { return []; }, null); })();

var InputModule = /** @class */ (function () {
    function InputModule() {
    }
    InputModule.ɵmod = ɵɵdefineNgModule({ type: InputModule });
    InputModule.ɵinj = ɵɵdefineInjector({ factory: function InputModule_Factory(t) { return new (t || InputModule)(); }, imports: [[]] });
    return InputModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(InputModule, { declarations: [InputComponent], exports: [InputComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputModule, [{
        type: NgModule,
        args: [{
                declarations: [InputComponent],
                imports: [],
                exports: [InputComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of input
 */

/**
 * Generated bundle index. Do not edit.
 */

export { InputComponent, InputModule, InputService };
//# sourceMappingURL=dxul-input.js.map
