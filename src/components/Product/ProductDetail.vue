<template>
    <div>
        <div class="container">
            <div class="product-img">
                <img :src="product.image[0].image_url" :alt="product.name" />
                <div class="img-container">
                    <div class="small-img" v-for="img in product.image" :key="img.id">
                        <img :src="img.image_url" :alt="product.name" />
                    </div>
                </div>
            </div>
            <div class="product-detail">
                <div class="text title">{{product.name}}</div>
                <div class="text">price: {{money}}$</div>
                <div class="text">
                    size: 
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>10</button>
                    <button>11</button>
                </div>
                <div class="quantity-box">
                    <div class="text">quantity:</div>
                    <div class="quantity">
                        <button @click="minusQuantity"> - </button>
                        <input 
                            type="number" 
                            class="input-quantity" 
                            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            v-model="quantity"
                            maxlength="2"/>
                        <button @click="plusQuantity"> + </button>
                    </div>
                </div>
                <div class="btn-submit">
                    <button class="btn-add-cart">add to cart</button>
                    <button class="btn-buy-now"><router-link to="/cart" class="router">buy now</router-link></button>
                </div>
                <div class="description">
                    <span class="description-text">{{product.description}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            product : {},
            quantity : 1,
        };
    },
    async created() {
        await axios.get(`http://127.0.0.1:3000/api/v1/products/${this.$route.params.id}`).then((response) => {
            this.product = response.data;
            console.log(response.data)
        });
    },
    methods: {
        plusQuantity() {
            if(this.quantity >= 99) {
                this.quantity = 99;
            } else {
                this.quantity++;
            }
            return this.quantity
        },
        minusQuantity() {
            if(this.quantity <= 1) {
                this.quantity = 1;
            } else {
                this.quantity--;
            }
            return this.quantity
        }
        
    },
    computed: {
    money() {
        const formater = (numb) => {
            numb = new Intl.NumberFormat().format(numb);
            return numb;
        }
        return formater(this.product.price)
    }
    }
}
</script>
<style scoped>
* {
    margin : 0;
    box-sizing: border-box;
}

.container {
    display: flex;
    justify-content: center;
}

.product-img {
    display: flex;
    flex-direction: column;
}

.product-img img{
    width: 450px;
    padding: 10px;
}

.img-container{
    display: flex;
}

.small-img{
    display: flex;
    cursor: pointer;
}
.small-img img{
    width: 90px;
}

.small-img img:hover{
    border: 2px solid lightseagreen;
    padding: 0px;
    transition: 0.2s;
    transform: scale(1.1);
}

.product-detail{
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-top: 10px;
}

.product-detail .text{
    font-family: Arial, Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.title{
    font-weight: bold;
    font-size: 24px;
    padding-bottom: 30px;
}

.product-detail button{
    height: 40px;
    width: 40px;
    cursor: pointer;
    margin-right: 10px;
}

.product-detail button:hover{
    border: 2px solid lightseagreen;
}

.quantity-box{
    display: flex;
    align-items: center;
}

.quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
}

.quantity button{
    background-color: lightseagreen;
    border: 1px solid lightseagreen;
    color: white;
}

.input-quantity{
    height: 40px;
    width: 40px;
    margin-right: 10px;
}

.input-quantity::-webkit-outer-spin-button,
.input-quantity::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.btn-submit {
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    margin-bottom: 20px;
}

.btn-submit button{
    text-transform: uppercase;
    width: 45%;
    margin-right: 0;
}

.btn-add-cart {
    background-color: white;
    border: 1px solid lightseagreen;
}

.btn-buy-now {
    background-color: lightseagreen;
    border: 1px solid lightseagreen;
    color: white;
}

.btn-submit button:hover{
    background-color: red;
    border: none;
    color: white;
}
.router {
    text-decoration: none;
    color: white;
}

.description{
    width: 500px;
}

.description span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
}

</style>