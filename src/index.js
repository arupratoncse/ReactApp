import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free'
import '@fortawesome/free-solid-svg-icons'

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
