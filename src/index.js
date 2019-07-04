import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'zent/css/index.css';
import './global'
import MRoute from './routes/index';

// import registerServiceWorker from './registerServiceWorker';

const mountNode = document.getElementById('root');
ReactDOM.render(
    <MRoute />,
    mountNode
);
// registerServiceWorker();




