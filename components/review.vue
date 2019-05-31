<template>
  <v-card>
    <v-toolbar card color="#70acb1" dark>
      <v-toolbar-title>My review</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="title"
          label="Title"
          full-width
          hide-details
          hide-no-data
          hide-selected
          multiple
          single-line
        ></v-text-field>
        <v-divider></v-divider>
        <v-text-field
          v-model="content"
          color="cyan darken"
          placeholder="This book was..."
          multiple
        >
        </v-text-field>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="#70acb1" @click="addReview">Add review</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    isbn: {
      type: String,
      default: ''
    },
    bookId: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    async addReview() {
      try {
        await this.$axios.post('reviews/reviews', {
          name: this.title,
          content: this.content,
          ISBN: this.isbn,
          authorId: this.$auth.user.id
        })
      } catch (e) {
        this.$toast.error('Could not post review', {
          icon: 'error_outline',
          duration: 1000
        })
      }
      window.location.reload(true)
    }
  }
}
</script>
