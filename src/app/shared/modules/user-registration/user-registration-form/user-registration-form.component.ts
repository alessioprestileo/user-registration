import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, Validators, ValidatorFn} from "@angular/forms";

import { formGroupValidator } from '../../../validators/formGroup.validator'
import {User} from "../../../models/User";

@Component({
  selector: 'app-user-registration-form',
  templateUrl: 'user-registration-form.component.html',
  styleUrls: ['user-registration-form.component.css']
})
export class UserRegistrationFormComponent implements OnInit {
  @Output() private emSubmitted = new EventEmitter();
  private formGroup: FormGroup;
  private formGroupValidatorFn: ValidatorFn = formGroupValidator;
  private formControlsKeys: string[];
  private formControlsLabelsMap: {[key: string]: string};

  constructor() {
  }

  ngOnInit() {
    this.setFormControlsKeys();
    this.setFormControlsLabelsMap();
    this.createFormGroup();
    this.addFormControls();
  }
  /* Private methods */
  private addFormControls() : void {
    for (let key of this.formControlsKeys) {
      this.formGroup.addControl(key, new FormControl(
        '', Validators.required
      ));
    }
  }
  private createFormGroup() : void {
    this.formGroup = new FormGroup({}, this.formGroupValidatorFn);
  }
  private setFormControlsKeys() : void {
    this.formControlsKeys = ['emailAddress', 'name', 'password'];
  }
  private setFormControlsLabelsMap() {
    this.formControlsLabelsMap = {
      'emailAddress': 'E-mail Address:',
      'name': 'Name:',
      'password': 'Password:'
    }
  }
  /* Public methods */
  public onSubmitted() : void {
    let user: User = {
      id: null,
      emailAddress: this.formGroup.controls['emailAddress'].value,
      name: this.formGroup.controls['name'].value,
      password: this.formGroup.controls['password'].value,
    };
    this.emSubmitted.emit(user);
  }
}
