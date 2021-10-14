import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Ispect from '../views/Ispect.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/ispect',
		name: 'ispect',
		component: Ispect,
	},
]


const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach(function (to, from, next) { 
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
    next();
});

export default router
