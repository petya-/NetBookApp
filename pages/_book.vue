<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex xs4 md4 mb-5>
        <v-card class="text-xs-center">
          <v-card-title
            color="#70acb1"
            class="card-title display-1 font-weight-thin justify-center"
          >
            {{ book.originalTitle }}
          </v-card-title>
          <v-flex xs6 offset-xs3>
            <v-img contain :src="book.imageUrl" height="250px" />
          </v-flex>
          <v-card-text>
            <div class="text-xs-center">
              <v-rating
                v-model="book.averageRating"
                light
                color="#70acb1"
                readonly
              ></v-rating>
            </div>
            <!-- <p>
              Author
            </p> -->
          </v-card-text>
          <v-divider light></v-divider>

          <v-card-actions>
            <v-spacer />
            <v-btn color="#70acb1" flat nuxt to="/read">
              Read
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex xs5 md5 offset-sm3>
        <v-card>
          <v-toolbar color="#70acb1" dark>
            <v-toolbar-title>Reviews</v-toolbar-title>

            <v-spacer></v-spacer>
          </v-toolbar>

          <v-list two-line>
            <template v-for="(review, index) in reviews">
              <v-subheader v-if="review.header" :key="review.header">
                {{ review.header }}
              </v-subheader>

              <v-divider
                v-else-if="review.divider"
                :key="index"
                :inset="review.inset"
              ></v-divider>

              <v-list-tile v-else :key="review.title" avatar>
                <v-list-tile-avatar color="#70acb1">
                  <span class="white--text headline">{{ userInitial }}</span>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title> {{ review.name }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{
                    review.content
                  }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>

      <v-flex xs12>
        <review v-if="!hasReview" :isbn="book.isbn" :book-id="book.bookid">
        </review>
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
      reviews: [],
      userInitial: this.$auth.user.name.charAt(0),
      hasReview: Boolean
    }
  },
  async asyncData({ $axios, params }) {
    const bookData = await $axios.$get(`/content/book/${params.book}`)
    const reviewsData = await $axios.$get(`/reviews/reviews`)

    const bookReviews = reviewsData.filter(
      review => review.ISBN === bookData.isbn
    )
    return { book: bookData, reviews: bookReviews }
  },
  created() {
    this.hasReview = this.reviews.some(this.checkForReview)
  },
  methods: {
    checkForReview(review) {
      return review.authorId === this.$auth.user.id
    }
  }
}
</script>
