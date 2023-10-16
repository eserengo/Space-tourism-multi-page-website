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
      <h1 class="title"><span class="title-num">01</span>pick your destination</h1>
      <nav class="navbar">
        <router-link
          v-for="destination in this.destinations"
          :key="`destination_${destination.slug}`"
          :to="{
            name: 'destination.slug',
            params: { slug: destination.slug }
          }"
          class="link"
          exact>
          {{ destination.name }}
        </router-link>
      </nav>
    </aside>

    <router-view class="view" />
  </main>
</template>

<style lang="scss" scoped> 
  @use "sass:color";
  @import "../main.scss";

  .destination {
    background-image: url("../assets/destination/background-destination-mobile.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    color: $clr-white;
    padding: 15vh 5vw 0;

    .aside {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      margin-bottom: 3vh;

      .title {
        text-transform: uppercase;
        font-family: $ff-sans-condensed;
        font-size: min(4vw, 1rem);
        letter-spacing: 0.2rem;

        .title-num {
          font-weight: 600;
          margin-right: 0.5rem;
          color: color.adjust($clr-white, $alpha: -0.75);
        }
      }

      .navbar {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        gap: min(8vw, 2rem);
        width: 100%;

        .link {
          font-family: $ff-sans-condensed;
          font-size: min(4vw, 1rem);
          color: color.adjust($clr-light, $alpha: -0.25);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          padding-block: 1rem;

          &:hover,
          &:focus {
            color: $clr-white;
          }
        }

        .router-link-exact-active {
          color: $clr-white;
          border-bottom: 0.2rem solid $clr-white;
          padding-bottom: calc(1rem - 0.2rem);
        }
      }
    }
  }

  @media screen and (width >= 576px) {
    .destination {
      background-image: url("../assets/destination/background-destination-tablet.jpg");
      padding-top: 25vh;
    }
  }

  @media screen and (width >= 1024px) {
    .destination {
      background-image: url("../assets/destination/background-destination-desktop.jpg");
      .aside {
        flex-direction: row;
        justify-content: space-between;
        margin: 0;
        .title {
          font-size: min(6vw, 1.5rem);
          width: 50%;
          padding-inline: 1vw;
        }
        .navbar {
          width: 50%;
          justify-content: flex-start;
          padding-inline: 1vw;
          .link {
            font-size: min(6vw, 1.5rem);
          }
        }
      }
    }
  }
</style>
