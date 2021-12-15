app.component('product-display', {
    props: {
      premium: {
          type: Boolean,
          required: true
      }  
    },
    template:
    /*html*/
`<div class="product-display">
<div class="product-container">
  <div class="product-image">
    <img :class="{ 'out-of-stock-img': !inStock }":src="image"> <!-- Attribute Binding + Class & Style Binding -->
  </div>
  <div class="product-info">
    <h1>{{ title }}</h1>

    <p v-if="onSale">{{ saleMessage }}</p> <!-- Conditional Rendering and Computed Properties -->
    <p v-if="inStock">In Stock</p> <!-- Conditional Rendering -->
    <!-- Commented Out <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p> Conditional Rendering -->
    <p v-else>Out of Stock</p> <!-- Conditional Rendering -->

    <p>Shipping: {{ shipping }}

    <product-details :details="details"></product-details> <!-- Components & Props -->

    <ul>
      <li v-for="size in sizes">{{ size }}</li> <!-- List Rendering -->
    </ul>
    <div 
      v-for="(variant, index) in variants" 
      :key="variant.id" 
      @mouseover="updateVariant(index)"
      class="color-circle"
      :style="{ backgroundColor: variant.color }">
    </div> <!-- List Rendering: Binding variant id to key attribute-->
    <button 
      class="button" 
      :class="{ disabledButton: !inStock }"
      :disabled="!inStock"
      @click="addToCart">
      Add to Cart
    </button> <!-- Event Handling + Class & Style Binding (disabledButton)-->
    <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" @click="removeFromCart">Remove from Cart</button> <!-- Event Handling -->
    <!-- Commented Out <a :href="url">A simple URL link</a> Attribute Binding -->
  </div>
</div>
</div>
</div>`,
data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        description: 'A placeholder description for Socks',
        selectedVariant: 0,
        // url: 'https://www.zealand.dk/',
        // inventory: 8,
        onSale: true,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
            {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
            {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
        ],
        sizes: ['Small', 'Medium', 'Large', 'XL']
    }
},
methods: {
    addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
        this.selectedVariant = index
    }
},
computed: { // Computed Properties
    title() {
        return this.brand + ' ' + this.product
    },
    image() {
        return this.variants[this.selectedVariant].image
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity
    },
    saleMessage() {
        if (this.onSale) {
            return this.brand + ' ' + this.product + ' is on sale'
        }
        return ''
    },
    shipping() {
        if (this.premium) {
            return 'Free'
        }
        return 2.99
    }
}
})