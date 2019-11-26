<template>
  <div id="app">
	<nav>
		<router-link to='/'>Home&nbsp;</router-link>
		<router-link to='/register'>Register&nbsp;</router-link>
		<router-link to='/login'>Login&nbsp;</router-link>
	</nav>
	<router-view/>
<!--     <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>

/* import HelloWorld from './components/HelloWorld.vue' */

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
