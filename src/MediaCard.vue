<template>
		<div class="card text-center">
			<router-link :to="`/${media.tracker_id}/${media.id}`" class="link-decoration-non">
				<img :src="media.poster" @error="media.poster = img404" class="media-img">
			</router-link>
			<div class="card-body">
				<h4>{{ media.title }}</h4>
				<h4>{{ media.original_title }}</h4>
					<button class="favorite-btn" @click="switchFavorite(media)">
						<font-awesome-icon 
							class="py-7 not-favorite-icon" 
							:class="{ 'favorite-icon': media.is_favorite }" 
							:icon="!isSpinerShown ? [media.is_favorite  ? 'fas' : 'far', 'heart'] : ['fas', 'spinner'] " 
						/>
					</button>
			</div>
		</div>
</template>

<script>
	import { addFavorite } from './data.js'
	import { removeFavorite } from './data.js'

	const DUMMY_IMAGE_WIDTH = 370;
	const DUMMY_IMAGE_HEIGHT = 550;
	const DUMMY_IMAGE_BACKGROUND_COLOR = '6c02bd';
	const DUMMY_IMAGE_TEXT_COLOR = 'ffffff';
	const DUMMY_IMAGE_TEXT = 'No image';

	export default {
		props: ["media"],
		data() {
			return {
				isSpinerShown: false,
			}
		},
		methods: {
			async switchFavorite(media) {
				if (media.is_favorite) {
					this.isSpinerShown = true;
					await removeFavorite(media.id);
					media.is_favorite = 0;
					this.isSpinerShown = false;
				} else {
					this.isSpinerShown = true;
					await addFavorite(media.id);
					media.is_favorite = 1;
					this.isSpinerShown = false;
				}
			}
		},
		computed: {
			img404() {
				return `https://dummyimage.com/${DUMMY_IMAGE_WIDTH}x${DUMMY_IMAGE_HEIGHT}/${DUMMY_IMAGE_BACKGROUND_COLOR}/${DUMMY_IMAGE_TEXT_COLOR}&text=${DUMMY_IMAGE_TEXT}`;
			}
		}
	}
</script>

<style scoped lang="scss">
	.media-img {
		width: 100%;
		min-width: 1px;
	}
	.favorite-btn {
		background-color: #fff;
	}
	.not-favorite-icon {
		font-size: 34px;
		color: #6d3a99;

		.favorite-icon {
			color: #fff;
		}
	}
</style>