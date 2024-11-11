import { Observable, Frame } from '@nativescript/core';

export class ProductsViewModel extends Observable {
    private _products: Array<any>;
    private _categoryName: string;

    constructor(categoryId: number, categoryName: string) {
        super();

        this._categoryName = categoryName;
        this._products = this.getProductsByCategory(categoryId);
    }

    get products(): Array<any> {
        return this._products;
    }

    get categoryName(): string {
        return this._categoryName;
    }

    private getProductsByCategory(categoryId: number): Array<any> {
        // Simulated product data - replace with actual API call
        return [
            {
                id: 1,
                name: "Elegant Evening Dress",
                description: "Perfect for special occasions",
                price: 599.99,
                imageUrl: "https://via.placeholder.com/150",
                categoryId: categoryId
            },
            {
                id: 2,
                name: "Casual Summer Dress",
                description: "Light and comfortable",
                price: 299.99,
                imageUrl: "https://via.placeholder.com/150",
                categoryId: categoryId
            },
            {
                id: 3,
                name: "Designer Handbag",
                description: "Premium quality leather",
                price: 899.99,
                imageUrl: "https://via.placeholder.com/150",
                categoryId: categoryId
            }
        ];
    }

    onProductTap(args: any) {
        const product = this._products[args.index];
        Frame.topmost().navigate({
            moduleName: "views/product-details/product-details-page",
            context: { product }
        });
    }

    onAddToCart(args: any) {
        const button = args.object;
        const product = button.bindingContext;
        // Implement add to cart logic
        console.log(`Added to cart: ${product.name}`);
    }
}