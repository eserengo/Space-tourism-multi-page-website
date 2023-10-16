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
  <article class="article">
    <section class="image">
      <picture>
        <source :srcset="`../src/assets/destination/${destination.images.png}`" media="(max-width: 1024px)" type="image/png" >
        <img :src="`../src/assets/destination/${destination.images.webp}`" :alt="destination.name" >
      </picture>
    </section>
    <section class="info">
      <h2 class="subtitle">{{ destination.name }}</h2>
      <p class="para">{{ destination.description }}</p>
      <footer class="footer">
        <div>
          <p class="info-category">avg. distance</p>
          <p class="info-value">{{ destination.distance }}</p>
        </div>
        <div>
          <p class="info-category">est. travel time</p>
          <p class="info-value">{{ destination.travel }}</p>
        </div>
      </footer>
    </section>
  </article>
</template>

<style lang="scss" scoped> 
  @use "sass:color";
  @import "../main.scss";

  .article {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .info {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      
      .subtitle {
        text-transform: uppercase;
        font-family: $ff-serif;
        font-size: min(16vw, 4rem);
        padding-top: 5vh;
      }
      
      .para {
        font-family: $ff-sans-normal;
        font-size: min(3vw, 1rem);
        letter-spacing: 0.1rem;
        line-height: 1.5rem;
        text-align: center;
        padding-bottom: 5vh;
        border-bottom: 1px solid $clr-light;
      }

      .footer {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        .info-category {
          text-transform: uppercase;
          font-family: $ff-sans-condensed;
          font-size: min(4vw, 1rem);
          letter-spacing: 0.2rem;
          margin: 5vh 0 2vh;
        }

        .info-value {
          text-transform: uppercase;
          font-family: $ff-serif;
          font-size: min(8vw, 2rem);
          margin-bottom: 5vh;
        }
      }
    }
  }

  @media screen and (width < 1024px) {
    .info-category,
    .info-value {
      text-align: center;
    }
  }

  @media screen and (width >= 1024px) {
    .article {
      flex-direction: row;

      .image,
      .info {
        width: 50%;
        height: 100%;
        padding: 1vh 1vw;
      }
      .info {
        align-items: flex-start;
        .subtitle {
          font-size: 12vw;
        }
        .para {
          font-size: max(1.5vw, 1rem);
          text-align: start;
        }
        .footer {
          width: 100%;
          flex-direction: row;
          justify-content: flex-start;
          gap: max(4vw, 1rem);
          .info-category {
            text-align: start;
            font-size: max(1.5vw, 1rem);
          }
          .info-value {
            text-align: start;
            font-size: max(3vw, 1.5rem);
          }
        }
      }
    }
  }
</style>