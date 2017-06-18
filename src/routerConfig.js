import MyView from './components/My.vue'
import HomeView from './components/home/Home.vue'
import DetailView from './components/home/detail.vue'
import LoginView from './components/login/Login.vue'

export default[
	{
		path:'/',
		redirect:'/home'
	},
	{
		meta: { requiresAuth: true },
		path:"/my",
		component:MyView
	},
	{
		path:"/home",
		component:HomeView
	},
	{
		meta: { requiresAuth: true },
		path:"/detail/:id",
		component:DetailView
	},
	{
		path:"/login",
		component:LoginView
	}
]
