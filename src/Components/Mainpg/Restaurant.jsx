import React, {useState} from 'react';
import Foodpicker from './Foodpicker';


    

export default function Restaurant(props) {
const [style, setStyle] = useState('bagemp.png');
const [buycount, setBuycount] = useState(1);
const addFood = (event) => {
    setStyle('bag.png');
    setBuycount(buycount + 1);
    const baganim = document.createElement('div');
    baganim.className = 'bag__popup';
    baganim.innerHTML = buycount;
    event.target.parentNode.append(baganim);
}

  return (    
    <div className="main__restaurant__block" id={"restaurant__block_"+props.id}>
        { props.featured && (<div className="restaurant__block_featured">FEATURED</div>)}
        <div className="restaurant__block_img"><img src={require(`../../imgs/${props.pic}.png`)} alt="" draggable="false" /></div>
        <div className="wrapper__restaurant_txt">
        <div className="restaurant__block_article"><p>{props.name}</p><div className="restaurant__img_bag"><img onClick={addFood} src={require(`../../imgs/${style}`)} alt="" /></div></div>
        <div className="restaurant__block_info">
            <img src={require(`../../imgs/clock.png`)} alt="" />
            <p>{props.time}</p>
            <div className="restaurant__block_dot"></div>
            <p>{props.sum}</p>
        </div>
        <div className="wrapper__restaurant_type">
          {props.kitchen.map(( name ) => 
        <Foodpicker name={name} />)}
        </div>
        
        </div>

    </div>
  )
}