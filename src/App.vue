<template>
<div id="app">
    <hello></hello>
    <div class="left">
      <Category></Category>
      <Posttime></Posttime>
    </div>
    <Handler></Handler>
  <div class="content">
   <transition name="anileft" mode="out-in">
      <router-view>
      </router-view>
    </transition>
  </div>
</div>
</template>

<script>
import Hello from './components/Header.vue'
import Main from './components/Main.vue'
import List from './components/List.vue'
// import mybutton from './components/button.vue';
import Category from './components/Categories.vue'
import Posttime from './components/Posttimes.vue'
import Handler from './components/Handler'

// axios.default.header={'Access-Control-Allow-Origin':'*'}

export default {
  name: 'app',
  
  components: {
    Hello,
    List,
    Category,
    Posttime,
    Handler,
  },
  created(){
    
  },
  mounted(){
    this.$store.dispatch("LOAD_ARTICLES")
  },
  methods:{
    
  }
}
</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.left{
  order: -1;
  width: 15%;
  margin: 20px;
  padding: 20px;
}
.content{
   flex: 1;
   
}
.content .anileft-transition{
  transition:2s;
}
.content .anileft-enter{
  transform: translateX(1000%);
}
.content .anileft-leave{
 transform: translateX(1000%);
}
</style>
