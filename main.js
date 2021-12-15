const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A placeholder description for Socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.zealand.dk/',
            inStock: true,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'},
            ],
            sizes: ['Small', 'Medium', 'Large', 'XL']
        }
    }
})
