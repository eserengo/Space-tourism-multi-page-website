<script>
export default {
  name: "App",
  data() {
    return {
      media: { Boolean },
      isActive: false,
    }
  },

  methods: {
    setMedia() {
      let timer;
      window.clearTimeout(timer);
      timer = window.setTimeout(
        window.matchMedia("(width < 576px)").matches
          ? this.media = true
          : this.media = false
        , 500);
    },
    toggleIsActive() {
      this.isActive = !this.isActive;
    },
  },

  mounted() {
    this.setMedia();
    window.addEventListener("resize", () => this.setMedia());
  },
  unmounted() {
    window.removeEventListener("resize", () => this.setMedia());
  },
}
</script>

<template>
  <header class="header">
    <img src="./assets/shared/logo.svg" alt="space tourism logo" class="logo" />

    <nav v-if="media">
      <section 
        v-if="isActive" 
        class="mobile navbar"
      >
        <img 
          src="./assets/shared/icon-close.svg" 
          alt="close icon" 
          @click="toggleIsActive" 
          @keyup.enter="toggleIsActive"
          class="close icon" 
          tabindex=0 
        />
        <router-link 
          :to="{ name: 'home' }" 
          @click="toggleIsActive" 
          class="link"
        >
          <span class="link-num">00</span>
          Home
        </router-link>
        <router-link 
          :to="{ name: 'destination' }" 
          @click="toggleIsActive" 
          class="link"
        >
          <span class="link-num">01</span>
          Destination
        </router-link>
        <router-link 
          :to="{ name: 'crew' }" 
          @click="toggleIsActive" 
          class="link"
        >
          <span class="link-num">02</span>
          Crew
        </router-link>
        <router-link 
          :to="{ name: 'technology' }" 
          @click="toggleIsActive" 
          class="link"
        >
          <span class="link-num">03</span>
          Technology</router-link>
      </section>
      <img 
        v-else 
        src="./assets/shared/icon-hamburger.svg" 
        alt="hamburger icon" 
        @click="toggleIsActive"
        @keyup.enter="toggleIsActive" 
        class="icon" 
        tabindex=0 
      />
    </nav>

    <nav 
      v-else 
      class="full navbar">
      <router-link 
        :to="{ name: 'home' }" 
        class="link"
      >
        <span class="link-num">00</span>
         Home
      </router-link>
      <router-link 
        :to="{ name: 'destination' }" 
        class="link"
      >
        <span class="link-num">01</span>
         Destination
      </router-link>
      <router-link 
        :to="{ name: 'crew' }" 
        class="link"
      >
        <span class="link-num">02</span>
         Crew
      </router-link>
      <router-link 
        :to="{ name: 'technology' }" 
        class="link"
      >
        <span class="link-num">03</span>
         Technology
      </router-link>
    </nav>
  </header>

  <router-view />
</template>

<style lang="scss">
@use "sass:color";
@import "main.scss";

.header {
  @include flex-row;
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 1rem;
  z-index: 3;

  .icon {
    cursor: pointer;
  }

  .navbar {
    .link {
      font-family: $ff-sans-condensed;
      color: color.adjust($clr-light, $alpha: -0.5);
      text-decoration: none;
      text-transform: uppercase;
      padding-block: 2rem;

      &:hover:not(.router-link-active),
      &:focus:not(.router-link-active) {
        color: color.adjust($clr-white, $alpha: -0.25);
      }

      .link-num {
        font-weight: 600;
        margin-right: 0.25rem;
      }
    }

    .router-link-active {
      color: $clr-white;
      border-bottom: 0.2rem solid $clr-white;
      padding-bottom: calc(2rem - 0.2rem);
    }
  }

  .mobile.navbar {
    @include flex-col;
    justify-content: space-evenly;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(45deg, color.adjust($clr-dark, $alpha: -0.025), color.adjust($clr-dark, $alpha: -0.05));
    padding: 20vh 10vw;

    .close.icon {
      align-self: flex-end;
    }
  }
}

@media screen and (width < 576px) {
  .logo {
    width: 2rem;
    aspect-ratio: 1;
  }
}

@media screen and (width >=576px) {
  .full.navbar {
    @include flex-row;
    justify-content: space-between;
    gap: 2rem;
    padding-inline: 2rem;
    background-image: linear-gradient(to right, color.adjust($clr-dark, $alpha: -0.9), color.adjust($clr-light, $alpha: -0.9));
  }
}

@media screen and (width >=1024px) {
  .full.navbar {
    padding-inline: 12rem 4rem;
  }
}</style>
