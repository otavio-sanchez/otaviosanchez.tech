import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import multi from 'redux-multi';
import reduxLogger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';

import reducers from '../reducers';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
	multi,
	thunk,
	promise,
	reduxLogger,
	routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
	const { devToolsExtension } = window;

	const devToolsExtensionWindow = devToolsExtension;

	if (typeof devToolsExtensionWindow === 'function') {
		enhancers.push(devToolsExtensionWindow());
	}
}

const rootReducer = (state, action) => reducers(state, action);

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers,
);

const store = createStore(
	rootReducer,
	initialState,
	composedEnhancers,
);

export default store;
