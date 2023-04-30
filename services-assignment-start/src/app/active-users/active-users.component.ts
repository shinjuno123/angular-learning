import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  constructor(public userService : UserService, public counterService: 
    CounterService){
    
  }

  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
  }
}
