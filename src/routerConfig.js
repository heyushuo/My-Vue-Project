import MyView from './components/My.vue'
import HomeView from './components/home/Home.vue'


export default[
	{
		path:'/',
		redirect:'/home'
	},
	{
		path:"/my",
		component:MyView
	},
	{
		path:"/home",
		component:HomeView
	}
]
