import { Component } from '@angular/core';

@Component({
    selector: 'props',
    templateUrl: './props.component.html',
    //   styleUrls: ['./home.component.css']
})
export class PropsComponent {


    code0 = ` import { Component } from '@angular/core';

    @Component({
      selector: 'single-selector',
      template: '<h1>Hello from {{welcomeMessage}}</h1>',
    })
    export class SingleComponent {
      
      welcomeMessage: string;

      constructor() {
          this.welcomeMessage = "Angular Property!";
      }
    }
       `


    code1ts = ` import { Component, Input } from '@angular/core';

 @Component({
   selector: 'single-props-selector',
   template: '<h1>Hello from {{welcomeMessage}}</h1>'
 })
 export class PropsComponent {
    @Input() welcomeMessage: String;

    constructor() { }
 }
    `

    code1html = ` <div>
   <single-props-selector welcomeMessage="Angular Child Component"></single-props-selector>
 </div>
    `

    code2ts = ` import { Component } from '@angular/core';

 @Component({
   selector: 'parent-selector',
   templateUrl: 'parent.component.html'
 })
 export class ParentComponent {
    framework: string = 'Angular';

    constructor() { }
 }
    `
    code2html = ` <div>
    <single-props-selector [welcomeMessage]="framework"></single-props-selector>
  </div>
     `

    code3ts = ` import { Component, Output, EventEmitter } from '@angular/core';

    @Component({
      selector: 'single-emit-selector',
      template: '<button (click)="increaseNumber()">Increase number</button>'
    })
    export class EmitComponent {

        currentValue: number = 0;
        @Output() increasedEvent = new EventEmitter<number>();
   
       constructor() { }

       increaseNumber() {
           this.currentValue++;
           this.increasedEvent.emit(currentValue));
       }
    }
       `
    
    code3html = ` <div>
        <p>Clicked: {{counter}} times.</p>
        <single-emit-selector (increasedEvent)="onIncreased($event)"></single-emit-selector>
      </div>
         `

    code3ts2 = ` import { Component } from '@angular/core';

         @Component({
           selector: 'emit-parent-selector',
           templateUrl: '...'
         })
         export class EmitParentComponent {
             counter: number = 0;
        
            constructor() { }
     
            onIncreased(newValue: number) {
                this.counter = newValue;
            }
         }
            `

    code4 = ` <div>
            <input [(ngModel)]="childName">
            <p>Hello {{childName}}</p>
          </div>
             `

             code4module = ` 
             import { NgModule } from '@angular/core';
             ...
             import {FormsModule} from '@angular/forms';    
             ...
             
             @NgModule({
               imports: [
                 ...
                 FormsModule
               ],
               ...
             })
             export class AppModule { }
              `

}

