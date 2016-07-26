import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup } from '@angular/common';

@Component({
	selector : 'demo-form-sku-builder',
	directives : [FORM_DIRECTIVES],
	template : `
		<div class='ui raised segment'>
			<h2 class='ui header'>Demo form with form builder</h2>
			<form class='ui form' [ngFormModel]='myForm' (ngSubmit)='onSubmit(myForm.value)'>
				<div class='field'>
				   <label for='skuInput'>SKU</label>
				   <input type='text' id='skuInput' [ngFormControl]="myForm.controls['sku']">
				</div>
                <button type="submit" class="ui button">Submit</button>				
			</form>
		</div>`
})
export class DemoFormSkuBuilder {
	myForm : ControlGroup;

	constructor(fb: FormBuilder) {
		this.myForm = fb.group({
			'sku' : ['ABC123']
		});
	}

	onSubmit(form: any): void {
	   console.log('you submitted value:', form);
	}

}