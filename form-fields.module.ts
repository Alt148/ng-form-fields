import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { FormFieldsComponent } from './form-fields.component';
import { FieldDirective } from './field.directive';
import { FormInput } from './form-elements/input.component';
import { FormButton } from './form-elements/button.component';
import { FormSelect } from './form-elements/select.component';
import { SearchSelect } from './form-elements/search-select.component';
import { FormCheckbox } from './form-elements/checkbox.component';
import { FormRadio } from './form-elements/radio.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  declarations: [ FormFieldsComponent, FieldDirective, FormInput, FormSelect, FormButton, FormCheckbox, FormRadio, SearchSelect ],
  entryComponents: [ FormInput, FormSelect, FormButton, FormCheckbox, FormRadio, SearchSelect ],
  exports: [ FormFieldsComponent ],
})
export class FormFieldsModule { }