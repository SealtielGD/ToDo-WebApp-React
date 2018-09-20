import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

// redux
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

// create redux store -> reducers -> 'actions - actionType'| applyMiddleware()

const store = createStore(rootReducer, composeWithDevTools());

// provide the store to react

ReactDOM.render(
	<Provider store = {store}> 
	<App/> 
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
