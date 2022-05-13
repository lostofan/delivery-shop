import React, {useState} from 'react'

export default function Ingridients(props) {
  const [blockClick, setblockClick] = useState(false);
  return (
    <div className="main__ingridients_block" onClick={(event) => {props.myfn(event, blockClick, setblockClick)}}>
        <img src={require(`../../imgs/${props.link}.png`)} alt="" />
        <p>{props.name}</p>
    </div>
  )
}
