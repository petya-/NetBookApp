<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <Notification v-if="error" :message="error" />

              <v-form>
                <v-text-field
                  v-model="username"
                  prepend-icon="person"
                  name="username"
                  label="Username"
                  type="text"
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
              <v-btn color="primary" @click="login">Login</v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-text class="text-xs-right">
                Don't have an account?
              </v-card-text>
              <v-btn color="primary" flat nuxt to="/register">
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
import Notification from '~/components/Notification'

export default {
  components: {
    Notification
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
        this.$toast.show('Logging in...', { icon: 'fingerprint' })
        await this.$auth
          .loginWith('local', {
            data: {
              username: this.username,
              password: this.password
            }
          })
          .catch(e => {
            this.error = e
            this.$toast.error('Failed Logging In', { icon: 'error_outline' })
          })
        if (this.$auth.loggedIn) {
          this.$toast.success('Successfully Logged In', { icon: 'done' })
        }
      } catch (e) {
        this.error = e
        this.$toast.error('Username or Password wrong', { icon: 'error' })
      }
    },
    check() {
      console.log(this.$auth.loggedIn)
    },
    logout() {
      this.$toast.show('Logging out...', { icon: 'fingerprint' })
      this.$auth.logout()
    }
  }
}
</script>
