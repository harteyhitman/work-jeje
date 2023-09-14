import React from 'react'
import Applestore from '../images/App Store.png'

function Btn1(props) {
    return (
      <button onClick={props.onClick} className={props.className}>
      <a href="https://apps.apple.com/ng/app/workjeje/id1628757239"> 
      <img src={Applestore} alt="" />
</a>
      </button>
    );
  }

export default Btn1