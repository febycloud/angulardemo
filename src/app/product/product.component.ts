import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from '../allproducts'
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
    products=PRODUCTS;
  
  constructor() { }

  ngOnInit() {
  }

}


