import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'component-two',
  template: `

    <div class="red"></div>
    
    <br>
    
    <div class="green"></div>
    
    <br>
    
    <div class="blue"></div>
    
    `,
  styles:[`
      .blue{
        background-color: blue;
        width: 20px;
        height: 20px;
      }
  `],
  encapsulation:ViewEncapsulation.Native
})
export class ComponentTwo implements OnInit {
  constructor() { }

  ngOnInit() { }

}
