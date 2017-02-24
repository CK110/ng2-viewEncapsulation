import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'component-one',
    template: `

      <div class="red"></div>
      
      <br>
      
      <div class="green"></div>
      
      <br>
      
      <div class="blue"></div>
    `,
    styles:[`
        .green{
          background-color: green;
          width:20px;
          height: 20px;
        }
    `],
    encapsulation:ViewEncapsulation.None
})
export class ComponentOne implements OnInit {
    constructor() { }

    ngOnInit() { }

}
