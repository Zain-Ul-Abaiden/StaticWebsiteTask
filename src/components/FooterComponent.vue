<template>
    <v-footer class="d-flex">
      <v-container class="pt-15 black-container text-white" >
        <v-row>
          <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center">
            <div>
              <h2>hang</h2>
            </div>
            <v-spacer />
          </v-col>

          <v-col cols="12" md="3">
            <div class="flex flex-column">
              <ul>START FRAMING</ul>
              <ul>Browse all frames</ul>
              <ul>Upload a photo</ul>
              <ul>Frame an original</ul>
            </div>
          </v-col>
  
          <v-col cols="12" md="3">
            <div class="flex flex-column">
              <ul>HOW IT WORKS</ul>
              <ul>Materials & sustainability</ul>
              <ul>Pricing</ul>
              <ul>Our Story</ul>
            </div>
          </v-col>
  
          <v-col cols="12" md="3">
            <div class="flex flex-column">
              <ul>SUPPORT</ul>
              <ul>Our Services</ul>
              <ul>Inspiration</ul>
              <ul>FAQs</ul>
              <ul>Contact</ul>
            </div>
          </v-col>
  
          <v-col cols="12" md="3">
            <div class="flex flex-column">
              <ul>SIGN UP FOR EMAIL UPDATES</ul>
              <div>
                <v-form @submit.prevent>
                  <v-text-field v-model="Email" :rules="rules" label="Enter your Email"></v-text-field>
                  <v-btn type="submit" block class="mt-2">Submit</v-btn>
                </v-form>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="pt-15 justify-center white-text">
        <v-col>
          <v-container class="white"> <!-- Add white background here -->
            <div class="mt-10">
              <v-divider></v-divider>
              <v-subheader>
                ©  Copyright Hang Framing Ltd.. All Rights Reserved {{ new Date().getFullYear() }} - <strong>Hang</strong>
                <v-spacer />
                <strong>Designed by Zain Ul Abaiden</strong>
              </v-subheader>
            </div>
          </v-container>
        </v-col>
      </v-row>

      </v-container>

    </v-footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
    data() {
      return {
        Email: "",
        rules: [],
      };
    },
  };
  </script>
  
  <style scoped>
  .black-container {
    background-color: black;
  }
  
  .flex-column ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: white;
    cursor: pointer;
  }
  
  .flex-column ul:hover {
    text-decoration: underline;
  }
  </style>
  