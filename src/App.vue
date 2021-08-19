<template>
<div class="bg-gray-100">
    <Header />
    <router-view></router-view>
    <Footer />
</div>
</template>

<script>
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'
export default {
    components: {
        Header,
        Footer
    },

}
</script>

<style>

</style>    
