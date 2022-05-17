import React, {useState} from 'react'

const dashb = {
  bbq: [],
  burger: [],
  pizza: [],
  sushi: [],
  vegan: [],
  desserts: [],
}

export default function Ingridients(props) {
  const [blockClick, setblockClick] = useState(false);
  return (
    <div className="main__ingridients_block" id={"ingridients_"+props.id} onClick={(event) => {props.myfn(event, blockClick, setblockClick, dashb)}}>
        <img src={require(`../../imgs/${props.link}.png`)} alt="" />
        <p>{props.name}</p>
    </div>
  )
}
