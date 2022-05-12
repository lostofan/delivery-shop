import React from 'react'

export default function Ingridients(props) {

  
  return (
    <div className="main__ingridients_block" onClick={props.myfn}>
        <img src={require(`../../imgs/${props.link}.png`)} alt="" />
        <p>{props.name}</p>
    </div>
  )
}
