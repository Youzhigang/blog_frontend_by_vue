<template>  

    <button @click="test">{{counter}}</button>

</template>


<script>
    module.exports={
        name:"mybutton",
        props:['value',],
        data(){
            return{
                counter:0
            }
        },
        methods:{
            increment(){
                this.counter+=1;
                this.$emit('test')
            },
            test(e,val){
                alert(val || '123')
            }
        }
    }
</script>


