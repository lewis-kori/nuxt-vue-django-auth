<template>
  <section class="section">
    <div class="container">
      <h2 class="title">All users</h2>
      <div class="columns is-multiline is-mobile">
        <Profile v-for="user in users" :key="user.id" :user="user" />
      </div>
    </div>
  </section>
</template>

<script>
import Profile from '@/components/Profile'
import { mapGetters } from 'vuex'

export default {
  middleware: ['auth', 'admin'],
  components: {
    Profile
  },
  computed: {
    ...mapGetters(['users'])
  },
  created() {
    this.$store.dispatch('getUsers')
  }
}
</script>
