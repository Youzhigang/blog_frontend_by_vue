<template>
    
<ul class="list-group" v-sortable>
    <li class="list-group-item">Foo <i class="handle">123</i></li>
    <li class="list-group-item">Bar <i class="handle">456</i></li>
    <li class="list-group-item"
    @mousedown="dragable"
    @mouseup="test"
    @mousemove="test2"
    :class="{resize:option}"
    :style="{width:size.width+'px',height:size.height+'px'}"
    >Baz <i class="handle">789</i></li>
    <li class="list-group-item" 
    @mousedown="dragable"
    @mouseup="test"
    @mousemove="test2"
    :class="{resize:option}"
    :style="{width:size.width+'px',height:size.height+'px'}">Cxx <i class="handle">abc</i></li>
</ul>


</template>

<script>

export default {
    name:"dragable",
    data(){
        return{
            option:false,
            size:{
                width:120,
                height:52,
            },
            position:{
                x:0,
                y:0
            }
        }
    },

    methods: {
        dragable(e){
            this.option= true;
            console.log(this.option);
           
            this.position={
                x:e.clientX,
                y:e.clientY
            }
        },
        test(e){
            console.log(e.target.offsetWidth);
            console.log(e.target.clientWidth);
            this.size.width= e.target.offsetWidth;
            this.size.height=e.target.offsetHeight;
            this.option = false;
        },
        test2(e){
        //   console.log(e);
        //   console.log(e.target.offsetWidth,e.clientX,e.pageX)
        console.log(e.clientX-this.position.x)
            if(this.option){
                if ((e.clientX)>this.position.x){
                    setTimeout(this.size.width+=10,2000);
                }else{
                    this.size.width-=10;
                }
            }
        }
    },
    
}

</script>

<style lang="" scoped>
*{
    box-sizing: border-box;
    
}
    ul{
        border: 1px black solid;
        width: 380px;
    }
    
    .resize{
        resize: both;
        overflow: auto;
    
    }

    li{
        display: inline-block;
        border:2px solid wheat;
        transition: 0.2s;
        overflow: auto;
    }
    li:hover{
        border: dashed 2px darkslateblue;
    }


</style>