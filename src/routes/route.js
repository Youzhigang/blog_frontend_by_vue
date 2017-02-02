// import App from '../App.vue';
import List from '../components/List.vue';
import Main from '../components/Main.vue';



export default [{
  path: "/",
  component: List
}, {
  path: "/content/:id",
  component: Main
}]
