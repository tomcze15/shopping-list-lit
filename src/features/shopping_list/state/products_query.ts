import { QueryEntity } from '@datorama/akita';
import { IProductState } from '@features/shopping_list/state/products_state_types';
import { ProductsStore } from '@features/shopping_list/state/products_store';
import { Product } from '@models/product/product';

export class ProductsQuery extends QueryEntity<IProductState> {
  constructor(store: ProductsStore) {
    super(store);
  }

  public getCheckedProducts(): Product[] {
    return this.getAll({
      filterBy: (entity) => entity.isChecked,
    });
  }
}
