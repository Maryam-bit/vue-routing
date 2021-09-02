<template>
  <div id="app">

    <Navbar />
    <br><br>
    <button @click="redirect">Redirect</button>
    <button @click="goBack">Go Back</button>
    <button @click="goForward">Go Forward</button>
    <router-view />
    <!-- programatic navigation  -->

    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components:{
    Navbar,
    Footer
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    },
    redirect(){
      this.$router.push({name: "Home"})
    },
    goForward(){
      this.$router.go(1)
    }
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button{
  margin: 0 10px !important;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
