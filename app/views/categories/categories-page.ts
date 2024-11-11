import { EventData, Page, ItemEventData } from '@nativescript/core';
import { CategoriesViewModel } from '../../view-models/categories-view-model';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    if (!page.bindingContext) {
        page.bindingContext = new CategoriesViewModel();
    }
}