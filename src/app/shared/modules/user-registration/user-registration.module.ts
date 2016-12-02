import { NgModule } from '@angular/core';

import { UserRegistrationComponent } from "./user-registration.component";
import { UserRegistrationFormModule } from "./user-registration-form/user-registration-form.module";

@NgModule({
  declarations: [
    UserRegistrationComponent
  ],
  imports: [
    UserRegistrationFormModule
  ],
  exports: [
    UserRegistrationComponent
  ],
  providers: [
  ],
})
export class UserRegistrationModule { }
