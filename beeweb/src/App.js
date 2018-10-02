import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">

      // <div className="App-header">
      // <div className="Logo-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      // </div>
           
      //      <span className="Title-header"></span>
      // </div>
       
      //   <p className="App-intro">
      // !!!   happy New year 2019 !!!
      //   </p>
      // </div>

      <div className="App-header">
      <table className="Title-Table">
        <tr>
          <td className="Title-Tdleft"  ><img src={logo} className="App-logo" alt="logo" /></td>
          <td ></td>
        </tr>
      </table>

      </div>
    );
  }
}

export default App;
