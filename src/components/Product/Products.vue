<template>
    <div class="big-container">
        <div class="container">
            <div class="box" v-for="product in products" :key="product.id">
                <img :src="product.image[0].image_url" :alt="product.name" />
                <div class="text">
                <router-link :to="'/products/' + product.id" class="router"><span class="title">{{product.name}}</span></router-link>
                <div class="price">
                    <span :class="{active: product.is_promo}">{{formater(product.price)}}$</span>
                    <span :class="{hide: !product.is_promo}">{{formater(product.promo_price)}}$</span>
                </div>
                </div>
                <button class="add-to-cart">add to cart</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters} from 'vuex'
export default {
    name: "Products",
    computed: mapGetters(['products']),
	created() {
		this.getProducts()
	},
	methods: {
		...mapActions(['getProducts']),
        formater(numb) {
            numb = new Intl.NumberFormat().format(numb);
            return numb;
        },
	}
}
</script>
<style scoped>
* {
    margin : 0;
    box-sizing: border-box;
}
.big-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
}

.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    margin-right: 30px;
    margin-bottom: 30px;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
}

.box:hover{
    transition: 0.2s;
    transform: scale(1.1);
}

.box img {
    padding: 10px;
    cursor: pointer;
}

.text {
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.title {
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    padding-bottom: 5px;
    cursor: pointer;
}

.price {
    font-family: helvetica;
    color: black;
}

.active {
    color: red;
    text-decoration: line-through;
    margin-right: 5px;
}

.hide {
    display: none;
}

.add-to-cart {
    background-color: lightseagreen;
    border: none;
    color: white;
    height: 40px;
    text-transform: uppercase;
    cursor: pointer;
}

.box button:hover {
    background-color: red;
}

.router {
    text-decoration: none;
    color: black;
}

.router:active {
    color: red;
}

@media only screen and (max-width: 768px) {
    .box {
        width: 250px;
    }
}
</style>