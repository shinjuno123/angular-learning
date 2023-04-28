import { Component } from '@angular/core';

@Component({
  selector: 'username-component',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {

  usernameStatus = 'No user was created!'
  username = '';

  onCreateUser() {
    this.usernameStatus = 'User was created! username is ' + this.username;
    this.username = '';
  }
}
