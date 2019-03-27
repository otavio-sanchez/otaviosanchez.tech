import type from './action-type';

const initialState = {
	list: [],
	loading: false,
	error: null,
};


export default (state = initialState, action) => {
	switch (action.type) {
		case type.GITHUB_PROJECTS:
			return {
				...state,
				list: action.projects,
				error: action.error,
				loading: action.loading,
			};
		default:
			return state;
	}
};
