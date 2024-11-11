import { Observable } from '@nativescript/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

export class CartService extends Observable {
    private _items: CartItem[] = [];
    private _total: number = 0;

    get items(): CartItem[] {
        return this._items;
    }

    get total(): number {
        return this._total;
    }

    get itemCount(): number {
        return this._items.reduce((sum, item) => sum + item.quantity, 0);
    }

    addItem(product: Product, quantity: number = 1): void {
        const existingItem = this._items.find(item => item.productId === product.id);

        if (existingItem) {
            existingItem.quantity += quantity;
            this.notifyPropertyChange('items', this._items);
        } else {
            const newItem: CartItem = {
                productId: product.id,
                quantity,
                name: product.name,
                nameAr: product.nameAr,
                price: product.price,
                image: product.images[0]
            };
            this._items.push(newItem);
        }

        this.updateTotal();
    }

    removeItem(productId: string): void {
        this._items = this._items.filter(item => item.productId !== productId);
        this.notifyPropertyChange('items', this._items);
        this.updateTotal();
    }

    updateQuantity(productId: string, quantity: number): void {
        const item = this._items.find(item => item.productId === productId);
        if (item) {
            item.quantity = quantity;
            this.notifyPropertyChange('items', this._items);
            this.updateTotal();
        }
    }

    clearCart(): void {
        this._items = [];
        this.notifyPropertyChange('items', this._items);
        this.updateTotal();
    }

    private updateTotal(): void {
        this._total = this._items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        this.notifyPropertyChange('total', this._total);
        this.notifyPropertyChange('itemCount', this.itemCount);
    }
}