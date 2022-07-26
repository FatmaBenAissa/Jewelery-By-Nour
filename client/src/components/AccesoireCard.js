import React from 'react'
import "./accessoire.css"
import Accdescr from './Accdescr'
const AccesoireCard = ({accessoire}) => {
    
  return (
    <div className='body22'>
    <div className="containerrr">
  <div className="imagess">
    <img  src={accessoire.image} style={{maxHeight:"300px", minHeight:"300px", marginTop:"20px"}}/>
  </div>
  <div className="slideshow-buttonss">
    <div className="onee" />
    <div className="twoo" />
    <div className="threee" />
    <div className="fourr" />
  </div>
 
  <div className="productt">
    <p>{accessoire.name}</p>
    
    <h2>{accessoire.price}</h2>
    <p className="descr">
      {accessoire.description}
    </p>
  <Accdescr accessoire={accessoire}/>

    
  </div>
</div>
</div>
  )
}

export default AccesoireCard