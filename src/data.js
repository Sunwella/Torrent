import axios from 'axios'

export async function loadTrackers() {
	let response = await axios.get('http://media.mkraust.ru/api/trackers');
	return response.data;
}

export async function searchMedia(tracker_id, search_query) {
	let response = await axios.get('http://media.mkraust.ru/api/search', {
		params: {
			tracker_id,
			search_query,
			offset: 0
		}
	});
	return response.data;
}

export async function openMedia(id) {
	let response = await axios.get('http://media.mkraust.ru/api/media', {
		params: {
			id
		}
	});
	return response.data;
}

export async function getFavoriteList() {
	let response = await axios.get('http://media.mkraust.ru/api/favorites/list');
	return response.data;
}

export async function addFavorite(id) {
	await axios.post('http://media.mkraust.ru/api/favorites/add', { id });
}

export async function removeFavorite(id) {
	await axios.post('http://media.mkraust.ru/api/favorites/remove', { id });
}

export async function startLoad(id) {
	await axios.post('http://media.mkraust.ru/api/download', { id });
}

export async function getDownloadList() {
	let response = await axios.get('http://media.mkraust.ru/api/download/list');
	return response.data;
}

export async function pauseDownload(hash) {
	await axios.post('http://media.mkraust.ru/api/download/pause', { hash });
}

export async function resumeDownload(hash) {
	await axios.post('http://media.mkraust.ru/api/download/resume', { hash });
}

export async function deleteDownload(hash) {
	await axios.post('http://media.mkraust.ru/api/download/delete', { hash });
}

