 import { bootstrap } from "@angular/platform-browser-dynamic";
 import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
	selector : 'products-list',
	inputs : ['productsList'],
	outputs : ['onProductSelected'],
	template : `<div *ngFor="let myProduct of productsList">
	                {{myProduct.name}}
	            </div>`
})

class ProductsList {
	productsList: Product[];
	onProductSelected : EventEmitter<Product>;
	currentProduct : Product;

	constructor(){
		this.onProductSelected = new EventEmitter();
	}
	productSelected(product: Product) : void {
		onProductSelected.emit(product);
	}

}


@Component({
	selector : 'inventory-app',
	directives: [ProductsList],
	template : `<div class='inventory-appp'>
					<products-list [productsList]="products" (onProductSelected)="productSelected($event)">
					</products-list>
	            </div>`
})

class InventoryApp {
   products: Product[];
   constructor(){
    this.products = [
       new Product(
         'MYSHOES', 'Black Running Shoes',
         '/resources/images/products/black-shoes.jpg',
         ['Men', 'Shoes', 'Running Shoes'],
         109.99),
       new Product(
         'NEATOJACKET', 'Blue Jacket',
         '/resources/images/products/blue-jacket.jpg',
         ['Women', 'Apparel', 'Jackets & Vests'],
         238.99),
       new Product(
         'NICEHAT', 'A Nice Black Hat',
         '/resources/images/products/black-hat.jpg',
         ['Men', 'Accessories', 'Hats'],
         29.99)
       ];
   }

   productSelected(product: Product): void {
      console.log('Product was selected ', product);
   }	
}

class Product {
	constructor(
		public sku: string,
		public name: string,
		public imgaeUrl: string,
		public department : string[],
		public price: number
	){}
}

bootstrap(InventoryApp);

