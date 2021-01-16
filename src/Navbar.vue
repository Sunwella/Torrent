<template>
		<div>
			<div class="navbar d-none d-md-block">
				<nav>
					<div class="container">
						<ul class="inline">
							<div v-for="title in titles" :key="title.component">
								<li><router-link :to="title.path" class="nav-decoration-non text-white"><h1>{{ title.title }}</h1></router-link></li>
							</div>
						</ul>
					</div>
				</nav>
			</div>

			<div class="navbar d-md-none">
				<nav>
					<div class="container">
						<font-awesome-icon class="py-7" :icon="['fas', 'bars']" @click="openMenu" :style="{ color: '#ffffff', 'font-size': '34px' }"/>
					</div>
					<div v-if="isMenuOpen">
						<div class="container">
							<div class="row">
								<div class="col-12">
									<div v-for="title in titles" :key="title.component">
										<router-link :to="title.path" class="nav-decoration-non text-white"><h1>{{ title.title }}</h1></router-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
</template>

<script>
	import {linksData} from './linksData.js'

	export default {
		data() {
			return {
				isMenuOpen: false,
				titles:[],
			}
		},
		created() {
			this.titles = linksData();
		},
		methods: {
			openMenu() {
				this.isMenuOpen = !this.isMenuOpen;
			}
		}
	}
</script>

<style scoped lang="scss">
	h4 {
		margin-bottom: 13px;
		font-family: Gill Sans, sans-serif;
		font-weight: 300;
	}
	li {
		list-style: none;
		padding-right: 31px;
	}
	.navbar {
		margin: 0px;
		padding: 0px;
		background-color: rgb(108, 2, 189);
	}
	.nav-decoration-non {
		text-decoration: none;
	}
	.text-white {
		color: white;
	}
	.inline {
		display: flex;
		flex-direction: row;
		padding-left: 0px;
		margin-bottom: -5px;
		margin-top: -5px;
	}
</style>