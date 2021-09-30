import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tw.css'
import Cursor from './js/cursor.js'
import Magnetic from './js/magnetic.js'



const app = createApp(App)

app.use(store)
app.use(router)

// global components
import Butt from './components/Butt.vue'

app.component('Butt', Butt)

app.mount('#app')

// Init cursor
const cursor = new Cursor();

// Init magnetic
$('[data-magnetic]').each(function () {new Magnetic(this);});