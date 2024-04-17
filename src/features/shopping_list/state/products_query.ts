import { IProductState } from '../../shopping_list/state/products_state_types';
import { ProductsStore } from '../../shopping_list/state/products_store';
import { Product } from '../../../models/product/product';

import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';

export class ProductsQuery extends QueryEntity<IProductState> {
  constructor(store: ProductsStore) {
    super(store);
  }

  public selectProducts$(): Observable<Product[]> {
    return this.selectAll();
  }

  public selectCheckedProducts$(): Observable<Product[]> {
    return this.selectAll({
      filterBy: (product) => product.isChecked,
    });
  }

  public getCheckedProducts(): Product[] {
    return this.getAll({
      filterBy: (entity) => entity.isChecked,
    });
  }
}