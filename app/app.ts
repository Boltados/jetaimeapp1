import { Application } from '@nativescript/core';
import { CartService } from './shared/services/cart.service';

// Initialize global services
global.cartService = new CartService();

Application.run({ moduleName: 'app-root' });