<template>
<v-app>

  <!-- <Navbar /> -->
  <HeaderComponent />

  <v-main>
   
<!-- Hero Section  -->
<HeroComponent />

<!-- Display Pics -->
<DisplayPics />

<!-- Display pics with text -->
<DisplayPics2 />

<!-- Above Header Data -->
<AboveHeader />

<!-- Footer -->
<FooterComponent />

</v-main>
</v-app>

  <!-- <router-view/> -->
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import HeroComponent from "./components/HeroComponent.vue";
import DisplayPics from "./components/DisplayPics.vue";
import DisplayPics2 from "./components/DisplayPics2.vue";
import AboveHeader from "./components/AboveHeader.vue"
import FooterComponent from "./components/FooterComponent.vue";



export default {
  name: 'App',
  components: { FooterComponent, AboveHeader, DisplayPics2, DisplayPics, HeroComponent, HeaderComponent},
  data(){
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
