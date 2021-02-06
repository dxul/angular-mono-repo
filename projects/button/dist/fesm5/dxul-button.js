import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

var ButtonService = /** @class */ (function () {
    function ButtonService() {
    }
    ButtonService.ɵprov = ɵɵdefineInjectable({ factory: function ButtonService_Factory() { return new ButtonService(); }, token: ButtonService, providedIn: "root" });
    ButtonService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], ButtonService);
    return ButtonService;
}());

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
        console.log('проверка3dddfffddd');
    };
    ButtonComponent = __decorate([
        Component({
            selector: 'lib-button',
            template: "\n    <p>\n      button works!\n    </p>\n  "
        })
    ], ButtonComponent);
    return ButtonComponent;
}());

var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule = __decorate([
        NgModule({
            declarations: [ButtonComponent],
            imports: [],
            exports: [ButtonComponent]
        })
    ], ButtonModule);
    return ButtonModule;
}());

/*
 * Public API Surface of button
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule, ButtonService };
//# sourceMappingURL=dxul-button.js.map
