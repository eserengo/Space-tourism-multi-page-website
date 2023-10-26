<script>
import json from "../data.json"

export default {
  name: "TechnologyView",
  data() {
    return {
      technology: json.technology
    }
  },
}
</script>

<template>
  <main class="technology">
    <aside class="aside">
      <h1><span class="title-num">03</span>space launch 101</h1>
    </aside>

    <router-view />

    <nav class="navbar">
      <router-link
        v-for="tech in this.technology"
        :key="`tech_${tech.slug}`"
        :to="{
          name: 'technology.slug',
          params: { slug: tech.slug }
        }"
        class="link"
        exact>
      </router-link>
    </nav>
  </main>
</template>

<style lang="scss" scoped> 
  @use "sass:color";
  @import "../main.scss";

  .technology {
    @include flex-col;
    background-image: url("../assets/technology/background-technology-mobile.jpg");
    @include bg;
    color: $clr-white;
    padding-block: 15vh 5vh;

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
      margin-top: 5vh;
      .link {
        background-color: color.adjust($clr-light, $alpha: -0.5);
        text-decoration: none;
        width: 1rem;
        aspect-ratio: 1;
        border-radius: 50%;
        &:hover:not(.router-link-exact-active),
        &:focus:not(.router-link-exact-active) {
          background-color: color.adjust($clr-white, $alpha: -0.25);
        }
      }
      .router-link-exact-active {
        background-color: $clr-white;
      }
    }
  }

  @media screen and (width >= 576px) {
    .technology {
      background-image: url("../assets/technology/background-technology-tablet.jpg");
      padding-top: 25vh;
      .aside {
        align-self: flex-start;
        padding-inline: 5vw;
      }
    }
  }

  @media screen and (width >= 1024px) {
    .technology {
      background-image: url("../assets/technology/background-technology-desktop.jpg");
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-rows: 10% 5% 85%;
      .aside {
        margin: 0;
        grid-column: 1;
        grid-row: 1;
      }
      .navbar {
        grid-column: 1;
        grid-row: 2;
        margin: 0;
      }
    }
  }
</style>
