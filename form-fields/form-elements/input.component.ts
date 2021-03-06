import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Fields } from './../models/fields';
import { FormFieldsConfig } from './../models/form-fields-config';

@Component({
  // selector: 'form-input',
  template: `
    <div [formGroup]="group">
        <label>{{ config.label }}</label>
        <input type="{{config.type}}" 
        [attr.placeholder]="config.placeholder"
        [attr.min]="config.min !== undefined ? config.min : null"
        [attr.max]="config.max !== undefined ? config.max : null"
        [attr.step]="config.step !== undefined ? config.step : null"
        [formControlName]="config.name" >
    </div>
  `
})
export class FormInput implements Fields {
  config: FormFieldsConfig;
  group: FormGroup;

}