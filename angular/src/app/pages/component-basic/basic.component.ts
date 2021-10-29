import { Component, Input } from '@angular/core';

@Component({
  selector: 'basic',
  templateUrl: './basic.component.html',
//   styleUrls: ['./home.component.css']
})
export class BasicComponent {
    @Input() framework: String;
    welcomeMessage: string = 'Hello from ';

    code1 = ` import { Component } from '@angular/core';

 @Component({
   selector: 'single-component-selector',
   template: '<h1>Hello from Angular SFC</h1>',
   styles: ['h1 {font-weight: bold;}']
 })
 export class SingleComponent {
   constructor() { }
 }
    `

    code2 = ` import { Component } from '@angular/core';

 @Component({
   selector: 'basic-component-selector',
   templateUrl: './basic.component.html', //templateUrl instead of template
   styleUrls: ['./basic.component.css']  //styleUrls instead of styles
 })
 export class BasicComponent {
   constructor() { }
 }
    `

    code3 = ` <div>
   <h2>Angular component</h2>
   <!-- Below is the BasicComponent usage example -->
   <basic-component-selector></basic-component-selector>
 </div>
       `

    code4 = ` /* ... */
 import { BasicComponent } from './basic-component/basic.component'
 
 @NgModule({
   declatations: [
     /* ... */
     BasicComponent,
    ],
    /* ... */
 })
 export class AppModule { } 
`
      
    
    
}

