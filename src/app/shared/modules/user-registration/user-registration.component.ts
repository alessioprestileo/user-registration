import { Component, OnInit } from '@angular/core';

import { User } from "../../models/User";
import { UsersRegisterService } from "../../services/users-register.service";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  private title: string = 'Sign up for our services!';

  constructor(
    private registrationService: UsersRegisterService
  ) { }

  ngOnInit() {
  }
  /* Private methods */
  private registerNewUser(user) : void {
    this.registrationService.registerNew(user)
      .then(() => {
        // Log registered users to console
        this.registrationService.getAll().then((users: User[]) => {
          console.log('Registered users: ', users);
        });
      })
      .catch((error) => {
        alert('Error: ' + error.message);
        console.log('Error: ', error.message, '\n', error.stack);
        // Log registered users to console
        this.registrationService.getAll().then((users: User[]) => {
          console.log('Registered users: ', users);
        });
      });
  }
  /* Public methods */
  public onFormSubmitted(user: User) : void {
    this.registerNewUser(user);
  }

}
