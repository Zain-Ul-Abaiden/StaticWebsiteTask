<template>
    <v-container class="my-15">
        <v-row >

            <v-col lg="3" v-for="pic in 4" :key="pic">
            <v-card
        class="mx-auto my-12"
        max-width="374" >
    
        <v-img
          cover
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        ></v-img>
    
        <v-card-item>
          <v-card-title>Claude</v-card-title>
        </v-card-item>
    
        <v-card-text>
          <div>blue washed scope frame</div>
        </v-card-text>

      </v-card>
    </v-col>
        </v-row>
    <v-row class= "justify-center">
        <div >
            <v-btn color="yellow" rounded>DESIGN A CUSTOM FRAME</v-btn>
        </div>
    </v-row>
    </v-container>
    
    </template>
    
    <script>
    
    export default {
        name: "DisplayPics"
    }
    </script>
    
    <style scoped>
    
    </style>

