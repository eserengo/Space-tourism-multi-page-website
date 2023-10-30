<script>
import json from "../data.json"

export default {
  name: "theCrew",
  computed: {
    crewSlug() {
      return this.$route.params.slug
    },
    crew() {
      return json.crew.find(member => member.slug === this.crewSlug)
    },
  },
}
</script>

<template>
  <article class="info">
    <h2 class="subhead">{{ crew.role }}</h2>
    <h1 class="head">{{ crew.name }}</h1>
    <p class="body">{{ crew.bio }}</p>
  </article>

  <article class="image">
    <picture>
      <source :srcset="`../src/assets/crew/${crew.images.png}`" media="(max-width: 1024px)" type="image/png">
      <img :src="`../src/assets/crew/${crew.images.webp}`" :alt="crew.name">
    </picture>
  </article>
</template>

<style lang="scss" scoped>
@use "sass:color";
@import "../main.scss";

.image {
  order: 4;
}

.info {
  @include flex-col;
  order: 2;

  .subhead {
    @include subtitle;
    padding-top: 5vh;
  }

  .head {
    @include title;
    text-align: center;
    padding-block: 0.5rem 1rem;
  }

  .body {
    @include para;
    padding-bottom: 5vh;
  }
}

@media screen and (width >=1024px) {
  .image {
    grid-column: 2;
    grid-row: 2 / span 2;
    margin: 1rem;
    z-index: 0;
  }

  .info {
    align-items: flex-start;
    grid-column: 1;
    grid-row: 2;
    z-index: 1;

    .head {
      text-align: left;
    }
  }
}</style>
