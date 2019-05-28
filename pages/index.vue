<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center" />
      <v-card class="text-xs-center">
        <v-card-title class="display-2 font-weight-thin justify-center">
          Read anywhere, at any time.
        </v-card-title>
        <v-card-text>
          <p>
            Netbook is the ultimate book recommendation system. Read books from
            anywhere, tailored to your taste and reading history.
          </p>
          <hr class="my-3" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" flat nuxt to="/register">
            Register
          </v-btn>
          <v-btn color="primary" flat nuxt to="/login">
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {}
}
</script>
