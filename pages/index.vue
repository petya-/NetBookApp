<template>
  <v-layout column align-center>
    <v-flex xs12 sm8 md6>
      <v-card class="text-xs-center">
        <!-- <v-img :src="logo" /> -->
        <v-flex xs6 offset-xs3>
          <v-card-media contain :src="logo" height="200px"> </v-card-media>
        </v-flex>
        <v-card-title class="display-1 font-weight-thin justify-center">
          Read anywhere, at any time.
        </v-card-title>
        <v-card-text class="white--text">
          <div>
            <span
              >Netbook is the ultimate book recommendation system. Read books
              from anywhere, tailored to your taste and reading history.</span
            >
          </div>
          <!-- <p>
            Netbook is the ultimate book recommendation system. Read books from
            anywhere, tailored to your taste and reading history.
          </p> -->
          <!-- <hr class="my-3" /> -->
        </v-card-text>
        <v-divider light></v-divider>
        <v-card-actions>
          <v-spacer />
          <v-btn dark nuxt to="/register">
            Register
          </v-btn>
          <v-btn dark nuxt to="/login">
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      logo: require('~/assets/logo_transparent.png')
    }
  }
}
</script>

<style>
/* .v-btn:hover {
  color: primary;
} */
</style>
