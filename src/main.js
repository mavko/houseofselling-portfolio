import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import './styles/custom.css'
import Cursor from './js/cursor.js'
import Magnetic from './js/magnetic.js'

const app = createApp(App)

app.use(store)
app.use(router)

// global components
import Home from './views/Home.vue'
import Ispect from './views/Ispect.vue'
import Icontrol from './views/Icontrol.vue'
app.component('Ispect', Ispect)
app.component('Icontrol', Icontrol)
app.component('Home', Home)
app.mount('#app')

// Init cursor
const cursor = new Cursor()

// Init magnetic
$('[data-magnetic]').each(function () {
	new Magnetic(this)
})
// theme btn id
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

// Change the icons inside the button based on previous settings
if (
	localStorage.getItem('color-theme') === 'dark' ||
	(!('color-theme' in localStorage) &&
		window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
	themeToggleDarkIcon.classList.remove('hidden')
} else {
	themeToggleLightIcon.classList.remove('hidden')
}

var themeToggleBtn = document.getElementById('theme-toggle')

themeToggleBtn.addEventListener('click', function () {
	// toggle icons inside button
	themeToggleDarkIcon.classList.toggle('hidden')
	themeToggleLightIcon.classList.toggle('hidden')

	// if set via local storage previously
	if (localStorage.getItem('color-theme')) {
		if (localStorage.getItem('color-theme') === 'light') {
			document.documentElement.classList.add('dark')
			localStorage.setItem('color-theme', 'dark')
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('color-theme', 'light')
		}

		// if NOT set via local storage previously
	} else {
		if (document.documentElement.classList.contains('dark')) {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('color-theme', 'light')
		} else {
			document.documentElement.classList.add('dark')
			localStorage.setItem('color-theme', 'dark')
		}
	}
})
