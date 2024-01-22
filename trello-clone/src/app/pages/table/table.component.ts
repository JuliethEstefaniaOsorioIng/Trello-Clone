import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product.model';
import { DataSourceProduct } from './data-source';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  dataSource = new DataSourceProduct();
  columns: string[] = ['Nro', 'Name', 'Price', 'Cover', 'Actions'];
  total = 0;
  input=new FormControl('', {nonNullable: true});

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Products[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.dataSource.init(data);
        this.total = this.dataSource.getTotal();
      });

      this.input.valueChanges
      .pipe(debounceTime(300)).subscribe(value=> this.dataSource.find(value));
  }

  update(product: Products) {
    this.dataSource.update(product.id, { price: 100 });
  }
}
