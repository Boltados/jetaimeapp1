import { Observable } from '@nativescript/core';
import { Product } from '../models/product.model';

export class ProductsService extends Observable {
    private products: Product[] = [
        {
            id: '1',
            name: 'Beauty Cream',
            nameAr: 'كريم الجمال',
            description: 'Luxurious beauty cream for radiant skin',
            descriptionAr: 'كريم جمال فاخر للبشرة المشرقة',
            price: 299,
            images: ['~/images/products/cream1.jpg'],
            category: 'skincare',
            inStock: true
        },
        {
            id: '2',
            name: 'Facial Serum',
            nameAr: 'سيروم للوجه',
            description: 'Advanced facial serum with vitamin C',
            descriptionAr: 'سيروم متقدم للوجه مع فيتامين سي',
            price: 399,
            images: ['~/images/products/serum1.jpg'],
            category: 'skincare',
            inStock: true
        }
    ];

    getProducts(): Product[] {
        return this.products;
    }

    getFeaturedProducts(): Product[] {
        return this.products.slice(0, 4);
    }

    getProductById(id: string): Product | undefined {
        return this.products.find(product => product.id === id);
    }
}