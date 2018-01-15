import { Component, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Fields } from './../models/fields';
import { FormFieldsConfig } from './../models/form-fields-config';
import { SearchSelect } from './search-select.component';

@Component({
  template: `
    <ng-container [formGroup]="group">
      <select class="config.inputClass" 
      [hidden]="config.options.length > config.maxOptionsLength"
      [attr.disabled]="config.disabled !== undefined ? config.disabled : false"
      [formControlName]="config.name">
        <ng-container *ngIf="config.options">
          <option value="">{{ config.placeholder }}</option>
          <option value="{{optionId(option)}}" *ngFor="let option of config.options" >
            {{optionText(option)}}
          </option>
        </ng-container>
      </select>
      <ng-container *ngIf="config.options.length > config.maxOptionsLength">
        <input type="hidden" [formControlName]="config.name"> <!--  [attr.value]="inputValue()" -->
        <p class="input-appearance">
          <span *ngIf="config.disabled === true else enabled">Test</span>
          <ng-template #enabled>
            <span [innerHTML]="currentObject" (click)="openOverlay(config.options, config.name)"></span>
            <span (click)="clearValue(config.name)">X</span>
          </ng-template>
        </p>
      </ng-container>
    </ng-container>
  `,
  styles: [`

  .input-appearance .span {
    display: inline-block;
  }
   
  [aria-hidden="true"] { display: none; }
  [aria-hidden="false"] { display: block; }
    
  `]
})
export class FormSelect implements Fields {

  config: FormFieldsConfig;
  group: FormGroup;
  overlayOpen: boolean = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  get objectArray() {
    let objectArray: Array< {id: string, text: string} > = [];
    this.config.options.forEach(item => {
      if(typeof item === 'object') {
        if(item.hasOwnProperty('id') && item.hasOwnProperty('text')) {
          objectArray.push(item);
        }
      } else if(typeof item === 'string') {
        objectArray.push({id: item, text: item});
      } else {
        throw 'Options are not according to format. options: Array< string | {id: string, text: string} >)';
      }
    });
    return objectArray;
  }

  get currentObject() {
    let currentObj: Array<{id: string, text: string}> = this.objectArray.filter(obj => obj.id === this.group.value[this.config.name]);
    if(currentObj[0] == null) {
      return this.config.placeholder;
    } else {
      return currentObj[0].text;
    }
  }

  optionId(option: string| {id: string, text: string}): string {
    if(typeof option === 'object') {
      return option.id;
    }
    return option;
  }

  optionText(option: string | {id: string, text: string}): string {
    if(typeof option === 'object') {
      return option.text;
    }
    return option;
  }

  getInputValue(): string {
    const currentValue = this.group.controls[this.config.name].value;
    if(typeof this.config.options === 'object') {
      const options: any = this.config.options;
      if(options[0].id === undefined) {
        return this.group.controls[this.config.name].value;
      }
      return options.filter(option => option.id === currentValue).map(option => { return option.text });
    }
    return this.group.controls[this.config.name].value;
  }

  clearValue(name) {
    this.group.value[name] = '';
  }
  
  openOverlay(options: Array<any>, name): void {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(SearchSelect);
    let componentRef = this.container.createComponent(componentFactory);
    componentRef.instance.options = this.objectArray;
    componentRef.instance.componentRef = componentRef;
    componentRef.instance.setId.subscribe(id => { 
      this.group.value[name] = id;
    });

  }

}
