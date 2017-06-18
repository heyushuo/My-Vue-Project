<template>
  <div id="app">
  		<LoadingView v-if='footerShow'></LoadingView>
  		<!--<keep-alive>-->
				<router-view></router-view>
			<!--</keep-alive>-->
  		<FooterView></FooterView>
  </div>
</template>

<script>
	import HomeView from './components/home/Home.vue'
	import FooterView from './components/Footer'
	import LoadingView from './components/loading/Loading'
	import {mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: 'app',
  mounted(){
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
  	FooterView,
  	LoadingView
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
