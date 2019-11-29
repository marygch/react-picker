import React, { Component } from 'react';

import { GradienteContainer, GradientElement, RadialElement } from './gradient.style';
import CustomButton from '../button/button';
import InputColor from '../inputColor/inputColor';
export default class Gradient extends Component {
  state = {
    direction: 'top',
    currentMode: true,
    color1: "#FFF",
    color2: "#7A7FBA"
  };

  onHandleDirection = ({ value }) => {
    this.setState({ direction: value })
  }

  onHandleMode = () => {
    const currentMode = !this.state.currentMode;
    this.setState({ currentMode })
  }
  setColor1 = ({ value }) => {
    console.log("color 1 ", value)
    this.setState({ color1: value });
  }

  setColor2 = ({ value }) => {
    console.log("color 2 ", value)
    this.setState({ color2: value });
  }

  render() {
    const { direction, currentMode, color1, color2 } = this.state;
    const directions = [
      { name: 'Top', value: 'top' },
      { name: 'Top Right', value: 'top right' },
      { name: 'Right', value: 'Right' },
      { name: 'Bottom Right', value: 'bottom right' },
      { name: 'Bottom', value: 'bottom' },
      { name: 'Bottom Left', value: 'bottom left' },
      { name: 'Left', value: 'left' },
      { name: 'Top Left', value: 'top left' },
    ]
    return (
      <GradienteContainer color1={color1} color2={color2} >
        <div className="header">
          <b>CSS GRADIENT</b>
          <span>Gradient Generator for Lineal and Radial Css Color gradients.</span>
          <span>Maria Garcia-Chavez</span>
        </div>

        <div className="body-gradient">
          <div>
            <div className='row'><b> STYLE</b></div>
            <div className='row'>
              <div className='column'>
                <CustomButton active={currentMode} title="Linear" onHandleFunction={this.onHandleMode} />
              </div>
              <div className='column'>
                <CustomButton active={!currentMode} title="Radio" onHandleFunction={this.onHandleMode} />
              </div>
            </div>
            <div className='row'><b> DIRECTION</b></div>
            <div className='row'>
              {
                directions.map((currentDirection, index) =>
                  <div className='column' key={index} id={index} >
                    <CustomButton parameters={{ value: currentDirection.value }} active={currentDirection.value === direction} title={currentDirection.name} onHandleFunction={this.onHandleDirection} />
                  </div>)
              }
            </div>
            <div className='row'><b> COLORS</b></div>
            <div className='row' key="colors" id="colors">
              <InputColor color={color1} onHandleFunction={this.setColor1} ></InputColor>
            </div>
            <div className='row'>
              <InputColor color={color2} onHandleFunction={this.setColor2} ></InputColor>
            </div>
          </div>
          <div className='row-fix'>
            {
              currentMode ?
                <GradientElement key="linear" id="linear" linear={direction} color1={color1} color2={color2} />
                :
                <RadialElement key="radial" id="radial" linear={direction} color1={color1} color2={color2} />
            }
            <div className="stringStyle">
              {
                currentMode ?
                  ` background: linear-gradient(to ${direction}, ${color1}, ${color2});`
                  :
                  ` background:  radial-gradient(circle at ${direction}, ${color1}, ${color2});`

              }
            </div>
          </div>
        </div >
      </GradienteContainer >


    );
  }
}



