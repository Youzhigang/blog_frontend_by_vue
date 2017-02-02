<template>
    <div class="list">
        <h1>Content</h1>
        <template v-if="list.length==0">
            <h2>Sorry, No result! Only search for the TAG!</h2>
        </template >
        <template v-else>
        <ul>
            <li class="title" v-for="item in list" key="item.id" @click="linkTo(item.id),say">
            <i class="fa fa-location-arrow" aria-hidden="true">  {{item.title}}   ||  {{item.category}}</i></li>
        </ul>
         </template>
    </div>
</template>



<script>
    export default{
        name:"titlelist",
        props:{},
        data:function(){
            return{
                articles:{},
            }
        },
        computed:{
            list(){
                if(this.$store.getters.getResult){
                    return this.$store.getters.getResult;
                }else{
                    return this.$store.state.articles.results;
                }
            }
        },
        mounted:function(){
            this.articles = this.$store.state.articles;
        },
        methods: {
            linkTo(val){
                // this.$store.dispatch("LOAD_DETAIL",val)
                this.$router.push({ path: 'content/'+val})
            },
            say(){
                console.log(123)
            }
        }
    }
</script>

<style lang="stylus" scoped>
.list{
    margin-top: 1%;
    background-color: #eee;
    padding: 10%;
    order: -1;
    background-color: #fff;
    border: 1px solid #eee;
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 60px rgba(0, 0, 0, 0.06) inset;
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset; 
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset;
    position: relative;
    *zoom: 1;
   
    padding-left: 6%;
    padding-top: 3%;
    
}
li{
    text-align: left;
    list-style: none;
   
    transition:0.2s;
}
i{
     border-bottom: 1px springgreen dashed;
}
i:hover{
    border-bottom: 1px black solid;
    color:blue;
    font-weight: 600;
    cursor: pointer;

}
</style>