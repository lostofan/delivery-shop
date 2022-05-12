import React from 'react'

export default function Discount(props) {
  return (
    <div className="main__discount_block" style={{backgroundColor: props.bgcol }}>
        <div className="discount__logo"><img src={require(`../../imgs/promo${props.num}.png`)} alt="" /></div>
        <div className="discount__txt">
        <p className="discount__txt_article">{props.article}</p>
        <p className="discount__txt_sum">{props.sum}</p>
        <p className="discount__txt_type">{props.type}</p>
    </div>
    </div>
  )
}
