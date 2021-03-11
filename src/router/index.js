import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Pricing from "../views/Pricing.vue";
import Timetables from "../views/Timetables.vue";
import Gallery from "../views/Gallery.vue";
import Contact from "../views/Contact.vue";
import Blog from "../views/Blog.vue";
import Article from "../views/Article.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Yogendra - Jogos Studija",
      // metaTags: [
      //   {
      //     name: "description",
      //     content: "Pagrindinis jogos studijos puslapis",
      //   },
      //   {
      //     property: "og:description",
      //     content: "Pagrindinis jogos studijos puslapis",
      //   },
      // ],
    },
  },
  {
    path: "/kainos",
    name: "Pricing",
    component: Pricing,
  },
  {
    path: "/tvarkarastis",
    name: "Timetables",
    component: Timetables,
  },
  {
    path: "/galerija",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/kontaktai",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/tinklarastis",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/tinklarastis",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/tinklarastis/:slug",
    name: "Article",
    component: Article,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
