<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-half is-offset-3">
          <div class="box card">
            <div class="card-image">
              <figure class="image is-5by3">
                <img
                  v-if="user.image"
                  :src="user.image"
                  :alt="user.username + '_photo'"
                />
                <img
                  v-else
                  src="https://picsum.photos/500/500"
                  alt="Placeholder image"
                />
              </figure>
              <div class="card-content">
                <div class="content">
                  <table class="table is-striped is-fullwidth">
                    <tbody>
                      <tr v-if="user.first_name">
                        <th>First Name</th>
                        <td>{{ user.first_name }}</td>
                      </tr>
                      <tr v-if="user.last_name">
                        <th>Last Name</th>
                        <td>{{ user.first_name }}</td>
                      </tr>
                      <tr v-if="user.email">
                        <th>Email</th>
                        <td>{{ user.email }}</td>
                      </tr>
                      <tr v-if="user.description">
                        <th>Description</th>
                        <td>{{ user.description }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <footer
              v-if="loggedInUser.username === user.username"
              class="card-footer"
            >
              <button class="button is-primary card-footer-item">Edit</button>
              <button class="button is-danger card-footer-item">Delete</button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: ['auth', 'admin'],
  data() {
    return {
      user: Object
    }
  },
  computed: {
    ...mapGetters(['loggedInUser'])
  },
  created() {
    this.getUser()
  },
  methods: {
    async getUser() {
      const id = this.$route.params.id
      try {
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
