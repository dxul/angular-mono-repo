(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@dxul/input', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.dxul = global.dxul || {}, global.dxul.input = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var InputService = /** @class */ (function () {
        function InputService() {
        }
        InputService.ɵfac = function InputService_Factory(t) { return new (t || InputService)(); };
        InputService.ɵprov = core.ɵɵdefineInjectable({ token: InputService, factory: InputService.ɵfac, providedIn: 'root' });
        return InputService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(InputService, [{
            type: core.Injectable,
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
        InputComponent.ɵcmp = core.ɵɵdefineComponent({ type: InputComponent, selectors: [["lib-input"]], decls: 2, vars: 0, template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, " input works! ");
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return InputComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(InputComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-input',
                    template: "\n    <p>\n      input works!\n    </p>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var InputModule = /** @class */ (function () {
        function InputModule() {
        }
        InputModule.ɵmod = core.ɵɵdefineNgModule({ type: InputModule });
        InputModule.ɵinj = core.ɵɵdefineInjector({ factory: function InputModule_Factory(t) { return new (t || InputModule)(); }, imports: [[]] });
        return InputModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(InputModule, { declarations: [InputComponent], exports: [InputComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(InputModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [InputComponent],
                    imports: [],
                    exports: [InputComponent]
                }]
        }], null, null); })();

    exports.InputComponent = InputComponent;
    exports.InputModule = InputModule;
    exports.InputService = InputService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dxul-input.umd.js.map
