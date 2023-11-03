import { Component, OnInit } from '@angular/core';
import { Product } from '../product-create/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: Product[]
  displayedColumns =['id', 'name', 'codigo', 'price', 'action']
  constructor(private productServise: ProductService){
    
  }
  ngOnInit(): void {
    this.productServise.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
}
