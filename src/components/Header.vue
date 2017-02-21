<template>
<div>
  <div class="header" :class="{scrolled: scrolled}">
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
        :class="{scrolled: scrolled}"
        v-model="keyword"
        @keyup.enter="search">
      <a href="https://github.com/Youzhigang/" target="_blank" class="github">
      
        Built with Vue.js
      </a>
    </div>
  </div>
  <div class='anchor' v-show="scrolled" >
    <i class="fa fa-arrow-circle-up fa-3x" 
    title='回到顶部' 
    aria-hidden="true"
    @click='goTop'></i>
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
            scrolled:'',
          }
        },
        created(){
          window.addEventListener('scroll', this.handleScroll);
        },
        methods:{
          goTop(){
           window.scrollTo(0,0)
          },
          search(){
            console.log(this.keyword)
            if (this.keyword.trim().length!=0){
              this.$store.dispatch("START_SEARCH",this.keyword);
              this.keyword="";
            }else{
              this.$store.dispatch("START_RESET");
            }
          },
          handleScroll(){
            this.scrolled = window.scrollY>0
            // console.log(this.scrolled)
          },
           ...mapActions({
          reset: 'START_RESET' 
        })
        }
    }
</script>

<style scoped>
.scrolled{
  opacity: 0.6;
  background-color: #000;
}

.anchor{
  position: fixed;
  right: 150px;
  bottom: 80px;
  z-index: 9999;
  color:#000;
  opacity: 0.8;
}


</style>