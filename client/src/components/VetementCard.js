import React from 'react'
import { Link } from 'react-router-dom'
import Description from './Description'
import "./vetement.css"
const vetementCard = ({vetement}) => {
   
  return (
    <div className='body22'>
    <div className="containerrr">
  <div className="imagess">
    <img  src={vetement.image} style={{maxHeight:"300px", minHeight:"300px", marginTop:"20px"}}/>
  </div>
  <div className="slideshow-buttonss">
    <div className="onee" />
    <div className="twoo" />
    <div className="threee" />
    <div className="fourr" />
  </div>
 
  <div className="productt">
    <p>{vetement.name}</p>
    
    <h2>{vetement.price}</h2>
    <p className="descr">
      {vetement.description}
    </p>
  <Description  vetement={vetement}/>

    
  </div>
</div>
</div>
  )
}

export default vetementCard