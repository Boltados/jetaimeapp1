import { Observable } from '@nativescript/core';
import { CartService } from '../shared/services/cart.service';
import { CartItem } from '../shared/models/cart-item.model';

export class CartViewModel extends Observable {
    private cartService: CartService;

    constructor() {
        super();
        this.cartService = new CartService();
    }

    get items(): CartItem[] {
        return this.cartService.items;
    }

    get total(): number {
        return this.cartService.total;
    }

    get itemCount(): number {
        return this.cartService.itemCount;
    }

    increaseQuantity(args: any) {
        const item = args.object.bindingContext;
        this.cartService.updateQuantity(item.productId, item.quantity + 1);
    }

    decreaseQuantity(args: any) {
        const item = args.object.bindingContext;
        if (item.quantity > 1) {
            this.cartService.updateQuantity(item.productId, item.quantity - 1);
        }
    }

    removeItem(args: any) {
        const item = args.object.bindingContext;
        this.cartService.removeItem(item.productId);
    }
}