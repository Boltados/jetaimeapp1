export interface Product {
    id: string;
    name: string;
    nameAr: string;
    description: string;
    descriptionAr: string;
    price: number;
    images: string[];
    category: string;
    inStock: boolean;
    variants?: {
        color?: string;
        size?: string;
    }[];
}