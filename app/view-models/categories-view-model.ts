import { Observable, Frame } from '@nativescript/core';

export class CategoriesViewModel extends Observable {
    private _categories: Array<any>;

    constructor() {
        super();

        this._categories = [
            {
                id: 1,
                name: "Women's Fashion",
                imageUrl: "https://via.placeholder.com/60",
                itemCount: 150
            },
            {
                id: 2,
                name: "Men's Fashion",
                imageUrl: "https://via.placeholder.com/60",
                itemCount: 120
            },
            {
                id: 3,
                name: "Accessories",
                imageUrl: "https://via.placeholder.com/60",
                itemCount: 80
            },
            {
                id: 4,
                name: "Beauty Products",
                imageUrl: "https://via.placeholder.com/60",
                itemCount: 95
            },
            {
                id: 5,
                name: "New Arrivals",
                imageUrl: "https://via.placeholder.com/60",
                itemCount: 45
            }
        ];
    }

    get categories(): Array<any> {
        return this._categories;
    }

    onCategoryTap(args: ItemEventData) {
        const category = this._categories[args.index];
        Frame.topmost().navigate({
            moduleName: "views/products/products-page",
            context: { categoryId: category.id, categoryName: category.name }
        });
    }
}