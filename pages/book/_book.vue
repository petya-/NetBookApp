<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex xs4 md4 mb-5>
        <v-card class="text-xs-center">
          <v-card-title
            color="#70acb1"
            class="card-title display-1 font-weight-thin justify-center"
          >
            {{ book.internationaltitle }}
            <v-flex xs12>
              <span class="grey--text">by {{ authorNames }}</span>
            </v-flex>
          </v-card-title>
          <v-card-text>
            <div class="text-xs-center">
              <v-rating
                v-model="book.averagerating"
                class="ratings"
                light
                color="#70acb1"
                readonly
              ></v-rating>
            </div>
          </v-card-text>
          <v-flex xs6 offset-xs3 mb-5>
            <v-img contain :src="book.imageUrl" height="250px" />
          </v-flex>

          <v-divider light></v-divider>

          <v-card-actions>
            <v-spacer />
            <v-btn color="#70acb1" flat nuxt :to="`/read/${book.id}`">
              Read
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex v-if="!hasReview" xs5 md5 offset-sm3>
        <review :isbn="book.isbn" :book-id="book.id"> </review>
      </v-flex>

      <v-flex xs12>
        <v-card>
          <v-toolbar color="#70acb1" dark>
            <v-toolbar-title>Reviews</v-toolbar-title>

            <v-spacer></v-spacer>
          </v-toolbar>

          <v-list two-line>
            <template v-if="reviews.length < 1">
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    There are no reviews yet
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <template v-for="(review, index) in reviews">
              <v-divider v-if="index > 0" :key="index"></v-divider>

              <v-list-tile :key="review.title" avatar>
                <v-list-tile-avatar color="#70acb1">
                  <span class="white--text headline">{{ userInitial }}</span>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title> {{ review.name }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{
                    review.content
                  }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action
                  v-if="hasReview && isReviewOwner()._id == review._id"
                >
                  <v-icon color="#70acb1" @click="deleteReview(review)"
                    >delete</v-icon
                  >
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import review from '~/components/review.vue'

export default {
  components: {
    review
  },
  data() {
    return {
      book: Object,
      reviews: Array,
      userInitial: this.$auth.user.name.charAt(0),
      hasReview: Boolean,
      authors: Array,
      authorNames: String
    }
  },
  async asyncData({ $axios, params }) {
    const bookData = await $axios.$get(`/content/book/${params.book}`)
    const reviewsData = await $axios.$get(`/reviews/reviews`)
    const bookAuthors = await $axios.$get(`content/book/authors/${params.book}`)

    const bookReviews = reviewsData.filter(
      review => review.ISBN === bookData.isbn
    )

    return { book: bookData, reviews: bookReviews, authors: bookAuthors }
  },
  created() {
    this.hasReview = this.reviews.some(this.checkForReview)
    this.authorNames = this.authors.map(author => author.fullName)
    this.authorNames = this.authorNames.join(' and ')
  },
  methods: {
    checkForReview(review) {
      return review.authorId === this.$auth.user.id
    },
    isReviewOwner() {
      if (this.hasReview)
        return this.reviews.find(
          review => review.authorId === this.$auth.user.id
        )
    },
    async deleteReview(review) {
      await this.$axios.delete(`/reviews/reviews/${review._id}`)
      window.location.reload(true)
    }
  }
}
</script>
<style scoped>
.empty-icon {
  color: red;
}
</style>
