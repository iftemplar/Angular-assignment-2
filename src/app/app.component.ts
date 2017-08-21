import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  
  onTypeInInput(event: any){
    console.log(event);
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
