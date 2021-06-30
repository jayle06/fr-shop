<template>
    <div>
        <div class="contaiter">
            <div class="line"></div>
            <div class="infor">
                <div class="contact">
                    <span class="text header">Contact</span>
                    <div class="element">
                        <span class="text">email: mhoang0611@gmail.com</span>
                        <span class="text">phone: 0869.825.3396</span>
                    </div>
                </div>
                <div class="contact">
                    <span class="text header">Collections</span>
                    <div class="element">
                        <span class="text">Men</span>
                        <span class="text">Women</span>
                        <span class="text">Kid</span>
                    </div>
                </div>
                <div class="contact">
                    <span class="text header">Products</span>
                    <div class="element">
                        <span class="text">Shoes</span>
                        <span class="text">Sandals</span>
                        <span class="text">Clothing</span>
                    </div>
                </div>
                <div class="social">
                    <span class="text header">Social</span>
                    <div class="icon">
                        <img src="@/assets/icons/facebook-icon.png" />
                        <img src="@/assets/icons/insta-icon.png" />
                    </div>
                </div>
                
            </div>
            <div class="copyright">
                <span class="text">© All copyright by Hoang</span>
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


.contaiter{
    display: flex;
    flex-direction: column;
}

.infor{
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding: 30px;
}

.text{
    font-family: Arial, Helvetica, sans-serif;
}

.header{
    font-weight: bold;
    margin-bottom: 10px;
}

.icon img{
    width: 30px;
    padding-top: 10px;
    margin-right: 10px;
}

.element {
    display: flex;
    flex-direction: column;
}

.line{
    margin-top: 30px;
    height: 5px;
    width: 100%;
    background-color: lightseagreen;
}

.contact {
    display: flex;
    flex-direction: column;
    padding-left: 80px;
}

.copyright{
    display: flex;
    justify-content: center;
    padding: 0 30px 30px 30px;
    font-weight: bold;
}
</style>