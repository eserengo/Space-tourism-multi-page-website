<script> 
</script>

<template>
  <main class="home">
    <article class="article">
      <p class="subtitle">so, you want to travel to</p>
      <h1 class="title">space</h1>
      <p class="para">Let’s face it, if you want to go to space, you might as well genuinely go to
      outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll 
      give you a truly out of this world experience!</p>
    </article>
  </main>
</template>

<style lang="scss" scoped>
  @import "../main.scss";

  .home {
    background-image: url("../assets/home/background-home-mobile.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;

    .article {
      color: $clr-white;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: space-evenly;
      padding: 24vh 12vw;

      .title {
        text-transform: uppercase;
        font-family: $ff-serif;
        font-size: min(16vw, 4rem);
        padding-block: 3vh;
      }

      .subtitle {
        text-transform: uppercase;
        font-family: $ff-sans-condensed;
        font-size: min(4vw, 1rem);
        letter-spacing: 0.2rem;
        text-align: center;
      }

      .para {
        font-family: $ff-sans-normal;
        font-size: min(4vw, 1rem);
        letter-spacing: 0.1rem;
        line-height: 1.5rem;
        text-align: center;
      }
    }
  }

  @media screen and (width >= 576px) {
    .home {
      background-image: url("../assets/home/background-home-tablet.jpg");
      .article > .title {
        font-size: max(12vw, 4rem);
      }
    }
  }

  @media screen and (width >= 1024px) {
    .home {
      background-image: url("../assets/home/background-home-desktop.jpg");
      .article {
        align-items: flex-start;
        padding: 32vh 45vw 8vh 5vw;
        .title {
          font-size: 12vw;
        }
        .subtitle {
          font-size: 2vw;
          text-align: left;
        }
        .para {
          font-size: min(2vw, 2rem);
          text-align: left;
        }
      }
    }
  }
</style>