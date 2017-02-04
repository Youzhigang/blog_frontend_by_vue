import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';



Vue.use(vuex);


const store = new vuex.Store({
    state:{
        checked:false,
        articles:{},
        result:null,
    },
   
    mutations:{
        SET_ARITCLES: (state, payload)=> {
            state.articles = payload.data;
            window.sessionStorage.setItem('temp_articles',JSON.stringify(state.articles));
            console.log("mutations articles");
            console.log(state.detail);
            
        },
        SET_DETAIL:(state,payload)=>{
            window.sessionStorage.setItem('temp_detail',JSON.stringify(payload.data));
            state.detail=JSON.parse(window.sessionStorage.getItem("temp_detail"));
            console.log("mutations detail");
            console.log(state.detail);
            
        },
        SET_CATE:(state,payload)=>{
            console.log('----'+payload)
            if(payload !== ""){
                state.result=state.articles.results?
                state.articles.results.filter(item => item.category==payload):[]
            }else{ //如果不保存数据,查询为空就会清空数据,此时可以返回数据
                state.result=JSON.parse(window.sessionStorage.getItem("temp_articles")).results
            }
        },
        SET_TIME:(state,payload)=>{
            console.log('++++'+payload)
            if (payload!==""){
                state.result=state.articles.results?
                state.articles.results.filter(item => item.date_time.indexOf(payload)!=-1):[]
            }else{
                state.result=JSON.parse(window.sessionStorage.getItem("temp_articles")).results
            }
        },
        SEARCH:(state,payload)=>{
            console.log('****'+payload)
            state.result=state.articles.results.filter(item =>item.category.toUpperCase().indexOf(payload.toUpperCase())!=-1)
            if(!state.result){
                state.result=state.articles.results
            }
            console.log(state.result)
        },
        RESET:state=>{
            state.result=state.articles.results
        },
        SHUFFLE:state=>{
            state.articles.results=_.shuffle(state.articles.results)
        }
        
    },

    actions:{
        LOAD_ARTICLES:(context)=>{
            axios.get("http://localhost:8000/articles/")
            .then((res)=>{
                context.commit("SET_ARITCLES",res)
            }).catch(err=>console.log(err))
        },
        // LOAD_DETAIL:(context,id)=>{
        //     axios.get("http://localhost:8000/articles/"+id+"/")
        //     .then((res)=>{
        //         context.commit("SET_DETAIL",res)
        //         console.log("action,detail"+id);
        //     }).catch(err=>console.log(err))
        // },
        LOAD_DETAIL({commit},id){
            axios.get("http://localhost:8000/articles/"+id+"/")
            .then(res =>{
                commit("SET_DETAIL",res);
                console.log("data:"+res.data);
            })
        },
        LOAD_CATE:({commit},payload)=>{
            commit("SET_CATE",payload)
        },
        LOAD_TIME:({commit},payload)=>{
            commit("SET_TIME",payload)
        },
        START_SEARCH:({commit},payload)=>{
            commit("SEARCH",payload)
        },
        START_RESET:({commit})=>{
            commit("RESET")
        }
    },

    getters:{
        getCount:state=>{
            return state.articles.count
        },
        getCategories:state=>{
            return state.articles.results?
            state.articles.results.map(item =>item.category):[]
        },
        getPosttimes:state=>{
            return state.articles.results?
            state.articles.results.map(item =>item.date_time.substr(0,10)):[]
        },
        getResult:state=>{
            return state.result
        },
        getIDList:state=>{
            return state.articles.results?
            state.articles.results.map(item =>item.id):[]
        }
    },
    modules:{

    }
})


export default store;

// axios.get("http://localhost:8000/articles/")
    // .then(res => this.data=res.data)
    // .catch(err =>console.log(err))
    // fetch("http://localhost:8000/articles/",{
    //             method: "GET",
    //             // mode: "no-cors",
    //             //部署需要改为no-cors
    //             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    //         })
    //         .then(res => console.log(res))