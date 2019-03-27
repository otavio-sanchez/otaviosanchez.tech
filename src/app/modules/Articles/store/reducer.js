import type from './action-type';

const initialState = {
	list: [],
	loading: false,
	error: null,
};


export default (state = initialState, action) => {
	switch (action.type) {
		case type.SEARCH_ARTICLE:
			return {
				...state,
				list: action.articles,
				error: action.error,
				loading: action.loading,
			};
		default:
			return state;
	}
};
