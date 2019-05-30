<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap align-center>
      <v-flex>
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

      <review> </review>

      <!-- <v-layout> -->
      <v-flex xs12 sm6 offset-sm3>
        <v-card color="#70acb1">
          <v-card-title
            color="#70acb1"
            class="card-title display-2 font-weight-thin justify-center"
          >
            Reviews
          </v-card-title>
          <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
            <v-layout row wrap>
              <v-flex v-for="i in 4" :key="`3${i}`" xs6>
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
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <!-- </v-layout> -->
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
    return {}
  }
}
</script>
