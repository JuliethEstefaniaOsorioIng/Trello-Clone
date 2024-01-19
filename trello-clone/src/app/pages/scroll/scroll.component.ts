import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from 'src/app/models/product.model';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html'
})
export class ScrollComponent implements OnInit {

  products : Products[]=[];

  constructor(private http: HttpClient){
  }

  ngOnInit() {   

    this.http.get<Products[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data=>{
      this.products=data;
    });
  }

}
