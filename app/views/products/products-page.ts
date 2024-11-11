import { EventData, Page, NavigatedData } from '@nativescript/core';
import { ProductsViewModel } from '../../view-models/products-view-model';

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    if (!page.bindingContext) {
        const context = args.context;
        page.bindingContext = new ProductsViewModel(context.categoryId, context.categoryName);
    }
}