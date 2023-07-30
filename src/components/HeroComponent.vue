<template>
  <v-container class="pt-15">
    <v-row>
      <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center">
        <div class="text-left">
          <h2>Design your own <span class="italic-text">frame</span></h2>
        </div>
        <div class="text-left">
          <p>
            Already own something that needs framing? Or have a really special
            digital photo that deserves a unique frame? Then this is the option
            for you! Fully customise everything - styles, sizes,
            personalisation. Handmade by experts using premium quality
            materials. Order from the comfort of your home, with free delivery
            and art 'pick up' service.
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <img src="./../assets/frontpic.png" alt="" class="contain fill-height">
        <!-- <v-img src="./../assets/frontpic.png" alt="" class="contain fill-height"></v-img> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HeroComponent",
};
</script>

<style scoped>
.italic-text {
  font-style: italic;
}
</style>
