<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="(book, index) in books" :key="index" xs3>
        <v-card class="text-xs-center">
          <v-flex xs6 offset-xs3>
            <v-img contain :src="book.imageUrl" height="250px" />
          </v-flex>
          <v-card-actions class="justify-center">
            <v-btn color="#70acb1" flat nuxt :to="`/${book.bookid}`">
              View
            </v-btn>
            <v-btn color="#70acb1" flat nuxt :to="`/bookmark/${book.id}`">
              Bookmark
            </v-btn>
            <v-btn color="#70acb1" flat nuxt to="/read">
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
  middleware: 'authenticated',
  data() {
    return {
      books: []
    }
  },
  async mounted() {
    let { data } = await this.$axios.get('/content/allbooks')
    this.books = data
    console.log(this.books)
  }
}
</script>

<style scoped>
.card-title {
  color: #70acb1;
}
</style>
