 import { bootstrap } from "@angular/platform-browser-dynamic";
 import { Component } from "@angular/core";


 import { DemoFormSku } from './ts/forms/demo-form-sku.js';

@Component({
  selector: 'forms-demo-app',
  directives: [DemoFormSku],
  template: `
<div>
  <demo-form-sku></demo-form-sku>
</div>
  `
})
class FormsDemoApp {
}

bootstrap(FormsDemoApp);
