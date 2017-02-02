<template>
  <div id="app">
    <hello></hello>
    <div class="left">
      <Category></Category>
      <Posttime></Posttime>
    </div>
    
  <div class="content">
     <router-view
      
      transition
      transition-mode="out-in">
    </router-view>
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

// axios.default.header={'Access-Control-Allow-Origin':'*'}

export default {
  name: 'app',
  
  components: {
    Hello,
    List,
    Category,
    Posttime
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
</style>
