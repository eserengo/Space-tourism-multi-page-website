<script>
export default {
  name: "HomeView"
}
</script>

<template>
  <main class="home">
    <article class="article">
      <h2 class="subhead">so, you want to travel to</h2>
      <h1 class="head">space</h1>
      <p class="body">Let’s face it, if you want to go to space, you might as well genuinely go to
        outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll
        give you a truly out of this world experience!</p>
    </article>
    <aside class="aside">
      <router-link
        :to="{ name: 'destination' }"
        class="link"
      >
        <span class="explore">explore</span>
        <span class="icon"></span>
      </router-link>
    </aside>
  </main>
</template>

<style lang="scss" scoped>
@import "../main.scss";

.home {
  background-image: url("../assets/home/background-home-mobile.jpg");
  @include bg;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  .article {
    color: $clr-white;
    @include flex-col;
    justify-content: space-between;
    padding: 20vh 10vw 5vh;
    .head {
      @include title;
      margin-top: 0.75rem;
    }
    .subhead {
      @include subtitle;
      text-align: center;
    }
    .body {
      @include para;
    }
  }
  .aside {
    padding: 5vh 10vw 25vh;
    position: relative;
    .link {
      text-decoration: none;
      background-color: transparent;
      .explore {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: $ff-serif;
        color: $clr-dark;
        font-size: min(6vw, 1.5rem);
        text-transform: uppercase;
        z-index: 2;
        pointer-events: none;
      }
      .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url("../assets/planets/planet-B.png");
        @include bg;
        width: min(50vw, 12rem);
        aspect-ratio: 1;
        z-index: 1;
        filter: drop-shadow(1rem 1rem 1rem $clr-light) invert(66%) brightness(75%);
        opacity: 75%;

        &:hover {
          filter: grayscale(66%);
          opacity: 100%;
        }
      }
    }
  }
}

@media screen and (width >=576px) {
  .home {
    background-image: url("../assets/home/background-home-tablet.jpg");
    .article {
      padding-inline: 15vw;
    }
    .aside {
      .link {
        .icon {
          width: 12rem;
        }
      }
    }
  }
}

@media screen and (width >=1024px) {
  .home {
    background-image: url("../assets/home/background-home-desktop.jpg");
    flex-direction: row;
    .article {
      align-items: flex-start;
      padding: 30vh 15vw 15vh 10vw;
      width: 60%;
    }
    .aside {
      padding: 45vh 5vw 15vh;
      width: 40%;
      .link {
        .explore {
          top: 66%;
          font-size: min(8vw, 2rem);
        }
        .icon {
          top: 66%;
          width: 16rem;
        }
      }
    }
  }
}
</style>
