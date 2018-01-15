import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Fields } from './../models/fields';
import { FormFieldsConfig } from './../models/form-fields-config';

@Component({
  template: `
    <ng-container [formGroup]="group">
      <input type="checkbox"
        [attr.disabled]="config.disabled !== undefined ? config.disabled : false"
        [formControlName]="config.name">{{config.placeholder}}
    </ng-container>
  `
})
export class FormCheckbox {
  config: FormFieldsConfig;
  group: FormGroup;
}
