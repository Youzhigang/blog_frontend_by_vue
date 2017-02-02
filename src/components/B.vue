<template>
    <div v-show="selected">
        <slot>child component</slot>
    </div>

</template>


<script>
    export default{
        name:"page",
        data(){
            return{
                selected: false
            }
        },
        props:{
            name:{required:true},
            link:{required:true},
            active: { default: false }
        },
        mounted: function () {
        this.selected = this.active
    },
         computed:{
            hashLink(){
                return "#"+this.link
            }
        }
    }
</script>