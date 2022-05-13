import React from 'react'

export default function Foodpicker(props) {
  return (
    <div className="restaurant__block_type">
            <img src={require(`../../imgs/${props.name}.png`)} alt="" />
            <p>{props.name}</p>
        </div>
  )
}
