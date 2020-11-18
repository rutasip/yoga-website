import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pricing from '../views/Pricing.vue'
import Timetable from '../views/Timetable.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kainos',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/tvarkarastis',
    name: 'Timetable',
    component: Timetable
  },
  {
    path: '/galerija',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/kontaktai',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
