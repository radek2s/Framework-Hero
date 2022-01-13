import { Component } from "@angular/core";

@Component({
    selector: 'directives-view',
    templateUrl: './directives.component.html',
})
export class DirectivesComponent {
    
    code1 = `<div [ngClass]="{'selected': true, 'disabled': !isAdmin()}">
    Hello User!
</div>`;

    code2 = `<div class="card card--title" [ngClass]="isValid ? '' : 'card--error'">
    <h2>Login form</h2>
</div>`;

    code3a = `@Component({
    selector: 'app-input-label',
    templateUrl: './input-label.component.html',
})
export class InputLabelComponent {
    
    @Input() required: string;
    @Input() disabled: string;

    inputStyles = {
        'font-weight': this.required ? 'bold' : 'normal',
        'color': this.disabled ? '#999' : '#000'
    };
}`;

    code3b = `<span [ngStyle]="inputStyles"> Label text </span>`;

    code4 = `<span *ngIf="basketItems > 0"> You have {{basketItem}} items in your basket.</span>`;

    code5 = `<div *ngFor="let item in basketProducts">{{item.name}}</div>`;

    code5b = `<div *ngFor="let item in basketProducts; let i=index">
    {{i+1}}: {{item.name}}
</div>`;

    code5c = `trackItems(index: number, item: any): number {return item.id;}`

    code5d = `<div *ngFor="let item in basketProducts; trackBy: trackItems">
    {{i+1}}: {{item.name}}
</div>`;

    code6 = `<div [ngSwitch]="user.gender">
    <div *ngSwitchCase="'male'">Special offer for military stuff!</div>
    <div *ngSwitchCase="'female'">We are starting a winter discount!</div>
    <div *ngSwitchDefault>Welcome to our shop!</div>
</div>`;

    code4ext = `<ng-template [ngIf]="basketItems > 0">
    <span> You have {{basketItem}} items in your basket.</span>
</ng-template>`;

    

    



    
};

    