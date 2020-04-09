<template>
  <main id="main">
    <div class="container hero">
      <h1>{{ name }}</h1>
      <NuxtLink to="/users" class="btn">List of users</NuxtLink>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  validate({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${+params.id}`
      )
      return data
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  }
}
</script>
