import { Observable } from '@nativescript/core';
import { ProductsService } from '../shared/services/products.service';
import { Product } from '../shared/models/product.model';

export class HomeViewModel extends Observable {
    private _featuredProducts: Product[] = [];
    private productsService: ProductsService;

    constructor() {
        super();
        this.productsService = new ProductsService();
        this.loadFeaturedProducts();
    }

    get featuredProducts(): Product[] {
        return this._featuredProducts;
    }

    private loadFeaturedProducts() {
        this._featuredProducts = this.productsService.getFeaturedProducts();
        this.notifyPropertyChange('featuredProducts', this._featuredProducts);
    }
}