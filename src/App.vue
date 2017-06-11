<template>
  <div id="app">
  		<router-view></router-view>
  </div>
</template>

<script>
	import HomeView from './components/Home'
export default {
  name: 'app',
  components:{
  	HomeView
  }
}
</script>

<style scoped="scoped">
	
</style>
