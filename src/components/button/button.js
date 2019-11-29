import React, { Component } from 'react';
import { ButtonElement } from './button.style'


export default class CustomButton  extends Component{ 
 
  handleClik=()=>{
    this.props.onHandleFunction(this.props.parameters  || false);
 }
  render() {
  return (
    <ButtonElement >
      <section
        onClick={this.handleClik}
        className={`button instagram ${this.props.active && 'active'}`} >
        < span className="gradient" > </span>{this.props.title}
      </section>
    </ButtonElement >
  );
  }
}