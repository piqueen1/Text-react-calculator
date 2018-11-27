import React, { Component } from 'react';
import './styles.css';

class Buttons extends Component {
  // constructor() {
  //   super()
  //   this.state = { operations: [] }
  // }

  render() {
    return (
      <div className="Buttons">
        {this.props.children}
      </div>
    );
  }
}

export default Buttons;