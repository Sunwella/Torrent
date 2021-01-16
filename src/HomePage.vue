<template>
	<div>
		<Trackers />
		<Favorites />
	</div>
</template>

<script>
	import Trackers from './Trackers.vue'
	import Favorites from './Favorites.vue'

	export default { 
		components: {
			Trackers,
			Favorites
		}
	}
</script>
