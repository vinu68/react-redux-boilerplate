import { ASYNC_IN_PROGRESS, DATA_FETCHING_SUCCEEDED } from '../actionTypes';
import axios from 'axios';

import constants from '../config';

export function fetchData(page, querystring, searchedValue) {
	return function (dispatch) {
		dispatch({ type: ASYNC_IN_PROGRESS, loading: true });
		let url = constants.API_URL;
		url += '?page=' + (page ? page : 1) + (querystring ? '&' + querystring : '');
		url += searchedValue ? '&name=' + searchedValue : '';

		axios.get(url).then((response) => {
			dispatch({ type: DATA_FETCHING_SUCCEEDED, data: response.data });
			dispatch({ type: ASYNC_IN_PROGRESS, loading: false });
		});
	};
}
