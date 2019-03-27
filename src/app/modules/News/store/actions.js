
import type from './action-type';

const listProjects = search => async (dispatch) => {
	dispatch({
		type: type.GITHUB_PROJECTS,
		loading: true,
		projects: [],
		error: null,
	});

	search.then(({ data }) => {
		dispatch({
			type: type.GITHUB_PROJECTS,
			loading: false,
			projects: data.map(project => ({
				url: project.html_url,
				name: project.name,
				date: project.created_at,
				type: 'GitHub',
			})),
		});
	})
		.catch((error) => {
			dispatch({
				type: type.GITHUB_PROJECTS,
				loading: false,
				projects: [],
				error,
			});
		});
};

export default { listProjects };
