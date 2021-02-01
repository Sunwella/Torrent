<template>
	<div>
		<div class="container">
			<h1>Загрузки</h1>
			<hr>

			<div v-if="downloadList.length > 0">
				<div v-for="download in downloadList" :key="download.media.id">
					<DownloadItem :download="download" />
				</div>
			</div>

			<div v-else>
				<h1>В данный момент нет активных загрузок</h1>
			</div>
		</div>
	</div>
</template>

<script>
	import { getDownloadList } from './data.js'
	import DownloadItem from './DownloadItem.vue'

	export default {
		components: {
			DownloadItem
		},
		data() {
			return {
				downloadList: [],
				update: null,
			}
		},
		async created() {
			this.downloadList = await getDownloadList();
			this.update = setInterval( async () => (this.downloadList = await getDownloadList()), 2000);	
		},
		beforeDestroy() {
			clearInterval(this.update);
		}
	}
</script>

