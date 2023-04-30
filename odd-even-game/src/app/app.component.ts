import { Component } from '@angular/core';
import { Status } from './status.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isEven: boolean = false;
  status: Status | undefined;


  OnGameEventHappened(status: Status){
    this.status = status;
    
    if(status.count % 2 === 0){
      this.isEven = true;
    } else {
      this.isEven = false;
    }
  }


}
