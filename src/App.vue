<template>
  <div id="app">
  		<router-view></router-view>
  		<FooterView v-if='footerShow'></FooterView>
  </div>
</template>

<script>
	import HomeView from './components/Home'
	import FooterView from './components/Footer'
	import {mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: 'app',
  mounted(){
  	console.log(this.footerShow)
  },
  data(){
  	return {
  	}
  },
  computed:{
		...mapGetters([
			'footerShow'
		]),
  },
  components:{
  	HomeView,
  	FooterView
  },
  watch:{
  	$route(to,from){
			if(to.path=="/my"){
//				this.showFooter();
//				alert(this.showFooter())
//					this.$store.commit('showFooter');
//					console.log(this.footerShow)
			}
  	}
  },
  methods:{
  	...mapActions([
      'showFooter' // 映射 this.increment() 为 this.$store.dispatch('increment')
    ]),
  }
}
//console.log(showFooter)
</script>

<style scoped="scoped">
	
</style>
