<template lang="">
    <div>
        <div class="header-banner">
            <div class="banner">
                <img src="@/assets/banner/banner.jpg" alt="banner" />
            </div>
            <div class="banner-content">
                <span class="banner-text">
                    Discount applied in cart. Some products are exceptional. Terms and condition
                </span>
                <router-link to="/products" class="router"><button class="shopping-now">Shopping Now</button></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
* {
    margin : 0;
    box-sizing: border-box;
}

.banner {
    position : relative;
}

.banner img {
    width : 100%;
}

.banner-content {
    display : flex;
    flex-direction: column;
    position: absolute;
    top : 500px;
    left : 10%;
}

.banner-text {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    width: 400px;
    margin-bottom: 5px;
}

.banner-content button {
    background-color: lightseagreen;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    height: 40px;
    width : 150px;
}

.banner-content button:hover{
    background-color: red;
}
</style>