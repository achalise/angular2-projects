 import { bootstrap } from "@angular/platform-browser-dynamic";
 import { Component } from "@angular/core";


 import { DemoFormSku } from './ts/forms/demo-form-sku.js';
 import { DemoFormSkuBuilder } from './ts/forms/demo-form-sku-builder.js';
 import { DemoFormWithValidations } from './ts/forms/demo-form-with-validations.js';

@Component({
  selector: 'forms-demo-app',
  directives: [DemoFormSku, DemoFormSkuBuilder, DemoFormWithValidations],
  template: `
<div>
  <demo-form-sku></demo-form-sku>
  <demo-form-sku-builder></demo-form-sku-builder>
  <demo-form-with-validations></demo-form-with-validations>
</div>
  `
})
class FormsDemoApp {
}

bootstrap(FormsDemoApp);
