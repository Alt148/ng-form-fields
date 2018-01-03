import { ValidatorFn } from '@angular/forms';

export interface FormFieldsConfig {
    class?: string,
    disabled?: boolean,
    element: string,
    label?: string,
    max?: string,
    min?: string,
    name: string,
    options?: Array< string | { id: any, text: any } >,
    maxOptionsLength?: number,
    placeholder?: string,
    radioValues?: [{id: string, text: string}],
    searchFilter?: boolean,
    step?: string,
    type?: string,
    validation?: ValidatorFn[],
    value?: any
}
