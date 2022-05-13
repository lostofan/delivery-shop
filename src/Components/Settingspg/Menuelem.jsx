import React from 'react'

export default function Menuelem(props) {
  return (
    <div className='menu__elem_wrapper'>
        <div className="menu__elem_img">
            <img src={require(`../../imgs/${props.link}.png`)} alt="" />
        </div>
        <div className="menu__elem_txt">
            <p>{props.article}</p>
            <p>{props.description}</p>
        </div>
    </div>
  )
}
