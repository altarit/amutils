import React from 'react';
import {generateIccid, generateImei} from '../../model/generatorUtils'
import './Luhn.css';

class Luhn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 1
    };
  }

  fillIccid = () => {
    this.setState({
      number: generateIccid(this.state.size, this.state.first)
    })
  }

  fillImei = () => {
    this.setState({
      number: generateImei(this.state.size, this.state.first)
    })
  }

  handleSizeChange = event => {
    this.setState({size: event.target.value});
  }

  handleFirstChange = event => {
    this.setState({first: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>Iccid/Imei generator</h1>
        <div className='form-group Luhn-form'>
          <label>Size</label>
          <input className='form-control Luhn-size' type='number'
                 min='1' max='1000' value={this.state.size} onChange={this.handleSizeChange}/>
        </div>
        <div className='form-group Luhn-form'>
          <label>Start</label>
          <input className='form-control Luhn-field' type='text'
                 onChange={this.handleFirstChange}/>
        </div>
        <div>
          <button className='btn btn-primary Luhn-form' onClick={this.fillIccid}>Generate Iccid</button>
          <button className='btn btn-primary Luhn-form' onClick={this.fillImei}>Generate Imei</button>
        </div>
        <div>
          <h3>Result:</h3>
          <pre><p>{this.state.number}</p></pre>

        </div>
      </div>
    );
  }
}

export default Luhn;
