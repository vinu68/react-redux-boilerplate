import { ASYNC_IN_PROGRESS, DATA_FETCHING_SUCCEEDED } from '../actionTypes';

const initialState = {
	data: [],
	info: {},
	asyncInProgress: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ASYNC_IN_PROGRESS: {
			let asyncInProgress = { asyncInProgress: action.loading };
			return { ...state, ...asyncInProgress };
		}
		case DATA_FETCHING_SUCCEEDED: {
			let data = { data: action.data.results };
			let info = { info: action.data.info };
			return { ...state, ...data, ...info };
		}
		default:
			return state;
	}
}
