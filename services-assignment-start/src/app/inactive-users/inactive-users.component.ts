import { Component} from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  
  constructor(public userService : UserService, public counterService: 
    CounterService){
    
  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}
