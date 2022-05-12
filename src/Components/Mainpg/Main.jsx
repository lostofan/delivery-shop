import React, { useState } from 'react'
import Discount from './Discount'
import Ingridients from './Ingridients'
import Restaurant from './Restaurant'

export default function Main() {

  const [blockClick, setBlockClick] = useState(false);

  const useStyle = (event) => {
    if (blockClick === false) { 
      setBlockClick(true);
    event.currentTarget.classList.add("main__ingridients_block_clicked");
    getIngridientName(event);
    } 
    else {  
      setBlockClick(false);
      event.currentTarget.classList.remove("main__ingridients_block_clicked");
    }
  }

  const getIngridientName = (event) => {
    /* compareAgain (
      event.currentTarget.lastChild.innerHTML.toLowerCase()
      ); */
  }
/* const compareAgain = (result) => {
for(let x = 0; )
}

  const compareIngridients = (result) => {
    kitchen.map (
      (obj, key) => (if (result === obj) {

      })
    )
  }
 */
  const kitchenArray = [
["sushi"],
["burger", "pizza"],
["sushi"],
["sushi"],
["sushi", "vegan"],
["sushi"],
  ];




  return (
    <main>
      <div className="main__wrapper">
        <div className="main__discount">
          <Discount num="1" name="SSS" bgcol="#F3F4FF" article="All deserts" sum="20% OFF" type="Deserty"/>
          <Discount num="2" name="WWW" bgcol="#FFF3ED" article="Big Burgers" sum="50% OFF" type="Foodies"/>
        </div>
        <div className="main__ingridients">
          <Ingridients myfn={useStyle} name="BBQ" link="bbq"/>
          <Ingridients myfn={useStyle} name="Burger" link="burger"/>
          <Ingridients myfn={useStyle} name="Pizza" link="pizza" />
          <Ingridients myfn={useStyle} name="Sushi" link="sushi"/>
          <Ingridients myfn={useStyle} name="Vegan" link="vegan"/>
          <Ingridients myfn={useStyle} name="Desserts" link="desserts"/>
        </div>
        <div className="main__restaurant">
          <div className="main__article"><p>Nearby restaurants</p></div>
          <div className="wrapper__main_restaurant">
          <Restaurant pic="royal" name="Royal Sushi House" time="30-40 min" sum="$32 min sum" kitchen={kitchenArray[0]} featured="true" />
          <Restaurant pic="burg" name="Burgers & Pizza" time="40-60 min" sum="$24 min sum" kitchen={kitchenArray[1]} featured="true" />
          <Restaurant pic="ninja" name="Ninja sushi" time="20-40 min" sum="$40 min sum" kitchen={kitchenArray[2]} />
          <Restaurant pic="master" name="Sushi master" time="60-70 min" sum="$49 min sum" kitchen={kitchenArray[3]} />
          <Restaurant pic="jap" name="Japanese sushi" time="30-50 min" sum="$104 min sum" kitchen={kitchenArray[4]} />
          <Restaurant pic="kobe" name="Kobe" time="20-30 min" sum="$57 min sum" kitchen={kitchenArray[5]} />
          </div>
        </div>
      </div>
    </main>
  )
}
