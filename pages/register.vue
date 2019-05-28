<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Register</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <Notification v-if="error" :message="error" />

              <v-form>
                <v-text-field
                  v-model="name"
                  prepend-icon="person"
                  name="name"
                  label="Name"
                  type="text"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="username"
                  prepend-icon="person"
                  name="username"
                  label="Username"
                  type="text"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  prepend-icon="email"
                  name="email"
                  label="Email"
                  type="email"
                  class="input"
                  required
                ></v-text-field>
                <v-text-field
                  id="password"
                  v-model="password"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="register">Register</v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-text class="text-xs-right">
                Already have an account?
              </v-card-text>
              <v-btn color="primary" flat nuxt to="/login">
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Notification from '~/components/Notification'

export default {
  components: {
    Notification
  },

  data() {
    return {
      name: '',
      username: '',
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('auth/signup', {
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password,
          role: ['user', 'pm']
        })

        await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })

        this.$router.push('/browse')
      } catch (e) {
        this.eerror = e
        console.log(e)
      }
    }
  }
}
</script>
