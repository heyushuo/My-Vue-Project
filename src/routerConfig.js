import MyView from './components/My.vue'
import HomeView from './components/home/Home.vue'
import DetailView from './components/home/detail.vue'


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
	},
	{
		path:"/detail:id",
		component:DetailView
	}
]
