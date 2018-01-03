import { forEach } from '@angular/router/src/utils/collection';
import { Component, Input, Output, HostListener, ElementRef, OnInit, OnDestroy, ComponentRef, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Fields } from './../models/fields';
import { FormFieldsConfig } from './../models/form-fields-config';

@Component({
  selector: 'search-select',
  template: `
    <section class="search-select" (click)="overlayClose($event);">
    <div (click)="$event.stopPropagation()">
      <input type="text" #search (input)="filterOption(search.value)" [attr.placeholder]="placeholder" autofocus>
      <ul class="list-group" *ngFor="let option of filteredOptions">
        <li class="list-group-item" (click)="setItem(option.id)" (mouseenter)="setPlaceholder(option.text)" (mouseleave)="clearPlaceholder()" [innerHTML]="option.text" ></li>
      </ul>
    </div>
    </section>
  `,
  styles: [`
  .search-select {
    position: fixed;
    z-index: 99;
    overflow-y: scroll;
    top: 0; right: 0; bottom: 0; left: 0;
    background:  rgba(40,40,40, .75);
  }

  .search-select > div {
    margin: 2em auto;
    max-width: 500px;
    width: 90vw;
    background-color: rgba(255, 255, 255, 1);
  }

  input {
    width: 100%;
    height: 4em;
    padding: 1em;
  }

  .search-select ul > li {
    cursor: pointer;
  }

  .search-select ul > li:hover {
    background-color: #2f96d3;
    color: #ffffff;
  }

  /* to the body element */
  .noscroll { overflow: hidden; }
  `]
})

export class SearchSelect implements OnInit{
  @Input('options') options;
  @Input('componentRef') componentRef: ComponentRef<any>;

  @Output() setId: EventEmitter<number> = new EventEmitter<number>();

  filteredOptions: Array<{id: string|number, text: string}>;
  placeholder: string;

  constructor() {}

  filterOption(searchStr: string): void {
    let options = [];
    this.options.forEach(obj => {
      options.push(Object.assign({}, obj))
    });   
    if(searchStr.length < 2) { this.filteredOptions = options; return };
    let result: Array<{id: string|number, text: string}> = [];
    result = options.filter(item => item.text.toLowerCase().indexOf(searchStr.toLowerCase()) > -1 );
    result.forEach(item => {
      const replaceString = '<strong>'+searchStr+'</strong>';
      let res = item.text.replace(new RegExp(searchStr,"gi"), replaceString);
      item.text = res;
    })
    this.filteredOptions = result;
  }

  setPlaceholder(placeholder): void {
    this.placeholder = placeholder;
  }

  clearPlaceholder() {
    this.placeholder = "";
  }

  setItem(id): void {
    this.setId.emit(id);
    this.componentRef.destroy();
  }

  overlayClose(event): void {
    this.componentRef.destroy();
  }

  ngOnInit() {
    document.body.classList.toggle('noscroll', true);
    this.filteredOptions = this.options.slice(0);
  }

  ngOnDestroy() {
    document.body.classList.toggle('noscroll', false);
  }
}