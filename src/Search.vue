<template>
		<div class="container">
			<div class="flex">
				<ButtonBack />
				<h1>{{ tracker.title }}</h1>
			</div>
			<hr>
			<div class="search-form">
				<input  
					type="search"
					v-model="searchQuery"
					@keyup.enter="find"
				>
				<button type="submit" @click="find">Поиск</button>
			</div>

			<Spinner v-if="isSearchResultLoad" />
			<div v-else-if="isSearchResultShown">
				<div v-if="searchingResults.length > 0">
					<div class="row">
						<div v-for="searchResult in searchingResults" :key="searchResult.id" class="col-lg-3 col-12 col-sm-12 mb-15 d-flex">
							<MediaCard :media="searchResult" />
						</div>
					</div>
				</div>
				<div v-else>
					<h1>Ничего не найднено</h1>
				</div>
			</div>

		</div>
</template>

<script>
	import { searchMedia } from './data.js'
	import ButtonBack from './ButtonBack.vue'
	import Spinner from './Spinner.vue'
	import MediaCard from './MediaCard.vue'

	export default {
		components: {
			Spinner,
			ButtonBack,
			MediaCard,
		},
		data() {
			return {
				searchingResults: [],
				searchQuery: null,
				isSearchResultShown: false,
				isSearchResultLoad: false,
			}
		},
		methods: {
			async find() {
				this.isSearchResultShown = false;
				this.isSearchResultLoad = true;
				this.searchingResults = await searchMedia(this.tracker.id, this.searchQuery);
				this.isSearchResultLoad = false;
				this.isSearchResultShown = true;
			}
		},
		computed: {
			tracker() {
				return this.$trackers.find(item => item.id == this.$route.params.id);
			}
		},
	}
</script>

<style scoped lang="scss">
	.search-form {
		display: flex;
		margin-bottom: 27px;
	}
</style>