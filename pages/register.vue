<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Register!</h2>

          <Notification :message="error" v-if="error" />

          <form @submit.prevent="register" method="post">
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input
                  v-model="username"
                  type="text"
                  class="input"
                  name="username"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Firstname</label>
              <div class="control">
                <input
                  v-model="firstname"
                  type="text"
                  class="input"
                  name="firstname"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Lastname</label>
              <div class="control">
                <input
                  v-model="lastname"
                  type="text"
                  class="input"
                  name="lastname"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  v-model="email"
                  type="email"
                  class="input"
                  name="email"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Role</label>
              <div class="control">
                <input
                  v-model="role"
                  type="text"
                  class="input"
                  name="role"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <textarea
                  v-model="description"
                  type="text"
                  class="textarea"
                  name="role"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  v-model="password"
                  type="password"
                  class="input"
                  name="password"
                  required
                />
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">
                Register
              </button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            Already got an account? <nuxt-link to="/login">Login</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification'

export default {
  middleware: 'guest',
  components: {
    Notification
  },

  data() {
    return {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      role: '',
      description: '',
      error: null
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('auth/users/', {
          username: this.username,
          first_name: this.firstname,
          last_name: this.lastname,
          email: this.email,
          role: this.role,
          description: this.description,
          password: this.password
        })

        await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.detail
        // eslint-disable-next-line no-console
        console.log(e.detail)
      }
    }
  }
}
</script>
