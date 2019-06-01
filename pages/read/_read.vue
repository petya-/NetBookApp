<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex xs12 m12>
        <embed
          :src="bookUrl"
          type="application/pdf"
          width="100%"
          height="600px"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      bookUrl: Object
    }
  },
  async asyncData({ $axios, params }) {
    console.log(params)
    const bookData = await $axios.$get(`/content/book/${params.read}`)
    return { bookUrl: bookData.bookurl }
  }
}
</script>
