import { Observable } from '@nativescript/core';

export class ProductDetailsViewModel extends Observable {
    private _product: any;
    private _quantity: number;

    constructor(product: any) {
        super();
        this._product = product;
        this._quantity = 1;
    }

    get product(): any {
        return this._product;
    }

    get quantity(): number {
        return this._quantity;
    }

    increaseQuantity() {
        this._quantity++;
        this.notifyPropertyChange('quantity', this._quantity);
    }

    decreaseQuantity() {
        if (this._quantity > 1) {
            this._quantity--;
            this.notifyPropertyChange('quantity', this._quantity);
        }
    }

    addToCart() {
        // Implement add to cart logic
        console.log(`Added ${this._quantity} ${this._product.name}(s) to cart`);
    }
}