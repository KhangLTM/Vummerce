<template>
<div class="bg-gray-100">
    <Header/>
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
    @import url('https://fonts.googleapis.com/css2?family=Shippori+Antique&display=swap');
    *{
            font-family: 'Shippori Antique', sans-serif;
            scroll-behavior: smooth;
    
    }
    html::-webkit-scrollbar {
    width: 6px;
  }

html::-webkit-scrollbar-track {
    background: rgb(196, 194, 194);
    border-radius: 10px;
}

html::-webkit-scrollbar-thumb {
    background: rgb(136, 135, 135);
    border-radius: 10px;
  }

html::-webkit-scrollbar-thumb:hover {
    background: rgb(100, 100, 100);
    border-radius: 10px;
  }

html::-webkit-scrollbar-thumb:active {
    background: rgb(68, 68, 68);
    border-radius: 10px;
  }

</style>    
