import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

let ButtonService = class ButtonService {
    constructor() { }
};
ButtonService.ɵprov = ɵɵdefineInjectable({ factory: function ButtonService_Factory() { return new ButtonService(); }, token: ButtonService, providedIn: "root" });
ButtonService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ButtonService);

let ButtonComponent = class ButtonComponent {
    constructor() { }
    ngOnInit() {
        console.log('проверка3dddfffddd');
    }
};
ButtonComponent = __decorate([
    Component({
        selector: 'lib-button',
        template: `
    <p>
      button works!
    </p>
  `
    })
], ButtonComponent);

let ButtonModule = class ButtonModule {
};
ButtonModule = __decorate([
    NgModule({
        declarations: [ButtonComponent],
        imports: [],
        exports: [ButtonComponent]
    })
], ButtonModule);

/*
 * Public API Surface of button
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule, ButtonService };
//# sourceMappingURL=dxul-button.js.map
