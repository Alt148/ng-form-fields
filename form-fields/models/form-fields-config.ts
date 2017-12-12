import { ValidatorFn } from '@angular/forms';

export interface FormFieldsConfig {
    disabled?: boolean,
    element: string,
    label?: string,
    max?: string,
    min?: string,
    name: string,
    options?: string[],
    optionsObjects?: [{ id: any, text: any }],
    placeholder?: string,
    radioValues?: [{id: string, text: string}],
    step?: string,
    type?: string,
    validation?: ValidatorFn[],
    value?: any
}
