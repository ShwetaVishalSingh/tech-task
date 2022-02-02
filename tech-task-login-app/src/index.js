import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routes from "./Routes";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div className="App">
            <Routes />
        </div>
    </Router>,
  document.getElementById('root')
);

