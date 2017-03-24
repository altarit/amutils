import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './components/App/App';
import Home from './components/Home/Home';
import Luhn from './components/Luhn/Luhn';
import OutFile from './components/Luhn/OutFile';
import NotFound from './components/ErrorPages/NotFound';
import './index.css';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path='/' component={Home}/>
      <Route path='/tools/luhn' component={Luhn}/>
      <Route path='/tools/outfile' component={OutFile}/>
      {/* <Route path='*' component={NotFound}/> */}
    </App>
  </Router>,
  document.getElementById('root')
);
