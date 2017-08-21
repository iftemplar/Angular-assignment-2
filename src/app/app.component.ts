import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  allowUserRemoval = true;

  onTypeInInput(event: any){
    this.userName = (<HTMLInputElement>event.target).value;
    (this.userName.length > 0) ? this.allowUserRemoval = false : this.allowUserRemoval = true;
  }

  emptyUser(){
    this.userName = '';
  }
}
