<template>
  <nav class="navbar is-light">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">Nuxt Auth</nuxt-link>
        <button
          @click="isOpen = !isOpen"
          v-bind:class="{ 'is-active': isOpen }"
          class="button navbar-burger"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div v-bind:class="{ 'is-active': isOpen }" class="navbar-menu">
        <div class="navbar-end">
          <div
            v-if="isAuthenticated"
            class="navbar-item has-dropdown is-hoverable"
          >
            <a v-if="!isOpen" class="navbar-link">
              {{ loggedInUser.username }}
            </a>
            <div class="navbar-dropdown">
              <nuxt-link class="navbar-item is-tab" to="/profile"
                >My Profile</nuxt-link
              >
              <nuxt-link
                v-if="loggedInUser.is_superuser"
                class="navbar-item is-tab"
                to="/users"
                >All users</nuxt-link
              >
              <hr class="navbar-divider" />
              <a @click="logout" class="navbar-item is-tab">Logout</a>
            </div>
          </div>
          <template v-else>
            <nuxt-link class="navbar-item is-tab" to="/register"
              >Register</nuxt-link
            >
            <nuxt-link class="navbar-item is-tab" to="/login">Log In</nuxt-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>
