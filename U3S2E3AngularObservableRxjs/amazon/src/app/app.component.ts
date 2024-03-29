import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.interface';
import { ProductsService } from './services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'amazon';
  products: Product[] = [];
  sub!: Subscription;

  constructor(private productsSrv: ProductsService) {}

  ngOnInit(): void {
    this.readProducts();
}

readProducts() {
  this.sub = this.productsSrv.getAllProducts().subscribe(
    (data: any) => {
      // Destrutturazione dell'array "products" dall'oggetto
      const { products } = data;
      this.products = products;
      console.log(this.products);
    },
    (err) => {
      alert(err);
    }
  );
}

// add() {
//   this.productsSrv.addFavorites();
// }
}
