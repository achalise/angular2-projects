import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl } from '@angular/common';

@Component({
	selector : 'demo-form-with-validations',
	directives : [FORM_DIRECTIVES],
	template : `		
	    <div class='ui raised segment'>
			<h2 class='ui header'>Demo form with validations</h2>
			<div class='ui message'>Product name to go here {{productName}}</div>							
			<form class='ui form' [ngFormModel]='myForm' (ngSubmit)='onSubmit(myForm.value)'>
				<div class='field' [class.error]="!sku.valid && sku.touched">
				   <label for='skuInput'>SKU</label>
				   <input type='text' id='skuInput' [ngFormControl]="myForm.controls['sku']">
				</div>
				<div *ngIf='!sku.valid' class='ui error message'>SKU is invalid</div>
				<div class='field' [class.error]="!productName.valid && productName.touched">
				   <label for='productName'>Product</label>
				   <input type='text' id='productName' [ngFormControl]="myForm.controls['productName']" [(ngModel)]="productName">
				</div>				
			    <div *ngIf='!myForm.valid' class='ui error message'>Form is invalid</div>				
                <button type="submit" class="ui button">Submit</button>				
			</form>
		</div>`
})
export class DemoFormWithValidations {
	myForm : ControlGroup;
	sku : AbstractControl;
	productName : AbstractControl;
	

	constructor(fb: FormBuilder) {
		this.myForm = fb.group({
			'sku' : ['', Validators.required],
			'productName' : ['', Validators.required]
		});
		this.sku = this.myForm.controls['sku'];
		this.productName = this.myForm.controls['productName'];
	}

	onSubmit(value: String): void {
	   console.log('you submitted value: ', value);
	   console.log(this.sku.valueChanges);
	}	
}