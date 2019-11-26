import home from './components/home.vue';
import register from './components/register.vue';
import login from './components/login.vue';

const routes = [
	{ path: '/', component: home },
	{ path: '/register', component: register },
	{ path: '/login', component: login }
];
export default routes;