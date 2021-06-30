<template>
    <form @submit.prevent="handleSubmit">
        <div class="container">
            <div class="customer-info">
                <div class="input-form">
                    <span class="">Firts Name</span>
                    <input type="text" v-model="first_name" placeholder="full name" />
                    <span class="">Last Name</span>
                    <input type="text" v-model="last_name" placeholder="last name" />
                    <span class="">Address</span>
                    <input type="text" v-model="address" placeholder="address" />
                    <span class="">Phone Number</span>
                    <input type="text" v-model="phone_number" placeholder="phone number" />
                    <span class="">Email</span>
                    <input type="email" v-model="email" placeholder="email" />
                </div>
                <div class="payment">
                    <div class="text-payment">
                        <span class="text">Promo code</span>
                        <div class="input-promo">
                            <input type="text" placeholder="promo code" v-model="promoCode" @keyup.enter="checkPromoCode" />
                            <button type="button" @click="checkPromoCode"></button>
                        </div>
                        
                    </div>
                    <div class="text-payment">
                        <span class="text">Total products</span>
                        <span class="number">{{ formater(itemCount) }}</span>
                    </div>
                    <div class="text-payment">
                        <span class="text">Subtotal</span>
                        <span class="number">{{ formater(subTotal) }} $</span>
                    </div>
                    <div v-if="discount > 0" class="text-payment">
                        <span class="text">Promo</span>
                        <span class="number">{{ formater(discountPrice) }} $</span>
                    </div>
                    <div class="text-payment">
                        <span class="text">Tax</span>
                        <span class="number">{{ formater(tax) }} $</span>
                    </div>
                    <div class="text-payment">
                        <span class="text total">Total</span>
                        <span class="number total">{{ formater(totalPrice) }} $</span>
                    </div>
                </div>
                <button type="submit" class="btb-submit">Check out</button>
            </div>
        </div>
    </form>
</template>
<script>
import axios from "axios";
    export default {
        props : ["products"],
        data() {
            return {
                first_name: "",
                last_name: "",
                email:"",
                phone_number:"",
                address:"",
                order_items: [],
                total: 0,
                promotions: [
                    {
                        code: "BANANHHOANG",
                        discount: "50%"
                    },
                    {
                        code: "EMANHHOANG",
                        discount: "30%"
                    }
                ],
                promoCode: "",
                discount: 0
            }
        },
        computed : {
            itemCount() {
                let count = 0;
                this.products.filter(product =>{
                    count += product.quantity;
                    return count;
                })
                return count;
            },
            subTotal() {
                let sum = 0;
                this.products.filter((product) => {
                    if (product.is_promo) {
                        sum += product.promo_price * product.quantity;
                    } else {
                        sum += product.price * product.quantity;
                    }
                    return sum;
                });
                return sum;
            },
            discountPrice() {
                return this.subTotal * this.discount / 100;
            },
            tax(){
                return (this.subTotal - this.discountPrice) * 0.1;
            },
            totalPrice() {
                return this.subTotal - this.discountPrice + this.tax;
            }
        },
        methods: {
            formater(numb) {
                numb = new Intl.NumberFormat().format(numb);
                return numb;
            },
            checkPromoCode() {
                for (let i = 0; i < this.promotions.length; i++) {
                    if (this.promoCode === this.promotions[i].code) {
                        this.discount = parseFloat(this.promotions[i].discount.replace("%", ""));
                        return;
                    }
                }
                alert("Sorry, the Promotional code you entered is not valid!");
            },
            async handleSubmit(){
                await axios.post('http://127.0.0.1:3000/api/v1/orders', {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    phone_number: this.phone_number,
                    address: this.address,
                    order_items : this.products,
                    total: this.totalPrice,
                });
                this.$router.push('/');
            }
        }
    };
</script>
<style scoped>
    * {
        margin: 0;
        box-sizing: border-box;
    }

    .container {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .customer-info {
        display: flex;
        flex-direction: column;
        padding: 30px;
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
    }

    .input-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 10px;
    }

    .input-form span {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        margin-bottom: 10px;
    }

    .input-form input {
        width: 300px;
        height: 40px;
        margin-bottom: 10px;
    }

    .input-form input:focus {
        outline: 1px solid lightseagreen;
        border: 1px solid lightseagreen;
    }

    .btb-submit {
        background-color: lightseagreen;
        border: none;
        color: white;
        height: 40px;
        width: 300px;
        text-transform: uppercase;
        cursor: pointer;
        margin-bottom: 10px;
    }

    .btb-submit:hover {
        background-color: red;
    }

    .payment {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    .payment .text-payment {
        display: grid;
        grid-template-columns: 40% 60%;
        text-align: right;
        font-family: Arial, Helvetica, sans-serif;
        padding-bottom: 5px;
    }

    .text-payment input {
        float: left;
        width: 80%;
        border: 1px solid lightseagreen;
        border-radius: 10px 0 0 10px;
        margin-left: 10px;
        padding-left: 10px;
    }

    .text-payment input:focus {
        outline: none;
    }

    .input-promo{
        display: flex;
    }

    .input-promo button {
        float: left;
        width: 20%;
        border-radius: 0 10px 10px 0;
        background-color: lightseagreen;
        border: 1px solid lightseagreen;
        color: #ffffff;
        transition: all 0.25s linear;
        cursor: pointer;
    }

    .input-promo button::after {
        position: relative;
        right: 0;
        content: " \276f";
        transition: all 0.15s linear;
    }

    .input-promo button:hover::after {
        right: -5px;
    }

    .total {
    font-weight: bold;
    }
    @media only screen and (max-width: 768px) {
        .customer-info {
            box-shadow: none;
            padding: 0;
            padding-top: 30px;
        }
    }
</style>