import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

// Import Redux-related components
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducer from './reducers/app-reducer'

let store = createStore(appReducer)

ReactDOM.render(
    (
        <Provider store={store}>
            <App />
        </Provider>
    ), document.getElementById('root'));
registerServiceWorker();
