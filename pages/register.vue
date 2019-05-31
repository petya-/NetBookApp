<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="#70acb1">
              <v-toolbar-title>Register</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="name"
                  color="#70acb1"
                  prepend-icon="person"
                  name="name"
                  label="Name"
                  type="text"
                  autocomplete="off"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="username"
                  color="#70acb1"
                  prepend-icon="person"
                  name="username"
                  label="Username"
                  type="text"
                  autocomplete="off"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  color="#70acb1"
                  prepend-icon="email"
                  name="email"
                  label="Email"
                  type="email"
                  class="input"
                  autocomplete="off"
                  required
                ></v-text-field>
                <v-text-field
                  id="password"
                  v-model="password"
                  color="#70acb1"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  autocomplete="off"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#70acb1" @click="register">Register</v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-text class="text-xs-right">
                Already have an account?
              </v-card-text>
              <v-btn color="#70acb1" flat nuxt to="/login">
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
export default {
  data() {
    return {
      name: '',
      username: '',
      email: '',
      password: ''
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
        this.$toast.success('Successfully signed up', {
          icon: 'done',
          duration: 10
        })

        await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })

        this.$router.push('/browse')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
