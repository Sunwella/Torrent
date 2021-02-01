<template>
  <div id="app">
	<Navbar />
    <router-view></router-view>
  </div>
</template>

<script>

	import Navbar from './Navbar.vue'
	
	export default {
		name: 'App',
		components: {
			Navbar
		}
	}
</script>

<style lang="scss">
	@import '../node_modules/bootstrap/scss/bootstrap-grid.scss';
	@import '../node_modules/bootstrap/scss/utilities/_display.scss';

	h1, h2, h3, h4, h5 {
		margin-bottom: 13px;
		font-family: Gill Sans, sans-serif;
		font-weight: 300;
	}
	p {
		font-family: Gill Sans, sans-serif;
	}
	hr {
		margin-bottom: 34px;
	}
	button {
		font-family: Gill Sans, sans-serif;
		border: solid;
		border-color: rgb(109, 58, 153);
		background-color: white;
		border-width: 1px;
		border-radius: 5px;
		padding-left: 12px;
		padding-right: 12px;
	}
	button:focus{
		outline: none;
	}
	input {
		border: solid;
		border-width: 1px;
		border-color: rgb(109, 58, 153);
		border-radius: 5px;
		height: 32px;
		margin-right: 10px;
		flex-grow: 1;
	}
	
	.flex {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-items: flex-start;
		align-content: flex-start;
	}
	.mr-mb-20 {
		margin-right: 20px;
		margin-bottom: 20px;
	}
	.mb-15 {
		margin-bottom: 15px;	
	}
	.mt-0 {
		margin-top: 0px;
	}
	.ml-0 {
		margin-left: 0px;
	}
	.mb-0 {
		margin-bottom: 0px;
	}
	.px-7 {
		padding-right: 7px;
		padding-left: 7px;
	}
	.py-7 {
		padding-top: 7px;
		padding-bottom: 7px;
	}
	.text-center {
		text-align: center;
		margin: 0px;
	}
	.link-decoration-non {
		text-decoration: none;
		color: black;
	}
	.icon {
		align-self: center;
		padding: 7px;
		max-width: 60px;
	}
	.card {
		display: flex;
		width: 100%;
		position: relative;
		flex-direction: column;
		border: solid;
		border-width: 1px;
		border-radius: 3px;
		border-color: rgba(109, 58, 153, 0.2);
		margin-bottom: 13px;
		height: 100%;
	}
	.card-body {
		padding-right: 7px;
		padding-left: 7px;
	}
	.card-img {
		padding: 0px;
	}
	.items-stretch {
		display: flex;
		align-items: stretch;
	}
	.specification {
		color: white;
		background-color: rgb(108, 2, 189);
		margin-right: 7px;
		padding: 5px 7px;
	}
</style>
