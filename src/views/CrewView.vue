<script>
import json from "../data.json"

export default {
  name: "CrewView",
  data() {
    return {
      crew: json.crew
    }
  },
}
</script>

<template>
  <main class="crew">
    <aside class="aside">
      <h1><span class="title-num">02</span>meet your crew</h1>
    </aside>

    <router-view />

    <nav class="navbar">
      <router-link
        v-for="member in this.crew" 
        :key="`member_${member.slug}`" 
        :to="{
          name: 'crew.slug',
          params: { slug: member.slug }
        }"
        class="link" 
        exact
      >
      </router-link>
    </nav>
  </main>
</template>

<style lang="scss" scoped> @use "sass:color";
 @import "../main.scss";

 .crew {
   @include flex-col;
   background-image: url("../assets/crew/background-crew-mobile.jpg");
   @include bg;
   color: $clr-white;
   padding: 15vh 5vw 0;

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
     margin-bottom: 5vh;
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

 @media screen and (width >=576px) {
   .crew {
     background-image: url("../assets/crew/background-crew-tablet.jpg");
     padding-top: 25vh;
     .aside {
       align-self: flex-start;
     }
   }
 }

 @media screen and (width >=1024px) {
   .crew {
     background-image: url("../assets/crew/background-crew-desktop.jpg");
     display: grid;
     grid-template-columns: repeat(2, minmax(0, 1fr));
     grid-template-rows: 10% 75% 15%;
     .aside {
       margin: 0;
       grid-column: 1;
       grid-row: 1;
     }
     .navbar {
       align-items: flex-start;
       justify-content: flex-start;
       grid-column: 1;
       grid-row: 3;
       .link {
         font-size: min(6vw, 1.5rem);
       }
     }
   }
 }
</style>
