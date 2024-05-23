import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { SliderModule } from 'primeng/slider';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    CheckboxModule,
    SliderModule,
    ToggleButtonModule,
    ButtonModule,
  ],
  standalone: true,
})
export class DynamicFormComponent implements OnInit {
  form!: FormGroup;
  formJson: any = require('../dynamic-form/form.json');

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    const controlsConfig: Record<string, any> = {};

    // Iterate through the controls in the JSON
    this.formJson.controls.forEach((control: any) => {
      const validators = [];

      if (control.validators) {
        if (control.validators.required) {
          validators.push(Validators.required);
        }
        if (control.validators.minLength) {
          validators.push(Validators.minLength(control.validators.minLength));
        }
        if (control.validators.maxLength) {
          validators.push(Validators.maxLength(control.validators.maxLength));
        }
        if (control.validators.email) {
          validators.push(Validators.email);
        }
        if (control.validators.pattern) {
          validators.push(Validators.pattern(control.validators.pattern));
        }
        if (control.validators.customValidator) {
          validators.push(control.validators.customValidator);
        }
      }
      //Set intiial value if any
      let controlValue = control.value !== undefined ? control.value : null;
      
      //Handle initial value for checkbox and toggle
      if (
        (control.type === 'checkbox' || control.type === 'toggle') &&
        (controlValue === null || controlValue === 'false')
      ) {
        controlValue = false;
      } else if (
        (control.type === 'checkbox' || control.type === 'toggle') &&
        controlValue === 'true'
      ) {
        controlValue = true;
      }
      controlsConfig[control.name] = [controlValue, validators];
    });

    this.form = this.fb.group(controlsConfig);
  }



  onSubmit() {
    if (this.form.valid) {
      console.log('Form data:', this.form.value);
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }

}
