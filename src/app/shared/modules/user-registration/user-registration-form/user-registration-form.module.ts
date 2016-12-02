import { NgModule } from '@angular/core';

import { InputBoxModule } from "../../form-fundamentals/input-box/input-box.module";
import { SharedModule } from "../../../shared.module";
import { UserRegistrationFormComponent } from './user-registration-form.component';

@NgModule({
  declarations: [
    UserRegistrationFormComponent
  ],
  imports: [
    InputBoxModule,
    SharedModule
  ],
  exports: [
    UserRegistrationFormComponent
  ],
  providers: [
  ],
})
export class UserRegistrationFormModule { }
