export interface CartItem {
    productId: string;
    quantity: number;
    name: string;
    nameAr: string;
    price: number;
    image: string;
    variant?: {
        color?: string;
        size?: string;
    };
}