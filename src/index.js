import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider, connect } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { createStore, applyMiddleware } from 'redux';
import { searchRobots } from './reducers/reducers';

const store = createStore(searchRobots)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
        );
registerServiceWorker();
