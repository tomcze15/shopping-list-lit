import { map, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Product } from '@models/product/product';
import { ProductId } from '@models/product/product_types';
import { ProductsRepository } from '@features/shopping_list/state/products_repository';

export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}

  public addProduct(product: Product) {
    if (product.name === '') return;

    if (!product.id) {
      product.id = uuidv4();
    }

    if (product) this.productsRepository.addProduct(product);
  }

  public removeProduct(productId: ProductId) {
    if (!productId) return;
    this.productsRepository.removeProductById(productId);
  }

  public uncheckProduct(productId: ProductId) {
    this.productsRepository.updateProductChecked(productId, false);
  }

  public checkProduct(productId: ProductId) {
    this.productsRepository.updateProductChecked(productId, true);
  }

  public getProductById(id: ProductId) {
    return this.productsRepository.getProductById(id);
  }

  public selectProducts$(): Observable<Product[]> {
    return this.productsRepository.selectProducts$();
  }

  public checkAllProducts() {
    this.selectProducts$()
      .pipe(map((products) => products.filter((product) => !product.isChecked)))
      .subscribe((products) => {
        products.forEach((product) => {
          this.checkProduct(product.id);
        });
      })
      .unsubscribe();
  }

  public uncheckAllProducts() {
    this.selectProducts$()
      .pipe(map((products) => products.filter((product) => product.isChecked)))
      .subscribe((products) => {
        products.forEach((product) => {
          this.uncheckProduct(product.id);
        });
      })
      .unsubscribe();
  }

  public deleteAllProducts() {
    this.selectProducts$()
      .subscribe((products) => {
        products.forEach((product) => {
          this.removeProduct(product.id);
        });
      })
      .unsubscribe();
  }
}
