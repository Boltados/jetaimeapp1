import { EventData, View } from '@nativescript/core';
import { Product } from '../../shared/models/product.model';

export function onProductTap(args: EventData) {
    const view = args.object as View;
    const product = view.bindingContext as Product;
    // Navigate to product details
    const frame = view.page.frame;
    frame.navigate({
        moduleName: 'views/product/product-detail-page',
        context: { product }
    });
}

export function onAddToCart(args: EventData) {
    const view = args.object as View;
    const product = view.bindingContext as Product;
    // TODO: Implement add to cart functionality
    console.log(`Adding ${product.name} to cart`);
}