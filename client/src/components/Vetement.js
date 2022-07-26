import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import VetementCard from './VetementCard'

function Vetement() {

  const vet= useSelector((state=>state.vetement.vetements))
  console.log(vet)
 
  return (
    
    <div style={{
      width:'100%',
      display:'flex',
flexWrap:'wrap',
justifyContent:'space-around',
marginTop:"130px"
    }}>{vet?vet.map((el)=><VetementCard vetement={el}/>):<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"/> } </div>
  )
}

export default Vetement