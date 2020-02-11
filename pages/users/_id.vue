<template>
  <section class="section">
    <div class="container">
      <h2 class="title">{{ user.username }}'s details</h2>
      <p>
        <strong>Username:</strong>
        {{ user.username }}
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
  </section>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      user: Object
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    async getUser() {
      try {
        const id = this.$route.params.id
        await this.$axios.get(`auth/users/${id}/`).then((response) => {
          if (response.status === 200) {
            this.user = response.data
          }
        })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
