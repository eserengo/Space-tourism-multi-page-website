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
  </main>
</template>

<style lang="scss" scoped>
@import "../main.scss";

.home {
  background-image: url("../assets/home/background-home-mobile.jpg");
  @include bg;
  min-height: 100vh;
  .article {
    color: $clr-white;
    @include flex-col;
    justify-content: space-between;
    padding: 20vh 10vw;
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
}

@media screen and (width >=576px) {
  .home {
    background-image: url("../assets/home/background-home-tablet.jpg");
    .article {
      padding: 25vh 20vw;
    }
  }
}

@media screen and (width >=1024px) {
  .home {
    background-image: url("../assets/home/background-home-desktop.jpg");
    .article {
      align-items: flex-start;
      padding: 35vh 50vw 15vh 10vw;
    }
  }
}
</style>