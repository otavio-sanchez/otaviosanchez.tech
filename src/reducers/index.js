import { combineReducers } from 'redux';
import articlesReducer from '../app/modules/Articles/store/reducer';
import projectsReducer from '../app/modules/News/store/reducer';

export default combineReducers({
	articles: articlesReducer,
	projects: projectsReducer,
});
