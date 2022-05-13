import React from 'react'
import Discount from './Discount'
import Ingridients from './Ingridients'
import Restaurant from './Restaurant'

export default function Main() {


  const useStyle = (event, blockClick, setBlockClick) => {
    console.log(blockClick);
    if (blockClick === false) { 
      setBlockClick(true);
    event.currentTarget.classList.add("main__ingridients_block_clicked");
    getIngridientName(event, true);
    } 
    else {  
      setBlockClick(false);
      event.currentTarget.classList.remove("main__ingridients_block_clicked");
      getIngridientName(event, false);
    }
  }

  const getIngridientName = (event, unclick) => {
     compareIngridients (
      event.currentTarget.lastChild.innerHTML.toLowerCase(),
      unclick
      ); 
  }
 const compareIngridients = (result, unclick) => {
   const arrayNums = [];
for(let x = 0; x < kitchenArray.length; x++ ) {
  for(let y = 0; y < kitchenArray[x].length; y++) {
    if (kitchenArray[x][y] === result) {arrayNums.push(x);};
  }
}
return getResult(arrayNums, unclick);
}

   const getResult = (result, unclick) => {
     let block = document.querySelectorAll('.main__restaurant__block');
    
     console.log(result);
     const jstarr = [];
     for (let x = 0; x < block.length; x++) {
      jstarr.push(x);
     }
     const s = new Set(result);
     const b = jstarr.filter(e => !s.has(e));
     if ( unclick === true ) {
        b.map((item) => console.log(block[item].id));
       b.map((item) => document.querySelector(String('#restaurant__block_'+item)).style.display = "none");
     } else {
      b.map((item) => document.querySelector(String('#restaurant__block_'+item)).style.display = "flex");
     }
   }

  const kitchenArray = [
["sushi"],
["burger", "pizza"],
["sushi"],
["sushi"],
["sushi", "vegan"],
["sushi"],
["desserts"],
["bbq","pizza"],
["burger", "vegan"],
["vegan"],
["pizza", "burger", "bbq"],
["bbq", "desserts"],
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
          <Restaurant id="0" pic="royal" name="Royal Sushi House" time="30-40 min" sum="$32 min sum" kitchen={kitchenArray[0]} featured="true" />
          <Restaurant id="1" pic="burg" name="Burgers & Pizza" time="40-60 min" sum="$24 min sum" kitchen={kitchenArray[1]} featured="true" />
          <Restaurant id="2" pic="ninja" name="Ninja sushi" time="20-40 min" sum="$40 min sum" kitchen={kitchenArray[2]} />
          <Restaurant id="3" pic="master" name="Sushi master" time="60-70 min" sum="$49 min sum" kitchen={kitchenArray[3]} />
          <Restaurant id="4" pic="jap" name="Japanese sushi" time="30-50 min" sum="$104 min sum" kitchen={kitchenArray[4]} />
          <Restaurant id="5" pic="kobe" name="Kobe" time="20-30 min" sum="$57 min sum" kitchen={kitchenArray[5]} />
          <Restaurant id="6" pic="royal" name="Royal Sushi House" time="30-40 min" sum="$32 min sum" kitchen={kitchenArray[6]} featured="true" />
          <Restaurant id="7" pic="burg" name="Burgers & Pizza" time="40-60 min" sum="$24 min sum" kitchen={kitchenArray[7]} featured="true" />
          <Restaurant id="8" pic="ninja" name="Ninja sushi" time="20-40 min" sum="$40 min sum" kitchen={kitchenArray[8]} />
          <Restaurant id="9" pic="royal" name="Royal Sushi House" time="30-40 min" sum="$32 min sum" kitchen={kitchenArray[9]} featured="true" />
          <Restaurant id="10" pic="burg" name="Burgers & Pizza" time="40-60 min" sum="$24 min sum" kitchen={kitchenArray[10]} featured="true" />
          <Restaurant id="11" pic="ninja" name="Ninja sushi" time="20-40 min" sum="$40 min sum" kitchen={kitchenArray[11]} />
          </div>
        </div>
      </div>
    </main>
  )
}
