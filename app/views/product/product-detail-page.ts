import { EventData, NavigatedData, Page } from '@nativescript/core';
import { Product } from '../../shared/models/product.model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    const product = args.context.product;
    page.bindingContext = { product, isArabic: false }; // TODO: Implement language detection
}

export function onAddToCart(args: EventData) {
    const view = args.object;
    const page = view.page;
    const product = page.bindingContext.product;
    // TODO: Implement add to cart functionality
    console.log(`Adding ${product.name} to cart from details page`);
}