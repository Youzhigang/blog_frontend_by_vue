<template>
    <pageNav>
        <page name="product detail" link="detail" active="true">
            <h4>product detail123</h4>
        </page>
        <page name="seller info" link="info">
            <h4>seller info456</h4>
        </page>
        123456
        <Register></Register>
        <Drag></Drag>
    </pageNav>
</template>


<script>
    import pageNav from './components/A.vue'
    import page from './components/B.vue'
    import Register from './components/Register.vue'
    import Drag from "./components/dragable.vue"


    export default{
        name:"App",
        components:{
            pageNav,
            page,
            Register,
            Drag
        }
    }
</script>