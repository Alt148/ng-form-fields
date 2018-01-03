# Angular 4 dynamic form field builder

Based on https://github.com/toddmotto/angular-dynamic-forms by Todd Motto.

Setup your form in your component and keep control of your input fields with this library.

## Getting Started

```
npm install ng4-form-fields
```

### Prerequisites

This package is for use with Angular Reactive forms only.

### Installing

After downloading add the components module to your app module.

```
import {FormFieldsModule} from 'ng4-form-fields/form-fields.module'

@NgModule({
  imports: [
    FormFieldsModule,
    ReactiveFormsModule // You must use Reactive Forms
  ]
})
```
Import the interface in your component.

```
import { FormFieldsConfig } from 'ng4-form-fields/models/form-fields-config';
```

In your component with the form add a property for all the elements in your form you wish to load dynamic with this library. Here is an example for a number input field.

```
config: FormFieldsConfig[] = [
    {
      element: 'input',
      type: 'number',
      label: 'First name',
      name: 'number',
      min: '10',
      max: '50',
      step: '5',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    }
]
```

Note: I hope to make a small list of various properties you can use, but they are in the FormsFieldsConfig interface.

In your template you can place this code to create all the configured form fields.

```
    <form [formGroup]="testForm">
    <!-- This is the directive for the module -->
      <ff-inputs 
        *ngFor="let field of config;"
        [config]="field"
        [group]="testForm"
        >
      </ff-inputs>
    <!-- The form you must build yourself. -->
    </form>
```

## Running the tests

No test written

<!-- ## Deployment

Add additional notes about how to deploy this on a live system -->

<!-- ## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us. -->

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Jörgen de Groot** - *Initial work* - [Shift"o](https://www.shifto.nl)

<!-- See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->

## License

This project is licensed under the ICS License.
This project is my first NPM module, no support guaranteed

## Acknowledgments

* Todd Moto, thanks for your help on dynamic components in Angular