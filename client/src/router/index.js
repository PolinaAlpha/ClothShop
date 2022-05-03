import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/views/MainPage"
import AboutPage from "@/views/AboutPage"
import SalePage from "@/views/SalePage"
import ProductPage from "@/views/ProductPage"
import ChoicePage from "@/views/ChoicePage"
import AuthPage from "@/views/AuthPage"
import BasketPage from "@/views/BasketPage"
const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/sale',
    name: 'sale',
    component: SalePage
  },
  {
    path: '/product',
    name: 'product',
    component: ProductPage
  },
  {
    path: '/choice',
    name: 'choice',
    component: ChoicePage
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthPage
  },
  {
    path: '/basket',
    name: 'baskeASAt',
    component: BasketPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
