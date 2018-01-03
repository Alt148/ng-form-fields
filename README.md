# ng-form-fields
Angular 4 dynamic form field builder

Based on https://github.com/toddmotto/angular-dynamic-forms by Todd Motto.

Setup your form in your component and keep control of your input fields with this library.

## Usage

Place you config in your component

Example of the config array :  
`config: FormFieldsConfig[] = [
    {
      element: 'input',
      type: 'text',
      label: 'First name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
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
    },
    {
      element: 'input',
      type: 'date',
      label: 'First date',
      name: 'date',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      element: 'input',
      type: 'range',
      label: 'Range date',
      name: 'range',
      min: '10',
      max: '50',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      element: 'checkbox',
      label: 'Check name',
      name: 'check',
      placeholder: 'Enter your name',
    },
    {
      element: 'radio',
      radioValues: [{id: "radio1", text: "Radio 1"}, {id: "radio2", text: "Radio 2"}],
      name: 'radio',
      placeholder: 'Enter your name',
    },
    {
      element: 'select',
      label: 'Favourite Food',
      name: 'select',
      // options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      optionsObjects: [{id: 1, text: 'Pizza'}, {id: 2, text: 'Hotdogs'}, {id: 3, text: 'French fries'}],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
  ];
  `
  Use the `name` property to refer to your formbuilder control.
