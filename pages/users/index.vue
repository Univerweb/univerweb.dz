<template>
  <main id="main">
    <div class="container">
      <h1>Users</h1>
      <div class="grid works">
        <div v-for="user in users" :key="user.id">
          <NuxtLink :to="'/users/' + user.id">
            {{ user.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    return { users: data }
  }
}
</script>
