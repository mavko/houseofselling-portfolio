import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import Cursor from './js/cursor.js'
import Magnetic from './js/magnetic.js'

const app = createApp(App)

app.use(store)
app.use(router)

// global components
import Ispect from './views/Ispect.vue'
import Icontrol from './views/Icontrol.vue'
app.component('Ispect', Ispect)
app.component('Icontrol', Icontrol)

app.mount('#app')

// Init cursor
const cursor = new Cursor()

// Init magnetic
$('[data-magnetic]').each(function () {
	new Magnetic(this)
})
