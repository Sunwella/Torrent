<template>
	<div>
		<h3>{{ torrent.name }}</h3>
		<h4 v-if="media.series_count != null">{{ media.series_count }}</h4>
		<h4>{{ torrent.voice_acting }}</h4>
		<button class="specification"><h4 class="text-center">{{ torrent.size }}</h4></button>
		<button class="specification"><h4 class="text-center">{{ torrent.quality }}</h4></button>
		<button class="specification" @click="openFormDownload">
			<font-awesome-icon :icon="['fas', 'download']" />
		</button>
	</div>
</template>

<script>
	export default {
		props: ["torrent", "media"],
		methods: {
			openFormDownload() {
				this.$emit("open-form-download");
			}
		}
	}
</script>