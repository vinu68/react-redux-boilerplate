import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

import { Provider } from 'react-redux';
import configureStore from './store';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const App = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
