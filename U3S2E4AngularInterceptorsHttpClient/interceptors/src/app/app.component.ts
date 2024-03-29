import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product } from './models/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'interceptors';

  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(this.products);
      },
      (err) => {
        alert(err);
      }
    );
  }
}
