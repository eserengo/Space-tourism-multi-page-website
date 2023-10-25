import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/destination",
      name: "destination",
      component: () => import("../views/DestinationView.vue"),
      redirect: { name: "destination.slug", params: { slug: "moon" } },
      children: [
        {
          path: ":slug",
          name: "destination.slug",
          component: () => import("../views/theDestinations.vue")
        }
      ],
    },
    {
      path: "/crew",
      name: "crew",
      component: () => import("../views/CrewView.vue"),
      redirect: { name: "crew.slug", params: { slug: "douglashurley" } },
      children: [
        {
          path: ":slug",
          name: "crew.slug",
          component: () => import("../views/theCrew.vue")
        }
      ],
    },
    {
      path: "/technology",
      name: "technology",
      component: () => import("../views/TechnologyView.vue")
    },
  ]
})

export default router
