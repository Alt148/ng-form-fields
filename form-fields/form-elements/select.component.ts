import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Fields } from './../models/fields';
import { FormFieldsConfig } from './../models/form-fields-config';

@Component({
  template: `
    <div [formGroup]="group">
      <label>{{ config.label }}</label>
      <select [formControlName]="config.name">
      <ng-container *ngIf="config.options">
        <option value="">{{ config.placeholder }}</option>
        <option *ngFor="let option of config.options">
          {{ option }}
        </option>
      </ng-container>
      <ng-container *ngIf="config.optionsObjects">
        <option value="">{{ config.placeholder }}</option>
        <option value="{{option.id}}" *ngFor="let option of config.optionsObjects" >
          {{ option.text }}
        </option>
      </ng-container>
    </select>
    </div>
  `
})
export class FormSelect implements Fields {
  config: FormFieldsConfig;
  group: FormGroup;

}
