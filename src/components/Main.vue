<template>
  <div class="main" tabindex="0" v-focus 
  @keyup.enter="test" 
  @keydown.left="previous_page"
  @keydown.right.prevent="next_page">
   
    <template v-if="loading">
        <h2><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></h2>
    </template >
    <template v-else>
         <section >
            <h2 class="title"> {{data.title}}</h2> 
            <h4  class ="page">
              <a @click="previous_page">Previous</a>
              <a @click="next_page">Next</a>
            </h4>
            <div class="word" v-html="markdown"></div>
         </section>
    </template>
     
  </div>
</template>
<script>
  import '../assets/dracula.css'
  import marked from 'marked'
  import axios from 'axios'
  import {mapGetters} from 'vuex'

  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
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
        loading: true,
        data: {},
        id: null,
      }
    },

    created() {
      this.id = this.$route.params.id;
     
      this.fetchData(this.id);
    },
    mounted() {
      // this.data = this.$store.state.detail;//
      // window.location.reload(0);

    },
    computed: {
      markdown() {
          if(!this.loading){
            return marked(this.data.content)
          }
          return '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>'
      }
    },
    watch: {
      // '$route': 'fetchData'
    },
    methods: {
      test(){
        console.log(1213)
      },
      fetchData(id){
        axios.get("http://localhost:8000/articles/" + id + "/")
        .then(res => {
          this.loading = false;
          this.data = res.data;
          console.log(this.data)
        })
          
      },
      ...mapGetters([
        "getIDList"
      ]),
      previous_page(){
        // console.log(123)
        let ids = this.getIDList();
        // console.log(ids)
        let index=ids.indexOf(~~this.id)
        // console.log(index)
        if (index ==0 ){
          this.id = ids[ids.length-1]
        }else{
          this.id = ids[index -1]
        }
        console.log(this.id)
        this.$router.push({ path: '/content/'+(this.id)})
        this.fetchData(this.id)
      },
      next_page(){
         let ids = this.getIDList();
         let index=ids.indexOf(~~this.id);
         if (index ==(ids.length-1)){
          this.id = ids[0]
        }else{
          this.id = ids[index + 1]
        }
        this.$router.push({ path: '/content/'+(this.id)})
        this.fetchData(this.id)
      }
    }

  }

</script>

<style lang="" scoped>
.main:focus{
  
  outline: none;
}
.page{
  position: absolute;
  top:100px;
  right: 200px;
  font-size: 1.2rem;
  color: sandybrown;
}
.page a{
  text-decoration: none;
}

.page a:hover{
  font-style: italic;
  transition: 0.5s;
}
*{
  line-height:1.5rem;
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
    width: 50rem;
    padding: 30px;
    font-size: 15px;
  }
  
  

  .title{
      color: wheat;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px wheat solid;
  }
  .word{
color: #999;
  }
  .word code {
     
      word-break: break-all;
      word-wrap: break-word; 
      white-space: pre-wrap;
  }
</style>
