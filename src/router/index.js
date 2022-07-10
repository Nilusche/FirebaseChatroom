import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatroomView from '../views/ChatroomView.vue'
import {projectAuth} from '../firebase/config.js'
//auth guard
const requireAuth = (to, from , next) => {
    let user = projectAuth.currentUser;
    if(!user){
        next('/');
    }else{
        next();
    }
}


const requireNoAuth = (to, from , next) => {  
    let user = projectAuth.currentUser;
    if(user){
        next('/chat');
    }else{  
        next();
    }
}
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatroomView,
    beforeEnter: requireAuth
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
