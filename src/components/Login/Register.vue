<template>
    <form @submit.prevent="handleSubmit">
        <div class="container">
            <div class="login-form">
                <div class="login-logo">
                    <img class="login-logo-img" src="@/assets/icons/logo.png" alt="logo" />
                    <span class="">register</span>
                </div>
                <div class="input-form">
                    <span class="">First Name</span>
                    <input type="text" v-model="first_name" placeholder="first name" />
                    <span class="">Last Name</span>
                    <input type="text" v-model="last_name" placeholder="last name" />
                    <span class="">Username</span>
                    <input type="text" v-model="username" placeholder="username" />
                    <span class="">Email</span>
                    <input type="email" v-model="email" placeholder="email" />
                    <span class="">Password</span>
                    <input type="password" v-model="password" placeholder="password" />
                    <span class="">Confirm Password</span>
                    <input type="password" v-model="password_confirm" placeholder="confirm password" />
                </div>
                <button type="submit" class="btb-submit">register</button>
                <router-link to="/login" class="register-span"><span >Already have account? Login now!</span></router-link>
            </div>
        </div>
    </form>
</template>
<script>
import axios from "axios";

export default {
    name: 'Register',
    data(){
        return {
            first_name: "",
            last_name: "",
            username: "",
            email:"",
            password: "",
            password_confirm: "",
        }
    },
    methods: {
        async handleSubmit(){
            await axios.post('http://127.0.0.1:3000/api/v1/register', {
                first_name: this.first_name,
                last_name: this.last_name,
                username: this.username,
                email: this.email,
                password: this.password,
                password_confirm: this.password_confirm

            });
            this.$router.push('login');
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
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
}

.login-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login-logo-img {
    width: 100px;
    margin-bottom: 10px;
    padding-top: 30px;
}

.login-logo span {
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 35px;
    font-weight: bold;
    /* font-style: italic; */
    color: lightseagreen;
    margin-bottom: 10px;
}

.input-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
}

.input-form span{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    margin-bottom: 10px;
}

.input-form input {
    width: 300px;
    height: 40px;
    margin-bottom: 10px;
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

.register-span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-style: italic;
    text-decoration: underline;
    color: lightseagreen;
    cursor: pointer;
    padding-bottom: 30px;
}

.register-span:hover {
    color: red;
}
</style>