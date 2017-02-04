<template>
  <div class="main">
    
    <template v-if="loading">
        <h2><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></h2>
    </template >
    <template v-else>
         
         <section >
            <h2 class="title"> {{title}}</h2>
            <div class="word" v-html="markdown"></div>
         </section>
    </template>
  </div>
</template>
<script>
  import '../assets/dracula.css'
  import marked from 'marked'
  import axios from 'axios'
  import store from '../vuex/stores'

  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return require('highlight.js').highlightAuto(code).value;
    }
  });

  export default {
    name: "main",
    data() {
      return {
        // loading: true,
        data: {},
        id: null,
      }
    },

    created() {
      this.id = this.$route.params.id;
      // axios.get("http://localhost:8000/articles/" + this.id + "/")
      //   .then(res => {
      //     this.loading = false;
      //     this.data = res.data;
      //     console.log(this.data)
      //   })
      console.log("main id"+this.id);
      this.$store.dispatch("LOAD_DETAIL", this.id);
    },
    mounted() {
      // this.data = this.$store.state.detail;//
      // window.location.reload(0);

    },
    computed: {
      title(){
        return this.$store.state.detail.title
      },
      loading(){
        return this.$store.state.loading
      },
      markdown() {
          if(!this.$store.state.loading){
            return marked(this.$store.state.detail.content)
          }
          return '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>'
      }
    },
    watch: {
      
    },
    methods: {
      // fetchData(){
      //     this.$store.dispatch("LOAD_DETAIL",this.id)
      // }
    }

  }

</script>

<style lang="" scoped>
*{
  line-height:1.5rem;
  color: #999;
  word-break: break-all;
  word-wrap: break-word; 
  white-space: pre-wrap;
}
span{
  width: 50px;
}
  .main {
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
  
  section {
    text-align: left;
    background-color: #012;
    width: 90%;
    padding: 30px;
    font-size: 15px;
  }
  
  

  .title{
      color: wheat;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px wheat solid;
  }
  .word code {
      word-break: break-all;
      word-wrap: break-word; 
      white-space: pre-wrap;
  }
</style>
