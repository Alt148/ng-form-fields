import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Fields } from './../models/fields';
import { FormFieldsConfig } from './../models/form-fields-config';

@Component({
  template: `
    <div [formGroup]="group">
      <label>{{ config.label }}</label>
      <input type="{{config.type}}" 
      [attr.placeholder]="config.placeholder"
      [attr.disabled]="config.disabled !== undefined ? config.disabled : false">
    </div>
  `
})
export class FormButton {
  config: FormFieldsConfig;
  group: FormGroup;
}
