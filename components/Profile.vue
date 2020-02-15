<template>
  <div class="column is-one-quarter">
    <div class="box card">
      <nuxt-link :to="{ name: 'users-id', params: { id: user.id } }">
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
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    user: {
      type: Object
    }
  }
}
</script>
