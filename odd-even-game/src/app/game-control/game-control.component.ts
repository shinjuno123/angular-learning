import { Component, EventEmitter, Output} from '@angular/core';
import { Status } from '../status.model';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent{
  @Output() gameEvent = new EventEmitter<Status>();
  status: Status = new Status("stop", 0);
  reference:any;

  onStart(){
    this.status.gameState = 'start';
    this.reference = setInterval(()=>{
      this.status.count++; 
      this.gameEvent.emit(this.status)
    },1000)

  }

  onStop(){
    clearInterval(this.reference);
  }
}
