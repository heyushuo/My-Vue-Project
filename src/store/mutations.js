import getters from './getters'

const state={
	footer:false
}

const mutations={
	showFooter(state){
		state.footer=true;
	},
	hideFooter(state){
		state.footer=false;
	}
}

export default{
	getters,
	state,
	mutations
}
