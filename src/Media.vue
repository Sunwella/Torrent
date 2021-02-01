<template>
		<div class="container">

			<div v-if="!isMediaShown">
				<Spinner />
			</div>

			<div v-else>
				<div class="row">
					<div class="col-lg-1 col-md-1 col-sm-1 col-1">
						<ButtonBack />
					</div>
					<div class="col-lg-11 col-md-11 col-sm-11 col-11">
						<h1>{{ media.title }}</h1>
					</div>
				</div>
				<hr>
				<div class="row">
					<div class="col-lg-4 col-md-12 col-12 col-sm-12">
						<div class="card">
							<img :src="media.poster">
						</div>
					</div>
					<div class="col-lg-8 col-md-12 col-12 col-sm-12">
						<div class="scroll-container">
							<div class="torrents" v-for="(torrent, index) in media.torrents" :key="index">

								<TorrentItem :torrent="torrent" :media="media.torrents" @open-form-download="openFormDownload" />

								<div v-if="isDownloadFormShown">

									<DownloadForm @close-form="closeForm" />

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	import { openMedia } from './data.js'
	import ButtonBack from './ButtonBack.vue'
	import Spinner from './Spinner.vue'
	import DownloadForm from './DownloadForm.vue'
	import TorrentItem from './TorrentItem.vue'

	export default {
		components: {
			ButtonBack,
			Spinner,
			DownloadForm,
			TorrentItem
		},
		data() {
			return {
				isMediaShown: false,
				media: [],
				isDownloadFormShown: false,
			}
		},
		async created() {
			this.isMediaShown = false;
			this.media = await openMedia(this.$route.params.media_id);
			this.isMediaShown = true;
		},
		methods: {
			openFormDownload() {
				this.isDownloadFormShown = true;
			},
			closeForm() {
				this.isDownloadFormShown = false;
			},
		}
	}
</script>

<style scoped lang="scss">
	img {
		position: relative;
		border-radius: 3px;
		width: 100%;
	}
	h4 {
		margin-top: 0px;
	}
	.card {
		border-color: white;
	}
	.scroll-container {
		overflow-x: scroll;
		max-height: 585px;
	}
	.torrents {
		padding: 18px 6px;
		border: solid;
		border-radius: 4px;
		border-color: rgba(109, 58, 153, 0.3);
		border-width: 2px;
		width: auto;
		margin-bottom: 4px;
	}
	
</style>