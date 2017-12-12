import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Fields } from './../models/fields';
import { FormFieldsConfig } from './../models/form-fields-config';

@Component({
  template: `
    <div [formGroup]="group">
      <label>{{ config.label }}</label>
      <input type="checkbox" [formControlName]="config.name">{{config.placeholder}}
    </div>
  `
})
export class FormCheckbox {
  config: FormFieldsConfig;
  group: FormGroup;
}
