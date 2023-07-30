<template>

<v-app-bar  app color="white" light elevation="0.5" elevate-on-scroll>
    
  <v-list class="d-flex">
      <v-list-item link v-for="(menu,index) in menus" :key="index" :to="menu.route">
        <v-list-item-title>
          {{ menu.title }}   <v-spacer />
        </v-list-item-title>
        <!-- <v-spacer /> -->
      </v-list-item>
      <!-- <v-spacer /> -->
    </v-list>
    <v-toolbar-title>
      Hang
    </v-toolbar-title>

    <!-- <v-toolbar-title>
    <a class="flex-shrink-0 flex items-center hang_logo"><img src="./../assets/hanglogo.png" class="w-30 h-16 pointer-events-none"></a>
  
  </v-toolbar-title> -->
    <v-list-item>
        SUPPORT
        </v-list-item>
      <v-btn text>
        <v-spacer />
        <svg-icon type="mdi" :path="mdiStore"></svg-icon>
      </v-btn>
      <v-btn text left>
        <svg-icon type="mdi" :path="mdiAccountCircleOutline"></svg-icon>
      </v-btn>

  </v-app-bar>

</template>

<script>
export default {
    name: "HeaderComponent",
    data(){
    return{
      menus:[
        {title:'START FARMING', route:''},
        {title:'HOW IT WORKS', route:''},
      ]
    }
  }

}
</script>

<style>

</style>