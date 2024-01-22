import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { Products } from 'src/app/models/product.model';

export class DataSourceProduct extends DataSource<Products> {
  data = new BehaviorSubject<Products[]>([]);
  originalData: Products[] = [];

  connect(): Observable<Products[]> {
    return this.data;
  }

  init(products: Products[]) {
    this.originalData = products;
    this.data.next(products);
  }

  getTotal() {
    const products = this.data.getValue();

    return products
      .map((item) => item.price)
      .reduce((price, total) => price + total, 0);
  }

  update(id: Products['id'], changes: Partial<Products>) {
    const products = this.data.getValue();
    const productIndex = products.findIndex((item) => item.id === id);
    if (productIndex !== -1) {
      products[productIndex] = {
        ...products[productIndex],
        ...changes,
      };
      this.data.next(products);
    }
  }

  find(query: string) {
    const newProduct = this.originalData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.price == Number(query) ||
        item.id === query
    );
    this.data.next(newProduct);
  }

  disconnect() {}
}
