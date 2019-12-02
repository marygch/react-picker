import React from 'react';
import { StringElement } from './canvasString.style'

function CanvasString(props) {
  return (
    <StringElement >
      {
        props.currentMode ?
          <section>
            <div>background: linear-gradient(to {props.direction}, {props.color1},  {props.color2});</div>
            <div>background: -webkit-linear-gradient(to {props.direction}, {props.color1}, {props.color2});</div>
            <div>background: -moz-linear-gradient(to {props.direction}, {props.color1}, {props.color2});</div>
            <div>background: -webkit-linear-gradient(to {props.direction}, {props.color1}, {props.color2});</div>
            <div>background: -o-linear-gradient(to {props.direction}, {props.color1}, {props.color2});</div>
          </section>
          :
          <section>
            <div>background: radial-gradient(circle at {props.direction}, {props.color1}, {props.color2});</div>
            <div>background: radial-gradient(circle at {props.direction}, {props.color1}, {props.color2});</div>
            <div>background: radial-gradient(circle at {props.direction}, {props.color1}, {props.color2});</div>
            <div>background: radial-gradient(circle at{props.direction}, {props.color1}, {props.color2});</div>
            <div>background: radial-gradient(circle at {props.direction}, {props.color1}, {props.color2});</div>
          </section>
      }
    </StringElement>
  );
}

export default CanvasString;