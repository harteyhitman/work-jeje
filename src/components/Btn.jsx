import React from 'react'
import GooglePlay from '../images/play.png'

function Btn(props) {
    return (
      <button onClick={props.onClick}
       className={props.className}>
      <a href="https://play.google.com/store/apps/details?id=com.stellaredge.workjeje">
      <img src={GooglePlay} alt="" />
</a>
      </button>
    );
  }

export default Btn