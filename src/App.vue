<template>
<div id="app">
    <hello></hello>
    <div class="left">
      <Category></Category>
      <Posttime></Posttime>
    </div>
    <Handler></Handler>
  <div class="content">
   
   <transition :name="transitionName">
      <router-view class="child-view">
      </router-view>
    </transition>
  </div>
</div>
</template>

<script>
import Hello from './components/Header.vue'
import Main from './components/Main.vue'
import Category from './components/Categories.vue'
import Posttime from './components/Posttimes.vue'
import Handler from './components/Handler'

// axios.default.header={'Access-Control-Allow-Origin':'*'}

export default {
  name: 'app',
  
  components: {
    Hello,
    Category,
    Posttime,
    Handler,
  },
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  created(){
    
  },
  mounted(){
    this.$store.dispatch("LOAD_ARTICLES")
  },
  methods:{
    
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth > fromDepth ? 'slide-right' : 'slide-left'
      console.log(this.transitionName)
      
      
    }
  },
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
  float: left;
  width: 180px;
  margin: 20px 10px 10px;
  padding: 20px;
}
.content{
  float: right;
  width: 1000px;
  margin-right:100px; 
  margin-top: 10px;
  z-index: 999;
}

</style>
