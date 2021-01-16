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
								<h3>{{ torrent.name }}</h3>
								<h4 v-if="media.series_count != null">{{ media.series_count }}</h4>
								<h4>{{ torrent.voice_acting }}</h4>
								<button class="specification"><h4 class="text-center">{{ torrent.size }}</h4></button>
								<button class="specification"><h4 class="text-center">{{ torrent.quality }}</h4></button>
								<button class="specification" @click="openFormDownload">
									<font-awesome-icon :icon="['fas', 'download']" />
								</button>
								<div v-if="isDownloadFormShown">
									<div class="modal-mask">
										<div class="modal-wrapper">
											<div class="modal-container">
												<div class="modal-header">
													<h1 class="text-center">Начать загрузку?</h1>
												</div>
												<div class="modal-body text-center">
													<button class="specification" @click="download(torrent)">
														<h2 class="text-center">
															<font-awesome-icon :icon="['fas', 'check']" />
															Загрузить
														</h2>
													</button>
													<button class="specification" @click="closeForm">
														<h2 class="text-center">
															<font-awesome-icon :icon="['far', 'times-circle']" />
															Отмена
														</h2>
													</button>
												</div>
											</div>		
										</div>
									</div>
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
	import { startLoad } from './data.js'
	import ButtonBack from './ButtonBack.vue'
	import Spinner from './Spinner.vue'

	export default {
		components: {
			ButtonBack,
			Spinner
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
			async download(torrent) {
				await startLoad(torrent.id);
				this.isDownloadFormShown = false;
			}
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
	.specification {
		color: white;
		background-color: rgb(108, 2, 189);
		margin-right: 7px;
		padding: 5px 7px;
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
	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: table;
		transition: opacity 0.3s ease;
	}

	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
	}

	.modal-container {
		width: 25%;
		margin: 0px auto;
		padding: 20px 30px;
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
		transition: all 0.3s ease;
	}
	.modal-header {
		margin-top: 0;
	}
	.modal-body {
		margin: 20px 0;
	}
</style>