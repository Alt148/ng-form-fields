import { element } from 'protractor';
import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { Fields } from './models/fields';
import { FormFieldsConfig } from './models/form-fields-config';

import { FormInput } from './form-elements/input.component';
import { FormSelect } from './form-elements/select.component';
import { FormButton } from './form-elements/button.component';
import { FormCheckbox } from './form-elements/checkbox.component';
import { FormRadio } from './form-elements/radio.component';

const components: {[type: string]: Type<Fields>} = {
  button: FormButton,
  input: FormInput,
  select: FormSelect,
  checkbox: FormCheckbox,
  radio: FormRadio
};

@Directive({
  selector: '[ffElement]'
})

export class FieldDirective {

  @Input() config: FormFieldsConfig;
  @Input() group: FormGroup;
  component: ComponentRef<Fields>;
  
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }
  
  ngOnInit() {
    if (!components[this.config.element]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.element}).
        Supported types: ${supportedTypes}`
      );
    }

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory<Fields>(components[this.config.element]);
    let componentRef = this.container.createComponent(componentFactory);
    componentRef.instance.config = this.config;
    componentRef.instance.group = this.group;
  }

}
