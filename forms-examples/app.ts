 import { bootstrap } from "@angular/platform-browser-dynamic";
 import { Component } from "@angular/core";


 import { DemoFormSku } from './ts/forms/demo-form-sku.js';
 import { DemoFormSkuBuilder } from './ts/forms/demo-form-sku-builder.js';

@Component({
  selector: 'forms-demo-app',
  directives: [DemoFormSku, DemoFormSkuBuilder],
  template: `
<div>
  <demo-form-sku></demo-form-sku>
  <demo-form-sku-builder></demo-form-sku-builder>
</div>
  `
})
class FormsDemoApp {
}

bootstrap(FormsDemoApp);
