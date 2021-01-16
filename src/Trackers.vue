<template>
	<div class="container">
			<h1>Трекеры</h1>
			<hr>
			<div class="row">
				<template v-for="tracker in $trackers" >
					<div :key="tracker.id" class="col-lg-2 col-md-2 col-sm-2 col-4">
						<router-link :to="`/${tracker.id}/search`" class="link-decoration-non">
							<div class="card text-center">
								<img :src="tracker.icon" class="icon">
								<p>{{ tracker.title }}</p>
							</div>
						</router-link>
					</div>
				</template>
			</div>
		</div>
</template>

<script>
	export default {

	}
</script>