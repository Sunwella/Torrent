<template>
	<div class="media-download">
		<div class="row items-center">
			<div class="col-lg-1 col-1 col-sm-1">
				<font-awesome-icon
					@click="changeDownloadState(download)"
					:class="{ 'torrent-download': download.state_original == 'downloading',
						'torrent-not-download': download.state_original != 'downloading' }"
					:icon="['fas', download.state_original == 'downloading'|| download.state_original == 'stalledDL' || download.state_original == 'metaDL' ? 'toggle-on' : 'toggle-off']" 
				/>
			</div>
			<div class="col-lg-4 col-4 col-sm-4">
				<h3 class="mt-0 mb-0">{{ download.media.title }}</h3> 
			</div>
			<div class="col-lg-4 col-4 col-sm-4">
				<div class="progress-bar">
					<div class="progress" :style="{ width: progressDownloadInPercent(download) + '%' }"></div>
				</div>
			</div>
			<div class="col-lg-2 col-2 col-sm-2">
				<h4 class="mt-0 mb-0">{{ speed(download) }}</h4>
			</div>
			<div class="col-lg-1 col-1 col-sm-1 align-end">
				<font-awesome-icon class='delete-torrent' :icon="['fas', 'trash-alt']" @click="deleteDownloadTorrent(download)" />
			</div>
		</div>
	</div>
</template>

<script>
	import { pauseDownload } from './data.js'
	import { resumeDownload } from './data.js'
	import { deleteDownload } from './data.js'

	export default {
		props: ["download"],
		methods: {
			async changeDownloadState(download) {
				if (download.state_original != 'pausedDL') {
					await pauseDownload(download.hash);
				} else {
					await resumeDownload(download.hash);
				}
			},
			async deleteDownloadTorrent(download) {
				await deleteDownload(download.hash);
			},
			progressDownloadInPercent(download) {
				return download.progress * 100;
			},
			speed(download) {
				let humanizeData = require('humanize-data');
				return humanizeData(download.download_speed_in_bytes_per_second) + '/c';
			}
		}
	}
</script>

<style scoped lang="scss">
	.progress-bar {
		border: 1px solid;
		border-radius: 4px;
		background-color: white;
		width: 250px;
		height: 35px;
	}
	.progress {
		border-radius: 4px;
		height: 100%;
		background-color: rgb(65, 242, 160);
	}
	.items-center {
		align-items: center;
	}
	.align-end {
		text-align: end;
	}
	.torrent-download {
		font-size: 34px;
		color: rgb(84, 207, 60);
	}
	.torrent-not-download {
		font-size: 34px;
		color: rgb(255, 190, 26);
	}
	.delete-torrent {
		color: rgb(255, 0, 0);
	}
	.media-download {
		background-color: rgba(74, 74, 74, 0.05);
		border-radius: 6px;
		padding: 12px 18px;
		margin-bottom: 12px;
	}
</style>