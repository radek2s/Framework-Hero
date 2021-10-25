import { Component } from '@angular/core';

@Component({
    selector: 'slots',
    templateUrl: './slots.component.html',
    //   styleUrls: ['./home.component.css']
})
export class SlotsComponent {


    code0child = ` import { Component } from '@angular/core';

    @Component({
      selector: 'child-component',
      template: \`
        <h1>Header of child</h1> 
        <ng-content></ng-content>
        <footer>Footer of child</footer>
        \`,
    })
    export class ChildComponent { }
       `;

    code0parent = `
    <child-component>
        <section>
            <h2>Parent section to be displayed</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
    </child-component>`

    
    code1child = ` import { Component } from '@angular/core';

    @Component({
      selector: 'child-component',
      template: \`
        <ng-content select="[header]"></ng-content>
        <ng-content></ng-content>
        <footer>Footer of child</footer>
        \`,
    })
    export class ChildComponent { }
       `;

    code1parent = `
    <child-component>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h1 header>Parent header to be rendered first</h1>
    </child-component>`


    
}

