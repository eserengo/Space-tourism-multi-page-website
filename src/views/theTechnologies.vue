<script>
import json from "../data.json"

export default {
  name: "theTechnologies",
  computed: {
    technologySlug() {
      return this.$route.params.slug
    },
    technology() {
      return json.technology.find(tech => tech.slug === this.technologySlug)
    },
  },
}
</script>

<template>
  <article class="image">
    <figure class="mobile figure">
      <img
        :src="`../src/assets/technology/${technology.images.landscape}`" 
        :alt="technology.name"
      >
    </figure>
    <figure class="full figure">
      <img 
        :src="`../src/assets/technology/${technology.images.portrait}`" 
        :alt="technology.name"
      >
    </figure>
  </article>

  <article class="info">
    <h2 class="subhead">the terminology</h2>
    <h1 class="head">{{ technology.name }}</h1>
    <p class="body">{{ technology.description }}</p>
  </article>
</template>

<style lang="scss" scoped>
@use "sass:color";
@import "../main.scss";

.image {
  order: 2;
  .full.figure {
    display: none;
  }
}

.info {
  @include flex-col;
  order: 4;
  padding-inline: 5vw;
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
  }
}

@media screen and (width >=1024px) {
  .image {
    grid-column: 2;
    grid-row: 2 / span 2;
    margin: 1rem;
    .mobile.figure {
      display: none;
    }
    .full.figure {
      display: block;
    }
  }

  .info {
    align-items: flex-start;
    grid-column: 1;
    grid-row: 3;
    .head {
      text-align: left;
    }
  }
}</style>
