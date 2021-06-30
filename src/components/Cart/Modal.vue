<template lang="">
    <div>
        <div class="modal">
            <div class="modal-content">
                <div class="container">
                    <div class="modal-header">
                        <span class="text">Are you sure you want to remove this product?</span>
                    </div>
                    
                    <div class="button">
                        <button v-on:click="emitCancel" class="btn-close">Cancel</button>
                        <button v-on:click="emitOK" class="btn-ok">OK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Modal',
    methods: {
        emitOK(){
            this.$emit("childToParent", true)
        },
        emitCancel(){
            this.$emit("childToParent", false)
        }
    }
}
</script>
<style scoped>
.modal{
    z-index:3;
    padding-top:100px;
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    overflow:auto;
    background-color:rgb(0,0,0);
    background-color:rgba(0,0,0,0.4)
}
.modal-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:auto;
    background-color: white;
    position:relative;
    padding:0;
    outline:0;
    height: 100px;
    width:400px
}

.container {
    display: flex;
    flex-direction: column;
}
.modal-header .text{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
}

.button {
    display: flex;
    justify-content: space-between;
    padding: 10px 40px 0px 40px;
    cursor: pointer;
}

.btn-ok {
    color: white;
    background-color: lightseagreen;
    border: 1px solid lightseagreen;
}

.button button{
    height: 30px;
    width: 80px;
    cursor: pointer;
}
@media only screen and (max-width: 768px) {
    .modal-content{
        width: 300px;
    }
    .modal-header .text{
        font-size: 14px;
    }
}

</style>