// import App from '../App.vue';
import List from '../components/List.vue';
import Main from '../components/Main.vue';



export default [{
  name:'home',
  path: "/",
  component: List
}, {
  name:'content',
  path: "/content/:id",
  component: Main
}]
