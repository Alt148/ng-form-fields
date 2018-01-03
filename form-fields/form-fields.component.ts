import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule  } from '@angular/forms';

import { FormFieldsConfig } from './models/form-fields-config';

@Component({
  exportAs: 'ffInputs',
  selector: 'ff-inputs',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.css']
})
export class FormFieldsComponent implements OnInit {
  @Input() config: FormFieldsConfig[] = [];
  @Input() group: FormGroup;
  
  ngOnInit() {

  }

}
