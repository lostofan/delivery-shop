import React from 'react'

export default function Ingridients(props) {
  const cssshit = function(){
    this.style.outline = '1px solid #4e60ff';
  }
  return (
    <div className="main__ingridients_block" onClick={cssshit}>
        <img src={require(`../../imgs/${props.link}.png`)} alt="" />
        <p>{props.name}</p>
    </div>
  )
}
