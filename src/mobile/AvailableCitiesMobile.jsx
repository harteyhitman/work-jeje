import React from 'react'
import SmillingDelivery from '../images/smile-delivery.png'
import Availablecity from './Availablecity'

const AvailableCitiesMobile = () => {
  return (
    <div className='availablecities-mobile'>
    <h1>Available in multiple cities.</h1>
    <p>Work jeje is avalable in multiple big cities 
    nationwide, so you can find a professional even 
    when you are far from home.</p>
    <img src={SmillingDelivery} alt="" />
    <h1>Frequently Asked Questions.</h1>
   
    {Availablecity.map((availab) => (
       <div key={availab.id} className='availablecities-mobile'> 
       <h5 className="avail" >{availab.Reasons}</h5>
        <p>{availab.Described}</p></div>
      ))}
    </div>
   
  )
}

export default AvailableCitiesMobile