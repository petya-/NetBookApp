<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="book in $store.state.books" :key="book" xs3>
        <v-card class="text-xs-center" xs6>
          <v-card-title
            color="#70acb1"
            class="card-title display-2 font-weight-thin justify-center"
          >
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
            <v-btn color="#70acb1" flat nuxt :to="`/book/${book.isbn}`">
              View
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
  async fetch({ store }) {
    let { data } = await store.$axios.get('/content/allbooks')
    console.log(data)
    store.commit('setBooks', data)
  },
  methods: {
    // async fetchRecommendedBooks() {
    //   let { data } = await this.$axios.get('/content/allbooks')
    //   console.log(data)
    // }
  }
}
</script>

<style scoped>
.card-title {
  color: #70acb1;
}
</style>
