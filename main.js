const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A placeholder description for Socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.zealand.dk/',
            inventory: 0,
            onSale: true
        }
    }
})
