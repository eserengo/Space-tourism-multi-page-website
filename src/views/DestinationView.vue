<script>
import json from "../data.json"

export default {
  name: "DestinationView",
  data() {
    return {
      destinations: json.destinations
    }
  },
}
</script>

<template>
  <main class="destination">
    <aside class="aside">
      <h1><span class="title-num">01</span>pick your destination</h1>
    </aside>

    <router-view />

    <nav class="navbar">
      <router-link
        v-for="destination in this.destinations" 
        :key="`destination_${destination.slug}`" 
        :to="{
          name: 'destination.slug',
          params: { slug: destination.slug }
        }" 
        class="link" 
        exact
      >
        {{ destination.name }}
      </router-link>
    </nav>
  </main>
</template>

<style lang="scss" scoped>
@use "sass:color";
@import "../main.scss";

.destination {
  @include flex-col;
  background-image: url("../assets/destination/background-destination-mobile.jpg");
  @include bg;
  color: $clr-white;
  padding: 15vh 5vw 1rem;
  .aside {
    @include subtitle;
    order: 1;
    margin-bottom: 1rem;
    .title-num {
      font-weight: 600;
      margin-right: 0.5rem;
      color: color.adjust($clr-white, $alpha: -0.75);
    }
  }

  .navbar {
    @include flex-row;
    justify-content: center;
    gap: min(8vw, 2rem);
    width: 100%;
    order: 3;
    .link {
      @include subtitle;
      color: color.adjust($clr-light, $alpha: -0.5);
      text-decoration: none;
      padding-block: 1rem;
      &:hover:not(.router-link-exact-active),
      &:focus:not(.router-link-exact-active) {
        color: color.adjust($clr-white, $alpha: -0.25);
      }
    }
    .router-link-exact-active {
      color: $clr-white;
      border-bottom: 0.2rem solid $clr-white;
      padding-bottom: calc(1rem - 0.2rem);
    }
  }
}

@media screen and (width >=576px) {
  .destination {
    background-image: url("../assets/destination/background-destination-tablet.jpg");
    padding-top: 25vh;
    .aside {
      align-self: flex-start;
    }
  }
}

@media screen and (width >=1024px) {
  .destination {
    background-image: url("../assets/destination/background-destination-desktop.jpg");
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: 8% 12% 80%;
    .aside {
      margin: 0;
      grid-column: 1;
      grid-row: 1;
    }
    .navbar {
      align-items: flex-start;
      justify-content: flex-start;
      grid-column: 2;
      grid-row: 2;
      .link {
        font-size: min(6vw, 1.5rem);
      }
    }
  }
}</style>
