<template>
    <div>
        <div class="header">
        <div class="header-nav-bar">

            <router-link to="/" class="router"><img class="img-logo" src="@/assets/icons/logo.png" alt="logo" /></router-link>

            <div class="header-text">
                <ul>
                    <router-link to="/" class="router"><li>Home</li></router-link>
                    <router-link to="/products" class="router"><li>Products</li></router-link>
                    <router-link to="/about" class="router"><li>About</li></router-link>
                    <li>Contact</li>
                </ul>
            </div>

            <div class="input-search">
                <input type="text" v-model="searchKey" @keyup.enter="search" placeholder="search..." />
                <router-link to="/search" class="router"><button class="btn-search" @click="search">
                    <img class="icon-search" src="@/assets/icons/search-icon.png" alt="icon-search" />
                    Search
                </button></router-link>
            </div>

            <div class="login">
                <img class="icon-login" src="@/assets/icons/login-icon.png" alt="icon-login" />
                <div class="text-login">
                    <router-link to="/login" class="router" v-if="!isAuthenticated" @click="TOGGLE_AUTH"><span>Log in / Register</span></router-link>
                    <!-- <router-link to="/register" class="router"><span>Register</span></router-link> -->
                    <span v-if="isAuthenticated" @click="logout">Log out</span>
                </div>
            </div>

            <div class="cart">
                <router-link to="/cart" class="router"><img class="icon-cart" src="@/assets/icons/cart-icon.png" alt="icon-cart" /></router-link>
            </div>

        </div>
    </div>
    </div>
</template>
<script>
import axios from "axios";
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return {
            searchKey: "",
            products: [],
        }
    },
    computed: mapGetters(['isAuthenticated']),
	created() {
		this.logout()
	},
    methods: {
        ...mapActions(['logout']),
        ...mapMutations(['TOGGLE_AUTH']),
        async search() {
			try {
				await axios.get(
					`http://127.0.0.1:3000/api/v1/products/search/${this.searchKey}`
				).then(response => {
                    this.products = response.data
                    this.$store.dispatch('loadItems', this.products);
                })
			} catch (error) {
				console.log(error)
			}
		},
    }
}
</script>
<style scoped>
* {
    margin : 0;
    box-sizing: border-box;
}

.header-nav-bar{
    background-color: lightseagreen;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
    margin-bottom: 30px;
}

.img-logo{
    height: 60px;
    padding-left: 80px;
    cursor: pointer;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    display: inline;
    margin-left: 40px;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    color: white;
    cursor: pointer;
}

li:hover {
    color: black;
}

.input-search {
    display: flex;
    justify-content: space-around;
    height: 40px;
    margin-left: 40px;
}

.input-search input {
    width: 300px;
    border: none;
}

.btn-search {
    display: flex;
    align-items: center;
    margin-left: 0;
    padding: 15px;
    cursor: pointer;
    border: none;
    height: 40px;
}

.btn-search img{
    height: 25px;
}

.input-search button {
    background-color: rgb(12, 122, 117);
    color: white;
}

.input-search button:hover {
    background-color: red;
}

.login {
    display: flex;
    align-self: center;
    margin-left: 40px;
    cursor: pointer;
}

.login img {
    height: 40px;
}

.text-login {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-left: 5px;
}

.text-login span {
    font-family: Arial;
    font-size: 14px;
    color: white;
}

.cart {
    margin-left: 40px;
    cursor: pointer;
}

.cart img {
    height: 40px;
}

.router {
    text-decoration: none;
    color: white;
}

.router:active {
    color: red;
}

</style>