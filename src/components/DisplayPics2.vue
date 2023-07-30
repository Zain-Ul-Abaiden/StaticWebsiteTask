<template>
    <v-container class="pt-15">
      <v-row>
        <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center">
          <div class="text-left">
            <h2>Standard sizes & gift frames</h2>
          </div>
          <div class="text-left">
            <p>
                Cost effective readymade sizes. Choose a frame style then upload your photo and we'll print, build, and dispatch your frame the next day. Ideal for quick gifts.
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <img src="./../assets/standard.png" alt="" class="contain fill-height">
          <!-- <v-img src="./../assets/frontpic.png" alt="" class="contain fill-height"></v-img> -->
        </v-col>
      </v-row>
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
<v-card-title>Small Gift Frame in Brancaster (P)</v-card-title>
</v-card-item>

<v-card-text>
<div>20x30cm textured bare wood frame</div>
</v-card-text>

</v-card>
</v-col>
</v-row>
<v-row class= "justify-center">
<div >
<v-btn color="yellow" rounded>SHOP STANDARD FRAME</v-btn>
</div>
</v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "DisplayPics2",
  };
  </script>
  
  <style scoped>

  </style>
  