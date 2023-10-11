<script>
export default {
  name: "App",
  data() {
    return {
      media: { Boolean },
      isActive: false,
    }
  },

  methods: {
    setMedia() {
      let timer;
      window.clearTimeout(timer);
      timer = window.setTimeout(
        window.matchMedia("(width<=576px)").matches
          ? this.media = true
          : this.media = false
        , 500);
    },
    toggleIsActive() {
      this.isActive = !this.isActive;
    },
  },

  mounted() {
    this.setMedia();
    window.addEventListener("resize", () => this.setMedia());
  },
  unmounted() {
    window.removeEventListener("resize", () => this.setMedia());
  },
}
</script>

<template>
  <header>
    <img src="./assets/shared/logo.svg" alt="logo" />

    <nav v-if="media">
      <section v-if="isActive">
        <img src="./assets/shared/icon-close.svg" alt="close icon" @click="toggleIsActive"/>
        <router-link to="/" @click="toggleIsActive">01 Home</router-link> |
        <router-link to="/destination" @click="toggleIsActive">02 Destination</router-link> |
        <router-link to="/crew" @click="toggleIsActive">03 Crew</router-link> |
        <router-link to="/technology" @click="toggleIsActive">04 Technology</router-link>
      </section>
      <img src="./assets/shared/icon-hamburger.svg" alt="hamburger icon" v-else @click="toggleIsActive"/>
    </nav>

    <nav v-else>
      <router-link to="/">01 Home</router-link> |
      <router-link to="/destination">02 Destination</router-link> |
      <router-link to="/crew">03 Crew</router-link> |
      <router-link to="/technology">04 Technology</router-link>
    </nav>
  </header>

  <router-view></router-view>
</template>

<style lang="scss">
  @import "main.scss";
</style>
