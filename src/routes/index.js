import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'
import Movie from './Movie.vue'

// 페이지를 구성할 수 있게함.
export default createRouter({
  // Hash mode 사용, History
  // https://google.com/#/search
  history: createWebHashHistory(),
  // pages
  // https://google.com/
  // component는 vuejs의 컴포넌트를 연결하는거
  routes: [
    {
      path: '/',
      component: Home
    },
    // https://google.com/about
    {
      path: '/about',
      component: About
    },
    {
      path: '/movie',
      component: Movie
    }
  ]
})

// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }
//   ]
// })

// export default router
