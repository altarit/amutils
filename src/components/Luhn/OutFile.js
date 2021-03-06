import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import {generateSimOut} from '../../model/generatorUtils';
import './Luhn.css';

class Luhn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 5,
      number: ' '
    };
  }

  fillIccidOut = () => {
    this.setState({
      number: generateSimOut(this.state.size, this.state.firstImsi, this.state.firstIccid),
      copied: false
    })
  }

  handleSizeChange = event => {
    this.setState({size: event.target.value});
  }

  handleFirstImsiChange = event => {
    this.setState({firstImsi: event.target.value});
  }

  handleFirstIccidChange = event => {
    this.setState({firstIccid: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>Sim Purchasing .OUT Generator</h1>
        <div className='form-group Luhn-form'>
          <label>Size</label>
          <input className='form-control Luhn-size' type='number'
                 min='1' max='1000' value={this.state.size} onChange={this.handleSizeChange}/>
        </div>
        <div className='form-group Luhn-form'>
          <label>First Imsi</label>
          <input className='form-control Luhn-field' type='text'
                 onChange={this.handleFirstImsiChange}/>
        </div>
        <div className='form-group Luhn-form'>
          <label>First Iccid</label>
          <input className='form-control Luhn-field' type='text'
                 onChange={this.handleFirstIccidChange}/>
        </div>
        <div>Take these values from the .INP file on the batch.</div>
        <br/>
        <div>
          <button className='btn btn-primary' onClick={this.fillIccidOut}>Generate Sim .OUT</button>
        </div>
        <div>
          <h3 className='Luhn-form'>Result:</h3>
          <CopyToClipboard text={this.state.number}
                           onCopy={() => this.setState({copied: true})}>
            <button className='btn btn-primary btn-xs Luhn-form'>Copy</button>
          </CopyToClipboard>
          {this.state.copied ? <span style={{color: 'green'}}>Copied</span> : null}
          <pre><p>{this.state.number}</p></pre>
        </div>
      </div>
    );
  }
}

export default Luhn;
