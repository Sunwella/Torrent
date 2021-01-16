import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './HomePage.vue'
import Search from './Search.vue'
import Media from './Media.vue'
import Trackers from './Trackers.vue'
import Favorites from './Favorites.vue'
import Download from './Download.vue'
import {loadTrackers} from './data.js'

library.add(faBars, fasHeart, farHeart, faSpinner, faDownload, faCheck, faTimesCircle, faToggleOn, faToggleOff, faTrashAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
	{ path:'/', component: HomePage },
	{ path:'/:id/search', component: Search },
	{ path:'/:id/:media_id', component: Media },
	{ path:'/trackers', component: Trackers },
	{ path:'/favorites', component: Favorites },
	{ path:'/download', component: Download }
];

const router = new VueRouter({
	mode: 'history',
	routes
})

loadTrackers().then(trackers => {
	Vue.prototype.$trackers = trackers;
	new Vue({
		router,
		render: h => h(App),
	}).$mount('#app')
});




