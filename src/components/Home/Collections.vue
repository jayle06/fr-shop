<template lang="">
    <div>
        <div class="collections">
            <div class="collections-header">
                <span class="" >collections</span>
            </div>
            <div class="container">
                <div class="box">
                    <img src="@/assets/collection/men.jpg" alt="men" />
                    <div class="text">
                        <span class="title">Men</span>
                    </div>
                </div>
                <div class="box">
                    <img src="@/assets/collection/women.jpg" alt="women" />
                    <div class="text">
                        <span class="title">Women</span>
                    </div>
                </div>
                <div class="box">
                    <img src="@/assets/collection/kid.jpg" alt="kid" />
                    <div class="text">
                        <span class="title">Kid</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.collections {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}

.collections-header span{
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-left: 30px;
}

.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    margin-right: 30px;
    margin-bottom: 30px;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
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
</style>>