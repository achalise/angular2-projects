import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl } from '@angular/common';

@Component({
	selector : 'demo-form-with-validations',
	directives : [FORM_DIRECTIVES],
	template : `		
	    <div class='ui raised segment'>
			<h2 class='ui header'>Demo form with validations</h2>
			<form class='ui form' [ngFormModel]='myForm' (ngSubmit)='onSubmit(myForm.value)'>
				<div class='field' [class.error]="!sku.valid && sku.touched">
				   <label for='skuInput'>SKU</label>
				   <input type='text' id='skuInput' [ngFormControl]="myForm.controls['sku']">
				</div>
				<div *ngIf='!sku.valid' class='ui error message'>SKU is invalid</div>
			    <div *ngIf='!myForm.valid' class='ui error message'>Form is invalid</div>				
                <button type="submit" class="ui button">Submit</button>				
			</form>
		</div>`
})
export class DemoFormWithValidations {
	myForm : ControlGroup;
	sku : AbstractControl;

	constructor(fb: FormBuilder) {
		this.myForm = fb.group({
			'sku' : ['', Validators.required]
		});
		this.sku = this.myForm.controls['sku'];
	}

	onSubmit(value: String): void {
	   console.log('you submitted value: ', value);
	}	
}