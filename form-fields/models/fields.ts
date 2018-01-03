import { FormGroup } from '@angular/forms';
import { FormFieldsConfig } from './form-fields-config';

export interface Fields {
    config: FormFieldsConfig,
    group: FormGroup
}
