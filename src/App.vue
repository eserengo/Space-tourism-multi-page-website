<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/destination">Destination</RouterLink>
      <RouterLink to="/crew">Crew</RouterLink>
      <RouterLink to="/technology">Technology</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss">
  @import "main.scss";
</style>
