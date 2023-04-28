import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {
  hideDetails : boolean = true;
  buttonClickLogs = []


  onToggle(){
    this.hideDetails = !this.hideDetails;
    const now: Date = new Date();
    this.buttonClickLogs.push(now.toTimeString() + " Display details : " + !this.hideDetails);
  }
}
