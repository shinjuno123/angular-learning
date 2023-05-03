import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("formData") formData: NgForm;
  defaultSubscription = 'advanced';
  submitData = {email: '', subscriptions: '', passsword:''}
  submitted = false;
  subscriptions = ['basic', 'advanced', 'pro']

  onSubmit(){
    this.submitted = true;
    this.submitData = this.formData.value;
    this.formData.reset();
    this.formData.form.patchValue({
      subscriptions: 'advanced'
    })
  }
}
