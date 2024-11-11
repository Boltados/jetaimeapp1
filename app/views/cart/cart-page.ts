import { EventData, NavigatedData, Page } from '@nativescript/core';
import { CartViewModel } from '../../view-models/cart-view-model';

let cartViewModel: CartViewModel;

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    if (!cartViewModel) {
        cartViewModel = new CartViewModel();
    }
    page.bindingContext = cartViewModel;
}

export function onShopNow(args: EventData) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate({
        moduleName: 'views/home/home-page',
        clearHistory: true
    });
}

export function onCheckout(args: EventData) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate({
        moduleName: 'views/checkout/checkout-page'
    });
}