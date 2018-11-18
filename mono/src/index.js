import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index'
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const store = createStore(rootReducer)



ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
