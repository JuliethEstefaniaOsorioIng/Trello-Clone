import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  products : Products[]=[];
  columns: string[] =['Nro','Name','Price','Cover'];

  constructor(private http: HttpClient){
  }

  ngOnInit() {   

    this.http.get<Products[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data=>{
      this.products=data;
    });
  }

}
