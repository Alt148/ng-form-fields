import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Fields } from './../models/fields';
import { FormFieldsConfig } from './../models/form-fields-config';

@Component({
	template: `
    <div [formGroup]="group">
			<label>{{ config.label }}</label>
			<ng-container *ngFor="let value of config.radioValues;">
				<input type="radio" [formControlName]="config.name" value="{{value.id}}">{{value.text}}
			</ng-container>
    </div>
  `
})
export class FormRadio {
	config: FormFieldsConfig;
	group: FormGroup;
}
