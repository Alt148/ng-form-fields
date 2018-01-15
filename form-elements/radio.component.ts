import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Fields } from './../models/fields';
import { FormFieldsConfig } from './../models/form-fields-config';

@Component({
	template: `
	<ng-container [formGroup]="group">
		<ng-container *ngFor="let value of config.radioValues;">
			<input type="radio" 
			[attr.disabled]="config.disabled !== undefined ? config.disabled : false"
			[formControlName]="config.name" value="{{value.id}}">{{value.text}}
		</ng-container>
	</ng-container>
  `
})
export class FormRadio {
	config: FormFieldsConfig;
	group: FormGroup;
}
