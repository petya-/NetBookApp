<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="i in 4" :key="`3${i}`" xs3>
        <v-card class="text-xs-center" xs6>
          <v-card-title class="display-2 font-weight-thin justify-center">
            Book title
          </v-card-title>
          <v-card-text>
            <p>
              Book description
            </p>
            <p>
              Author
            </p>
            <p>
              Rating
            </p>
            <hr class="my-3" />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" flat nuxt to="/register">
              Bookmark
            </v-btn>
            <v-btn color="primary" flat nuxt to="/login">
              Read
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  // Access only if user is authenticated
  // middleware: 'authenticated'
}
</script>
