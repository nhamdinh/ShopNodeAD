import img1 from '@assets/products/electronics/1.webp';
import img2 from '@assets/products/fashion/1.webp';
import img3 from '@assets/products/electronics/3.webp';
import img4 from '@assets/products/services/1.webp';
import img5 from '@assets/products/fashion/12.webp';
import img6 from '@assets/products/food/11.webp';
import img7 from '@assets/products/food/16.webp';
import img8 from '@assets/products/fashion/9.webp';
import img9 from '@assets/products/services/3.webp';
import img10 from '@assets/products/electronics/11.webp';

const orders = [
    {
        orderNumber: 123456,
        sku: '123456FR',
        status: 'completed',
        rating: 3.5,
        category: 'electronics',
        payment: {
            amount: 600,
            received: 600,
        },
        product: {
            product_name: 'Oculus Quest 2 VR Headset 64 GB',
            product_thumb: img1,
            product_thumb_small: img1,
            product_price: 600,
            product_original_price: 559,
        }
    },
    {
        orderNumber: 154844,
        sku: '598741FR',
        status: 'confirmed',
        rating: 4.5,
        category: 'fashion',
        payment: {
            amount: 4000,
            received: 180,
        },
        product: {
            product_name: 'Levis Standard Issue Backpack Black',
            product_thumb: img2,
            product_thumb_small: img2,
            product_price: 100,
        }
    },
    {
        orderNumber: 202587,
        sku: '485912TY',
        status: 'cancelled',
        rating: 4.5,
        category: 'electronics',
        payment: {
            amount: 200,
            received: 0,
        },
        product: {
            product_name: 'Xiaomi WiFI Repeater Pro',
            product_thumb: img3,
            product_thumb_small: img3,
            product_price: 200,
            product_original_price: 180,
        }
    },
    {
        orderNumber: 300411,
        sku: '365487RT',
        status: 'confirmed',
        rating: 4.5,
        category: 'services',
        payment: {
            amount: 9.99,
            received: 9.99,
        },
        product: {
            product_name: 'UPS Express Shipping',
            product_thumb: img4,
            product_thumb_small: img4,
            product_price: 9.99,
        }
    },
    {
        orderNumber: 785241,
        sku: '002315ES',
        status: 'confirmed',
        rating: 4.5,
        category: 'fashion',
        payment: {
            amount: 40,
            received: 40,
        },
        product: {
            product_name: 'Parfois Woman Flower Backpack',
            product_thumb: img5,
            product_thumb_small: img5,
            product_price: 20,
            product_original_price: 15.99
        }
    },
    {
        orderNumber: 458745,
        sku: '541125FR',
        status: 'completed',
        rating: 0,
        category: 'food',
        payment: {
            amount: 129.54,
            received: 129.54,
        },
        product: {
            product_name: 'Goodwill Sanctuary Sanca Olive Oil 5L',
            product_thumb: img6,
            product_thumb_small: img6,
            product_price: 129.54,
        }
    },
    {
        orderNumber: 105488,
        sku: '252596FR',
        status: 'confirmed',
        rating: 5,
        category: 'food',
        payment: {
            amount: 78.99,
            received: 52.18,
        },
        product: {
            product_name: 'Guylian Seashells Belgian Chocolate 1kg',
            product_thumb: img7,
            product_thumb_small: img7,
            product_price: 78.99,
            product_original_price: 69.99
        }
    },
    {
        orderNumber: 900541,
        sku: '002315BN',
        status: 'cancelled',
        rating: 0,
        category: 'fashion',
        payment: {
            amount: 118.99,
            received: 0,
        },
        product: {
            product_name: 'Puma Crossbody Bag Black Unisex',
            product_thumb: img8,
            product_thumb_small: img8,
            product_price: 118.99,
            product_original_price: 99.99
        }
    },
    {
        orderNumber: 121844,
        sku: '814315LP',
        status: 'refunded',
        rating: 0,
        category: 'services',
        payment: {
            amount: 9.99,
            received: 0,
        },
        product: {
            product_name: 'Sustainable packaging services for 1 item',
            product_thumb: img9,
            product_thumb_small: img9,
            product_price: 9.99,
        }
    },
    {
        orderNumber: 240412,
        sku: '361087RT',
        status: 'completed',
        rating: 4.5,
        category: 'electronics',
        payment: {
            amount: 200,
            received: 200,
        },
        product: {
            product_name: 'SteamDeck Gaming Console 64 GB',
            product_thumb: img10,
            product_thumb_small: img10,
            product_price: 200,
            product_original_price: 180,
        }
    }
]

export default orders