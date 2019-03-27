import React from 'react';
import ReactDOM from 'react-dom';
import jest from 'jest';
import App from '../app';

jest.it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
