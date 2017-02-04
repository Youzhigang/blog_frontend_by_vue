<template>
    <div class="handler" 
    draggable='true' 
    :style="{top:position.y+'px',left:position.x+'px'}"
    @dragstart='drag'
    @drop='drop' 
    @dragover='allowDrop'
    @dragend="end" >
         <span class="fa fa-reply back" @click="back" title="后退"></span>
         <span class="fa fa-home home" @click="home" aria-hidden="true"  title="主页"></span>
         <span class="fa fa-share forward" @click="forward" title="前进"></span>
         <span class="fa fa-repeat repeat" @click="repeat" title="刷新"></span>
    </div>
</template>



<script>   
import {mapActions} from 'vuex'

    export default{
        name:"handler",
        data(){
            return{
                flag:false,
                position:{
                    x:700,y:500
                }
            }
        },
        methods: {
            forward(){
              window.history.go(1);
            //   this.$store.dispatch("START_RESET")
            },
            back(){
              this.$router.go(-1)
            //   this.$store.dispatch("START_RESET")
            },
            repeat(){
              this.$router.go(0)
            },
            home(){
                this.$router.push({ path: '/'})
                // this.$store.dispatch("START_RESET")
            },
            drag(event){
                // console.log(event)
                // dom = event.currentTarget
                this.flag=true;
            },
            drop(event){
                // console.log(event)
                event.preventDefault();
                // event.target.appendChild(dom);
            },
            allowDrop(event){
                event.preventDefault();
            },
            end(e){
                e.stopPropagation();
                console.log(e);
                this.position.x=event.clientX;
                this.position.y=event.clientY;
                if(this.position.x>1150){
                        this.position.x=1150;
                    }
                if(this.position.x<200){
                    this.position.x=200;
                }
                 if(this.position.y>500){
                        this.position.y=500;
                    }
                 if(this.position.y<100){
                    this.position.y=100;
                }
            },
           
            
        },

    }


</script>


<style scoped>



.handler{
    
    width:30px;
    height: 30px;
    font-size: 1.3rem;
    position: fixed;
    right: 10%;
    bottom: 10%;
    z-index: 99999;
    color:#ff6600;
    opacity: 0.8;
    user-select:none;
}


.home{
    border: 1px #ff6600 solid;
    padding: 5px;
}


.back,.forward,.repeat{
    opacity: 0
}
.back{
    transform: translate3d(30px,30px,0)
}

.forward{
    transform: translate3d(-25px,-25px,0)
}
.repeat{
    transform:translate3d(2px,-25px,0)
}

.handler:hover .back {
    transition: 0.5s ease-in-out;
    opacity:1;
    transform: translate3d(-20px,30px,0)
}
.handler:hover .forward{
    transition: 0.5s ;
    opacity:1;
    transform: translate3d(30px,-25px,0);
}

.handler:hover .repeat{
    transition: 0.5s ;
    opacity:1;
    transform: translate3d(2px,-80px,0)
}

</style>