import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Ispect from '../views/Ispect.vue'
import Icontrol from '../views/Icontrol.vue'
import Contact from '../views/Contact.vue'

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
	{
		path: '/icontrol',
		name: 'icontrol',
		component: Icontrol,
	},
	{
		path: '/contact',
		name: 'contact',
		component: Contact,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach(function (to, from, next) {
	setTimeout(() => {
		window.scrollTo(0, 0)
	}, 100)
	next()
})

export default router
