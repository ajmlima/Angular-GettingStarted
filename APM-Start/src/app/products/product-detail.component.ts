import { Component, OnInit } from '@angular/core';
import { IProduct } from "./product";
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string;
    product: IProduct;
    errorMessage: string;
    
    constructor(private _route: ActivatedRoute, private _productService: ProductService) {
        this.pageTitle = "Product Detail"
    }

    ngOnInit() {
      let id = +this._route.snapshot.paramMap.get('id');
      this.pageTitle += `: ${id}`;
      this._productService.getProductById(id)
        .subscribe(product => {
          this.product = product;
        },
        error => this.errorMessage = <any>error);
    }

}
