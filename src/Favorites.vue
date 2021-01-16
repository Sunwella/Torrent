<template>
	<div>
		<div class="container">
			<h1>Избранное</h1>
			<hr> 
			<div v-if="favoritesList.length > 0">
				<div class="row">
					<div v-for="media in favoritesList" :key="media.id" class="col-lg-3 col-12 col-sm-12 mb-15 d-flex">
						<MediaCard :media="media" />
					</div>
				</div>
			</div>
			<div v-else>
				<h1>Вы ничего не добавили в избранное</h1>
			</div>
		</div>
	</div>
</template>

<script>
	import { getFavoriteList } from './data.js'
	import MediaCard from './MediaCard.vue'

	export default {
		components:{
			MediaCard
		},
		data() {
			return {
				favoritesList: [],
			}
		},
		async created() {
			this.favoritesList = await getFavoriteList();
		}
	}
</script>