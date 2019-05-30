<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="#70acb1">
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="username"
                  color="#70acb1"
                  prepend-icon="person"
                  name="username"
                  label="Username"
                  type="text"
                  autocomplete="off"
                ></v-text-field>
                <v-text-field
                  id="password"
                  v-model="password"
                  color="#70acb1"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#70acb1" @click="login">Login</v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-text class="text-xs-right">
                Don't have an account?
              </v-card-text>
              <v-btn color="#70acb1" flat nuxt to="/register">
                Register
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
// import Notification from '~/components/Notification'

export default {
  components: {
    // Notification
  },
  data() {
    return {
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })

        if (this.$auth.loggedIn) {
          this.$toast.show('Authenthicated', {
            icon: 'fingerprint',
            duration: 1000
          })
        }
        this.$router.push('/browse')
      } catch (e) {
        this.error = e
        this.$toast.error('Failed Logging In', {
          icon: 'error_outline',
          duration: 1000
        })
      }
    }
  }
}
</script>

<style></style>
