<template>
  <div class="header">
    <div class="inner">
      <a href="/" class=""></a>
      <a href="/top" class="router-link-active">Top</a>
      <a href="/new" class="">New</a>
      <a href="/show" class="">Show</a>
      <a href="/ask" class="">Ask</a>
      <a href="/job" class="">Jobs</a>
      <i class="fa fa-arrow-left" aria-hidden="true"
      @click="reset"
      >back</i>
      <input type="text" class="search" placeholder="search" 
        v-model="keyword"
        @keyup.enter="search">
      <a href="https://github.com/Youzhigang/" target="_blank" class="github">
      
        Built with Vue.js
      </a>
    </div>
    
  </div>
</template>


<script>
    import '../styles/header.styl';
    import {mapActions} from 'vuex';


    export default {
        name: 'top-header',
        data(){
          return{
            keyword:"",
          }
        },
        methods:{
          search(){
            console.log(this.keyword)
            if (this.keyword.trim().length!=0){
              this.$store.dispatch("START_SEARCH",this.keyword);
              this.keyword="";
            }else{
              this.$store.dispatch("START_RESET");
            }
          },
          
           ...mapActions({
          reset: 'START_RESET' 
        })
        }
    }
</script>

<style scoped>

</style>