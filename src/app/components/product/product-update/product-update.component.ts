import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product-create/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService, private router: Router ,private route: ActivatedRoute) { }

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get("id")
    this.productService.readById(Number(id)).subscribe((product) => {
      this.product = product;
    });
  
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMensage('Produto atualizado com sucesso !')
      this.router.navigate(['/products/update']);
    })
  }

  cancel(): void{
    this.router.navigate(['/products']);


  }
}
