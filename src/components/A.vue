<template>
    <div>
        <div class="btn-group btn-group-justified" role="group">
            <a href="" class="btn"
            v-for="page in pages"
            v-bind:href= "page.hashLink"
            v-bind:class="{'btn-default': !page.selected, 'btn-info': page.selected }"
            @click = "selectNav(page)"
            >{{page.name}}</a>        
        
        </div>
        
        <div class="page-detail">
            <slot>father component</slot>
        </div>

    </div>
</template>


<script>
    export default{
        name:"page-nav",
        data(){
            return{
                pages:[]
            }
        },
        created(){
            console.log(this.$children);
            this.pages= this.$children;
        },
       methods:{
           selectNav(page){
               this.pages.forEach(
                   function(item,index){
                       item.selected = (item.name === page.name)
                   }
               )
           }
       }
    }    
</script>