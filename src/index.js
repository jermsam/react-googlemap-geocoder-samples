import dotenv from 'dotenv'
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

dotenv.config()


ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
