<template>
  <div class="paperbox category">
        <ul>
        
          <li @click="filter('')"><i class="fa fa-hand-pointer-o" aria-hidden="true">显示所有</i></li>
           <transition-group name="flip">
            <li v-for="(item,index) in Categories" :key="item" >
                <i @click="filter(item)" class="fa fa-tag" aria-hidden="true"> {{item}}</i>
            </li>
            </transition-group>
        </ul>
  </div>     
</template>



<script >
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'



  export default {
    name: "Category",
    
    // mounted () {
    //     this.Categories= this.$store.getters.getCategories
    // }
   
      computed: {
        Categories() {
          return Array.from(new Set(this.$store.getters.getCategories))
        }
      },
      methods: {
        ...mapActions({
          filter: 'LOAD_CATE' 
        })
      }
    
  }

</script>
<style lang="" scoped>
.flip-move {
  transition: transform 8s;
}
i{
     border-bottom: 1px gray dashed;
     transition: 0.2s;
     
}
i:hover{
   
    color:#fff;
    background-color: #000;
    cursor: pointer;

}

li{
  margin-top: 5px;
}

  .category{
    margin-top:-13.8%;
  }
</style>