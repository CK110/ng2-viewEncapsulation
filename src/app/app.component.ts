import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    app-component
    <div class="red"></div>    
    <br>   
    <div class="green"></div>   
    <br>    
    <div class="blue"></div>    
    <br>
    <br>
    component-one
    <component-one></component-one>    
    component-two
    <component-two></component-two>
  `,
  styles:[`
    .red{
      background-color: red;
      height: 20px;
      width: 20px;
    }

  `]
})
export class AppComponent {
  title = 'app works!';
}
