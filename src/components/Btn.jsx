import React from 'react'
import GooglePlay from '../images/play.png'

function Btn(props) {
    return (
      <button onClick={props.onClick} className={props.className}>
        <img src={GooglePlay} alt="" />
      </button>
    );
  }

export default Btn