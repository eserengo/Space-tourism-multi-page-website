<script>
import json from "../data.json"

export default {
  name: "theDestinations",
  computed: {
    destinationSlug() {
      return this.$route.params.slug
    },
    destination() {
      return json.destinations.find(destination => destination.slug === this.destinationSlug)
    },
  },
}
</script>

<template>
  <article class="image">
    <picture>
      <source
        :srcset="`../src/assets/destination/${destination.images.png}`" 
        media="(max-width: 1024px)"
        type="image/png"
      >
      <img 
        :src="`../src/assets/destination/${destination.images.webp}`" 
        :alt="destination.name"
      >
    </picture>
  </article>

  <article class="info">
    <section class="head">
      <h2>{{ destination.name }}</h2>
    </section>
    <p class="body">{{ destination.description }}</p>
    <section class="foot">
      <div>
        <p class="category">avg. distance</p>
        <p class="value">{{ destination.distance }}</p>
      </div>
      <div>
        <p class="category">est. travel time</p>
        <p class="value">{{ destination.travel }}</p>
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped>
@use "sass:color";
@import "../main.scss";

.image {
  margin: 1rem;
  order: 2;
}
.info {
  @include flex-col;
  order: 4;
  .head {
    @include title;
    padding-top: 5vh;
  }
  .body {
    @include para;
    padding-bottom: 5vh;
    border-bottom: 1px solid color.adjust($clr-light, $alpha: -0.75);
  }
  .foot {
    @include flex-col;
    .category {
      @include subtitle;
      margin: 5vh 0 2vh;
    }
    .value {
      text-transform: uppercase;
      font-family: $ff-serif;
      font-size: min(8vw, 2rem);
    }
  }
}

@media screen and (width < 1024px) {
  .category,
  .value {
    text-align: center;
  }
}

@media screen and (width >=1024px) {
  .image {
    grid-column: 1;
    grid-row: 3;
  }
  .info {
    align-items: flex-start;
    grid-column: 2;
    grid-row: 3;
    .foot {
      width: 100%;
      flex-direction: row;
      justify-content: flex-start;
      gap: max(4vw, 1rem);
      .category {
        text-align: left;
        font-size: max(1.5vw, 1rem);
      }
      .value {
        text-align: left;
        font-size: max(3vw, 1.5rem);
      }
    }
  }
}</style>
