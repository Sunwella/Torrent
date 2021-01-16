export function linksData() {
	return [
		{
			path:'/', 
			component: 'HomePage', 
			title: 'Главная' },
		{
			path:'/trackers', 
			component: 'Trackers', 
			title: 'Трекеры' },
		{
			path:'/favorites', 
			component: 'Favorites', 
			title: 'Избранное' },
		{
			path:'/download', 
			component: 'Download', 
			title: 'Загрузки' }
	]
}