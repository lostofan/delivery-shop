import React, {useState} from 'react'


    

export default function Restaurant(props) {
const [style, setStyle] = useState('bagemp.png');
const [buycount, setBuycount] = useState(1);
const huita = (event) => {
    setStyle('bag.png');
    setBuycount(buycount + 1);
    let newshit = document.createElement('div');
    newshit.className = 'geek';
    newshit.innerHTML = buycount;
    event.target.parentNode.append(newshit);


}
  return (    
    <div className="main__restaurant__block">
        { props.featured && (<div className="restaurant__block_featured">FEATURED</div>)}
        <div className="restaurant__block_img"><img src={require(`../../imgs/${props.pic}.png`)} alt="" /></div>
        <div className="wrapper__restaurant_txt">
        <div className="restaurant__block_article"><p>{props.name}</p><div className="restaurant__img_bag"><img onClick={huita} id="huy" src={require(`../../imgs/${style}`)} alt="" /></div></div>
        <div className="restaurant__block_info">
            <img src={require(`../../imgs/clock.png`)} alt="" />
            <p>{props.time}</p>
            <div className="restaurant__block_dot"></div>
            <p>{props.sum}</p>
        </div>
        <div className="restaurant__block_type">
            <img src={require(`../../imgs/sushi.png`)} alt="" />
            <p>Sushi</p>
        </div>
        </div>

    </div>
  )
}
