import getters from './getters'

const state={
	footer:true
}

const mutations={
	showFooter(state){
		state.footer=false;
	}
}

export default{
	getters,
	state,
	mutations
}
