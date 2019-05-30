<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list v-if="$auth.loggedIn">
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon v-if="$auth.loggedIn" @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn v-if="$auth.loggedIn" color="#70acb1" flat @click="logout">
        Logout
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Books',
          to: '/browse'
        },
        {
          icon: 'bubble_chart',
          title: 'My favorites',
          to: '/login'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Netbook'
    }
  },
  methods: {
    async logout() {
      try {
        await this.$auth.logout()
        if (!this.$auth.loggedIn) {
          this.$toast.show('You have been logged out', {
            icon: 'check',
            duration: 1000
          })
        }
      } catch (e) {
        this.error = e
        this.$toast.error('Failed logging out', {
          icon: 'error_outline',
          duration: 1000
        })
      }
    }
  }
}
</script>
