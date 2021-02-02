<template>
  <nav class="navbar">
    <h3>
      Freelance &emsp; {{date}}
    </h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Все задачи</router-link>
      </li>
      <li>
        <router-link to="/new-task">Создать</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  setup(){
    const date = new Date().toLocaleDateString()
    return {
      date
    }
  }

}
</script>

<style scoped>

</style>