import React, { Component } from 'react';
import './styles.css';

class Display extends Component {
  // constructor() {
  //   super()
  //   this.state = { operations: [] }
  // }

  render() {
    const string = this.props.data.join('');
    return (
      <div>
       {string}
      </div>
    );
  }
}

export default Display;