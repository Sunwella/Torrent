<template>
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
</template>

<script>
	import { startLoad } from './data.js'

	export default {
		methods: {
			async download(torrent) {
				await startLoad(torrent.id);
				this.$emit("close-form");
			},
			closeForm() {
				this.$emit("close-form");
			}
		}
	}
</script>

<style scoped lang="scss">
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
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.33);
		transition: all 0.3s ease;
	}
	.modal-header {
		margin-top: 0;
	}
	.modal-body {
		margin: 20px 0;
	}

</style>