import React, { Component } from 'react';

import { GradienteContainer, GradientElement, RadialElement } from './gradient.style';

export default class Gradient extends Component {
  state = {
    direction: 'top',
    linearMode: true,
    color1: "#FFF",
    color2: "#7A7FBA"
  };

  setDirection = (e) => {
    const direction = e.target.value;
    this.setState({ direction })
  }

  setMode = (e) => {
    const linearMode = !this.state.linearMode;
    this.setState({ linearMode })
  }
  setColor1 = (e) => {
    this.setState({ color1: e.target.value });
  }

  setColor2 = (e) => {
    console.log(" color 2 ", e.target.value)
    this.setState({ color2: e.target.value });
  }

  render() {
    const { direction, linearMode, color1, color2 } = this.state;
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
          <span>Gradient Generator for Lineal and Radial Css Color gradients</span>
          <span>Maria Garcia-Chavez</span>
        </div>
        <div className="body">
          <div className="p">
            <div className='row'><b> STYLE</b></div>
            <div className='row'>
              <div className='column'>
                <div className='blue-column'>
                  <button className={`button  ${(linearMode) && 'active'}`} onClick={this.setMode} >Linear</button>
                </div>
              </div>
              <div className='column'>
                <div className='green-column'>
                  <button className={`button  ${(!linearMode) && 'active'}`} onClick={this.setMode} >Radio</button>
                </div>
              </div>
            </div>
            <div className='row'><b> DIRECTION</b></div>
            <div className='row'>
              {
                directions.map(currentDirection =>
                  <div className='column' >
                    <div >
                      <button className={`button ${(currentDirection.value === direction) && 'active'}`} value={currentDirection.value} onClick={this.setDirection}>
                        {currentDirection.name}
                      </button>
                    </div>
                  </div>
                )
              }
            </div>
            <div className='row'><b> COLORS</b></div>

            <div className='row' key="colors" id="colors">
              <div className='colors1'>C1 </div>
              <div className='column' key="colors-c" id="colors-r">
                <input id="fname" name="firstname" value={color1} onChange={this.setColor1} />
              </div>
            </div>
            <div className='row'>
              <div className='colors2'>C2 </div>
              <div className='column'>
                <input id="fname" name="firstname" value={color2} onChange={this.setColor2} />
              </div>
            </div>
          </div>



          <div className='row-fix'>
            {
              linearMode ?
                <GradientElement key="linear" id="linear" linear={direction} color1={color1} color2={color2} />
                :
                <RadialElement key="radial" id="radial" linear={direction} color1={color1} color2={color2} />
            }
            <div className="stringStyle">
              {
                linearMode ?
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



