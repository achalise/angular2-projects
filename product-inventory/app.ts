 import { bootstrap } from "@angular/platform-browser-dynamic";
 import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
	selector : 'price-display',
	inputs : ['price'],
	template : `<div class='price-display'>\$ {{price}} </div>`
})

class PriceDisplay {
	price : Number;
}

@Component({
	selector : 'product-department',
	inputs : ['product'],
	template : `<div class='product-department'> 
	               <span *ngFor='let name of product.department; let i=index'>
	               <a href='#'>{{name}}</a> <span *ngIf='i < product.department.length - 1'> > </span> 
	               </span>
	            </div>`
})

class ProductDepartment {
	product : Product;
}

@Component({
	selector : 'product-image',
	inputs : ['product'],
	host: {class: 'ui small image'},
	template : `<img class="product-image"
				[src] = "product.imgageUrl">`
})

class ProductImage {
	product : Product;
}

@Component({
	selector : 'product-row',
	inputs : ['product'],
	host: {'class': 'item'},
	directives : [ProductImage, ProductDepartment, PriceDisplay],
	template : `
				<product-image [product]="product"></product-image>
				<div class='content'>
					<div class='header'>
						{{product.name}}
					</div>
					<div class='meta'>
						<div class='product-sku'>SKU # {{product.sku}}</div> 
					</div>
					<div class='description'>
						<product-department [product]="product"></product-department>
					</div>
	            </div>
	            <price-display [price]="product.price"></price-display>
	            `
})

class ProductRow {
	product: Product;
}


@Component({
	selector : 'products-list',
	directives : [ProductRow],
	inputs : ['productsList'],
	outputs : ['onProductSelected'],
	template : `<div class="ui items">
	                <product-row 
	                 *ngFor="let myProduct of productsList" 
	                 [product]="myProduct"
	                 (click)="productSelected(myProduct)">
	                </product-row>
	            </div>
               `
})

class ProductsList {
	productsList: Product[];
	onProductSelected : EventEmitter<Product>;
	currentProduct : Product;

	constructor(){
		this.onProductSelected = new EventEmitter();
	}
	productSelected(product: Product) : void {
		this.onProductSelected.emit(product);
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
		public imgageUrl: string,
		public department : string[],
		public price: number
	){}
}

bootstrap(InventoryApp);

