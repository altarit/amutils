import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from './logo.svg';
import bug from './bug.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.constructor');
    this.state = {
      logo: logo
    };
  }

  changeLogo = () => {
    this.setState({
      logo: bug
    });
  }

  render() {
    console.log('App.render');
    return (
      <div className='container'>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <img src={this.state.logo} className='App-logo' alt='logo' onClick={this.changeLogo}/>
              <NavLink activeClassName='active' to='/' className='navbar-brand'>AM Utils</NavLink>
            </div>
            <ul className='nav navbar-nav'>
              <li><NavLink activeClassName='active' to='/tools/luhn'>Iccid/Imei</NavLink></li>
              <li><NavLink activeClassName='active' to='/tools/outfile'>Sim .OUT</NavLink></li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;

