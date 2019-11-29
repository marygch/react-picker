import React, { Component } from 'react';
import { InputElement } from './inputElement.style'

export default class InputColor extends Component {

  handleChange = (e) => {
    this.props.onHandleFunction({ value: e.target.value });
  }
  render() {
    return (
      <InputElement color={this.props.color}>
        <div className='miniColor'> C1 </div>
        <input value={this.props.color} onChange={this.handleChange} />
      </InputElement >
    );
  }
}