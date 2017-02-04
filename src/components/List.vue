<template>
    <div class="list">
        <h1>Content</h1>
        <template v-if="!list || list.length==0">
            <h2>Sorry, No result! Only search for the TAG!</h2>
        </template >
        <template v-else>
            <transition-group name="flip-list" tag="ul">
                <li class="title" v-for="item in list" :key="item.id" @click="linkTo(item.id)">
                    <i class="fa fa-location-arrow" aria-hidden="true">  {{item.title}}   ||  {{item.category}}</i>
                </li>
            </transition-group>
         </template>
    </div>
</template>



<script>
Array.prototype.shuffle=function(){
let newarr = this;
  for (let i = this.length; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let x = this[i - 1];
    newarr[i - 1] = this[j];
    newarr[j] = x;
  }
  return newarr;
}

import {mapMutations} from 'vuex'

    export default{
        name:"titlelist",
        props:{},
        data(){
            return{
                article_list:[],
                
            }
        },
        computed:{
            list(){
                if(this.$store.getters.getResult){
                    return this.$store.getters.getResult;
                }else{
                    return this.$store.state.articles.results;
                }
            },
            shuffle(){
                this.list = _.shuffle(this.list)
            }
        },
        created(){
            this.article_list = JSON.parse(window.sessionStorage.getItem("temp_articles")).results
            setInterval(()=>{
                this.SHUFFLE();console.log(123)
            },10000)
        },
        mounted () {

        },
        methods: {
            linkTo(val){
                // this.$store.dispatch("LOAD_DETAIL",val)
                this.$router.push({ path: 'content/'+val})
            },
            say(){
                this.article_list = _.shuffle(this.article_list)
            },
            ...mapMutations([
                'SHUFFLE'
            ])
        }
    }
</script>

<style lang="stylus" scoped>

.flip-list-move {
  transition: transform 8s;
}


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
    margin-top: 2%;
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