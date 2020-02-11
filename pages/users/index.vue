<template>
  <section class="section">
    <div class="container">
      <h2 class="title">All users</h2>
      <div v-for="user in users" :key="user.id" class="content">
        <p>
          <nuxt-link :to="{ name: 'users-id', params: { id: user.id } }">
            <strong>Username: </strong>
            {{ user.username }}
          </nuxt-link>
        </p>
        <p>
          <strong>Role:</strong>
          {{ user.role }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ user.email }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  computed: {
    ...mapGetters(['users'])
  },
  created() {
    this.$store.dispatch('getUsers')
  }
}
</script>
