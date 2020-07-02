import { ASYNC_IN_PROGRESS, DATA_FETCHING_SUCCEEDED } from '../actionTypes';
import axios from 'axios';

import constants from '../config';

export function fetchData() {
	return function (dispatch) {
		console.log('hello');
		dispatch({ type: ASYNC_IN_PROGRESS, loading: true });
		let url = constants.API_URL;
		//+ '?page=' + (page ? page : '1') + (queryUrl ? '&' + queryUrl : '');
		axios.get(url).then((response) => {
			console.log('response', response);
			dispatch({ type: DATA_FETCHING_SUCCEEDED, data: response.data });
			dispatch({ type: ASYNC_IN_PROGRESS, loading: false });
		});
	};
}
