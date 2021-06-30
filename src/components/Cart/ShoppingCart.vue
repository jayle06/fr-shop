<template lang="">
    <div class="big-container">
        <div class="container">
            <div v-if="products.length > 0">
                <div class="product-list">
                    <div class="product" v-for="(product, id) in products" :key="product.id">
                        <div class="product-content">
                            <img :src="product.image" :alt="product.product_name" />

                            <div class="product-price">
                                <span class="text title">{{ product.product_name }}</span>
                                <span :class="{ active: product.is_promo }">price: {{ formater(product.price) }} $</span>
                                <span :class="{ hide: !product.is_promo }">price: {{ formater(product.promo_price) }} $</span>
                                <div class="quantity">
                                    <span class="text">quantity: </span>
                                    <input 
                                        type="number" 
                                        class="input-quantity" 
                                        step="1" 
                                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                        maxlength=2
                                        :value="product.quantity" 
                                        @input="updateQuantity(id, $event)" 
                                        @blur="checkQuantity(id, $event)" 
                                    />
                                </div>
                            </div>
                            
                            <button class="delete" @click="openPopup(product.id)">x</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="empty-product">
                <h3>There are no products in your cart.</h3>
                <router-link to="/" class=""><button>Continue Shopping</button></router-link>
            </div>
        </div>
        <Payment :products ="products" />
    </div>
    <transition name="fade">
        <Modal v-if="isShow" v-on:childToParent="removeItem"/>
    </transition>
    
</template>
<script>
import Payment from './Payment.vue'
import Modal from './Modal.vue'

export default {
    components: {
        Payment,
        Modal
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    product_name: "adidas ultra boost black",
                    image: require("@/assets/1.jpg"),
                    price: 150,
                    promo_price: 140,
                    is_promo: true,
                    quantity: 5,
                },
                {
                    id: 2,
                    product_name: "adidas yezzy 350 seasame",
                    image: require("@/assets/2.jpg"),
                    price: 151,
                    promo_price: 141,
                    is_promo: false,
                    quantity: 2,
                },
                {
                    id: 3,
                    product_name: "adidas ultra boost white",
                    image: require("@/assets/3.jpg"),
                    price: 152,
                    promo_price: 142,
                    is_promo: false,
                    quantity: 15,
                },
                {
                    id: 4,
                    product_name: "adidas yezzy 500 blush",
                    image: require("@/assets/4.jpg"),
                    price: 153,
                    promo_price: 143,
                    is_promo: false,
                    quantity: 1,
                },
                {
                    id: 5,
                    product_name: "adidas yezzy boost 350",
                    image: require("@/assets/5.jpg"),
                    price: 154,
                    promo_price: 144,
                    is_promo: true,
                    quantity: 1,
                },
                {
                    id: 6,
                    product_name: "adidas yezzy boost 350",
                    image: require("@/assets/6.jpg"),
                    price: 154,
                    promo_price: 144,
                    is_promo: false,
                    quantity: 1,
                },
            ],
            productsClone : [],
            isShow: false,
            productId: 0,
        }
    },
    created() {
        this.productsClone = this.products.slice();
    },
    methods: {
        openPopup(id){
            this.isShow = true;
            this.productId = id;
        },
        removeItem(value){
            if(value) {
                this.products = this.products.filter(product => product.id !== this.productId);
            } 
            this.isShow = false;
        },
        formater(numb) {
        numb = new Intl.NumberFormat().format(numb);
        return numb;
        },
        updateQuantity(id, event) {
            let product = this.products[id];
            let value = event.target.value;
            let valueInt = parseInt(value);
            if (value === "") {
                product.quantity = value;
            } else if (valueInt > 0 && valueInt < 100) {
                product.quantity = valueInt;
            }

        },
        checkQuantity(id, event) {
            if (event.target.value === "") {
                let product = this.products[id];
                product.quantity = 1;
            }
        },
        reloadProduct(){
            this.products = this.productsClone.slice();
        }
    },
}
</script>
<style scoped>
    * {
    margin: 0;
    box-sizing: border-box;
    }

    .big-container{
        display: flex;
        justify-content: center;
    }

    .container {
        display: flex;
        justify-content: center;
    }

    .empty-product {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 600px;
        height: 630px;
        margin-right: 30px;
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
    }
    .empty-product h3 {
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: 10px;
    }
    .empty-product button {
        background-color: lightseagreen;
        border: none;
        color: white;
        height: 40px;
        width: 300px;
        text-transform: uppercase;
        cursor: pointer;
        margin-bottom: 10px;
    }
    .empty-product button:hover {
        background-color: red;
    }
    .product-list {
        display: flex;
        flex-direction: column;
        width: 600px;
        /* height: 600px; */
        margin-right: 30px;
        padding: 30px;
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
    }

    .product {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        padding-bottom: 5px;
        border-bottom: 1px solid lightseagreen;
    }

    .product-content {
        display: grid;
        grid-template-columns: 25% 65% 10%;
        align-items: center;
    }

    .product img {
        width: 70px;
        margin-right: 10px;
        margin-left: 10px;
    }

    .product span {
        font-family: Arial, Helvetica, sans-serif;
    }

    .title {
        text-transform: uppercase;
        font-weight: bold;
    }

    .product-price {
        display: flex;
        flex-direction: column;
    }

    .product button {
        height: 30px;
        width: 30px;
        margin-right: 10px;
        margin-left: 10px;
        background-color: lightseagreen;
        border: none;
        color: white;
        cursor: pointer;
    }

    .product .delete {
        background-color: red;
    }

    .quantity {
        display: flex;
        align-items: center;
    }

    .quantity span {
        margin-right: 10px;
    }

    .input-quantity {
        height: 30px;
        width: 30px;
    }

    .input-quantity::-webkit-outer-spin-button,
    .input-quantity::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    
    .active {
        display: none;
    }

    .hide {
        display: none;
    }
    
    @media only screen and (max-width: 768px) {
        .big-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .product-list {
            box-shadow: none;
            padding: 10px;
            margin-right: 0;
            padding-bottom: 0px;
            width: auto;
            height: auto;
        }

        .product-content {
            display: grid;
            grid-template-columns: 25% 60% 15%;
        }

        .product span {
            font-size: 14px;
        }

        .empty-product {
            box-shadow: none;
            padding-top: 30px;
            margin-right: 0;
            padding-bottom: 0px;
            width: auto;
            height: auto;
        }
    }
</style>