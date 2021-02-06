import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class InputComponent {
    constructor() { }
    ngOnInit() {
        console.log('INPUT');
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InputComponent, selectors: [["lib-input"]], decls: 2, vars: 0, template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, " input works! ");
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputComponent, [{
        type: Component,
        args: [{
                selector: 'lib-input',
                template: `
    <p>
      input works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGR4dWwvaW5wdXQvIiwic291cmNlcyI6WyJsaWIvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBWWxELE1BQU0sT0FBTyxjQUFjO0lBRXpCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7OzRFQU5VLGNBQWM7bURBQWQsY0FBYztRQVB2Qix5QkFDRTtRQUFBLDhCQUNGO1FBQUEsaUJBQUk7O2tEQUtLLGNBQWM7Y0FWMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxNQUFNLEVBQUUsRUFDUDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWlucHV0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGlucHV0IHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ0lOUFVUJyk7XG4gIH1cblxufVxuIl19