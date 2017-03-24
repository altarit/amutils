import React from 'react';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className='Home-container'>
        <h1>AM Utils</h1>
        Couple of tools to generate Iccid/Imei numbers. Some more features might be added in the future.
        If you have questions and suggestions feel free to create an issue
        on <a href='https://github.com/altarit/amutils'>GitHub</a> or fork the repository.
        <br/><br/>
        Old version you can find on <a href='https://run.plnkr.co/plunks/YzKWjEECGOH0EVJ8zog4/simout.html'>Plunker</a>.
      </div>
    );
  }
}

export default Home;
