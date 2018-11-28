import React, { Component } from 'react';
import './styles.css';
import Display from '../Display/index.jsx';
import Buttons from '../Buttons/index.jsx';
import Button from '../Button/index.jsx';
import update from 'immutability-helper';
import math from 'mathjs';

class App extends Component {
  constructor() {
    super()
    this.state = { operations: [] }
  }

  calculateOperations = () => {
    let result = this.state.operations.join('')
    if (result) {
      result = math.eval(result)
      result = math.format(result, { precision: 14 })
      result = String(result)
      this.setState({
        operations: [result],
      })
    }
  }

  handleClick = e => {
    const value = e.target.getAttribute('data-value')

    switch (value) {
      case 'clear':
        this.setState({
          operations: [],
        })
        break
      case 'equal':
        this.calculateOperations()
        break
      default:
        const newOperations = update(this.state.operations, {
          $push: [value],
        })
        this.setState({
          operations: newOperations,
        })
    }
  }

  render() {
    return (
      <div className="App">
        <Display className="Display" data={this.state.operations} />
        <Buttons className="Buttons">
          <Button className="Button" onClick={this.handleClick} label="CLEAR" value="clear" />
          <Button className="Button" onClick={this.handleClick} label="7" value="7" />
          <Button className="Button" onClick={this.handleClick} label="4" value="4" />
          <Button className="Button" onClick={this.handleClick} label="1" value="1" />
          <Button className="Button" onClick={this.handleClick} label="0" value="0" />

          <Button className="Button" onClick={this.handleClick} label="/" value="/" />
          <Button className="Button" onClick={this.handleClick} label="8" value="8" />
          <Button className="Button" onClick={this.handleClick} label="5" value="5" />
          <Button className="Button" onClick={this.handleClick} label="2" value="2" />
          <Button className="Button" onClick={this.handleClick} label="." value="." />

          <Button className="Button" onClick={this.handleClick} label="X" value="*" />
          <Button className="Button" onClick={this.handleClick} label="9" value="9" />
          <Button className="Button" onClick={this.handleClick} label="6" value="6" />
          <Button className="Button" onClick={this.handleClick} label="3" value="3" />
          <Button label="" value="null" />

          <Button className="Button" onClick={this.handleClick} label="-" value="-" />
          <Button className="Button" onClick={this.handleClick} label="+" size="2" value="+" />
          <Button className="Button" onClick={this.handleClick} label="=" size="2" value="equal" />
        </Buttons>
      </div>
    );
  }
}

export default App;
