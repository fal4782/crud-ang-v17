import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-iterative-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    InputTextareaModule,
    CheckboxModule,
    CalendarModule,
  ],
  templateUrl: './reactive-iterative-form.component.html',
  styleUrl: './reactive-iterative-form.component.scss',
})
export class ReactiveIterativeFormComponent implements OnInit {
  prerequisite() {
    this.initializeForm();
  }

  form!: FormGroup;
  formConfig = require('./form-config.json');

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.prerequisite();
  }

  initializeForm() {
    this.form = this.fb.group({
      formRows: this.fb.array([this.createFormGroup()]),
    });
  }

  get formRows(): FormArray {
    return this.form.get('formRows') as FormArray;
  }

  createFormGroup(): FormGroup {
    const formGroup = this.fb.group({});
    this.formConfig.forEach((control: any) => {
      const validators = this.getValidators(control.validators);
      const initialValue = control.type === 'checkbox' ? false : '';
      formGroup.addControl(
        control.id,
        this.fb.control(initialValue, validators)
      );
    });
    return formGroup;
  }

  getValidators(validators: any) {
    const formValidators = [];
    if (validators) {
      if (validators.required) {
        formValidators.push(Validators.required);
      }
      if (validators.maxLength) {
        formValidators.push(Validators.maxLength(validators.maxLength));
      }
      if (validators.minLength) {
        formValidators.push(Validators.minLength(validators.minLength));
      }
      if (validators.max) {
        formValidators.push(Validators.max(validators.max));
      }
    }
    return formValidators;
  }

  addFormGroup() {
    this.formRows.push(this.createFormGroup());
  }

  removeFormGroup(index: number) {
    if (this.formRows.length > 0) {
      this.formRows.removeAt(index);
    }
  }

  resetForm() {
    if (this.formRows.length > 1) {
      while (this.formRows.length !== 1) {
        this.formRows.removeAt(1); // Remove all rows except the first one
      }
    }
    this.form.reset(); // Reset the form values
  }

  saveForm() {
    console.log(this.form.value);
  }
}
