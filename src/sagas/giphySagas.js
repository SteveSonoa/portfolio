import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../reducers/giphyReducer';

// This is exposed on every API call; it is not kept secret
const giphyKey = '6g4Yoiy68x5SM9ZJOTbrTJ6TaGNg783E';
// const giphyKey = '6g4Yoiy65SM9ZJOTbrTJ6TaGNg783E';

// GET GIPHY IMAGES
export function dofetchGiphyImages(searchTerms, numResults = 8) {
	return axios
        .get(`https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${searchTerms}&limit=${numResults}&offset=${Math.floor(Math.random() * 20)}&rating=G&lang=en`)
		.then(res => res.data.data.map(img => img.images.original.url))
		.catch(err => {
			throw err;
		});
}

export function* fetchGiphyImages({ searchTerms }) {
	try {
		const payload = yield call(dofetchGiphyImages, searchTerms);
		yield put({
			type: actions.FETCH_GIPHY_IMAGES_SUCCESS,
			payload
		});
	} catch (error) {
		yield put({
			type: actions.FETCH_GIPHY_IMAGES_ERROR,
			errorDetail: error.message
		});
	}
}

export const giphySagas = [
	takeLatest(actions.FETCH_GIPHY_IMAGES, fetchGiphyImages),
];
