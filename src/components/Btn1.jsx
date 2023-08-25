import React from 'react'
import Applestore from '../images/App Store.png'

function Btn1(props) {
    return (
      <button onClick={props.onClick} className={props.className}>
        <img src={Applestore} alt="" />
      </button>
    );
  }

export default Btn1