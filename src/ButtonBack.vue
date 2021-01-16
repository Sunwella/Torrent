<template>
	<div>
		<button class="button-back" @click="$router.back()"><svg role="img" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" aria-labelledby="backAltIconTitle backAltIconDesc" stroke="#6c02bd" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#6c02bd"> <title id="backAltIconTitle">К списку трекеров</title> <desc id="backAltIconDesc">Icon of a regular triangle pointing left</desc> <path d="M4 12l15-9v18z"/> </svg></button>
	</div>
</template>

<script>
	export default {
	}
</script>

<style scoped lang="scss">
	.button-back {
		border-style: none;
		list-style: none;
		height: auto;
		background-color: white;
		padding-left: 0px;
		margin-top: 20px;
	}
</style>
