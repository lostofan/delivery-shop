import React from 'react'
import Discount from './Discount'
import Ingridients from './Ingridients'
import Restaurant from './Restaurant'

export default function Main() {
  //Рисует нажатие, записывает состояние нажатой/отжатой кнопки
  const useStyle = (event, blockClick, setBlockClick, cache) => {
    if (blockClick === false) {
      setBlockClick(true);
      event.currentTarget.classList.add("main__ingridients_block_clicked");
      getIngridientName(event, true, cache);
    }
    else {
      setBlockClick(false);
      event.currentTarget.classList.remove("main__ingridients_block_clicked");
      getIngridientName(event, false, cache);
    }
  }
  //Записывает название ингридиента нажатой кнопки
  const getIngridientName = (event, unclick, cache) => {
    let cached;
    for (let key in cache) {
      if (key === event.currentTarget.lastChild.innerHTML.toLowerCase() ) {
        cached = cache[key];
      } 
    }
    compareIngridients(
      event.currentTarget.lastChild.innerHTML.toLowerCase(),
      unclick,
      cached, cache
    );
  }
  //Записывает расположение ресторанов на основе нажатой иконки
  const compareIngridients = (result, unclick, cache, sec) => {
    const arrayNums = [];
      for (let x = 0; x < kitchenArray.length; x++) {
        for (let y = 0; y < kitchenArray[x].length; y++) {
          if (kitchenArray[x][y] === result) { arrayNums.push(x); };
        }
      }


    return getResult(arrayNums, unclick, cache, sec);
  }
  //Делает уникальными значения (для случая нескольких нажатых кнопок) 
  const doUniq = (from, to) => {
    const a = new Set(from);
    const b = to.filter(c => !a.has(c));
    return b;
  }
  //Собирает айдишники ресторанных блоков
  const getIDs = () => {
    let block = document.querySelectorAll('.main__restaurant__block');
    let jstarr = [];
    jstarr.length = 0;
    for (let x = 0; x < block.length; x++) {
      jstarr.push(x);
    }
    return jstarr;
  }
  //Скрывает и отображает подходящие блоки
  const getResult = (result, unclick, cache, sec) => {
      const final = doUniq(result, getIDs());
    if (unclick === true) {  
        for (let x = 0; x < doUniq(doUniq(isHide(getIDs()), result), doUniq(isHide(getIDs()), getIDs() )).length; x++) {
          cache.push(doUniq(doUniq(isHide(getIDs()), result), doUniq(isHide(getIDs()), getIDs() ))[x]);
        };
        final.map((item) => document.querySelector('#restaurant__block_' + item).classList.add("hideshit"));
      } 
    else {
      cache.map((item) => document.querySelector('#restaurant__block_' + item).classList.remove("hideshit"));
      cache.length = 0;
      }
    }
//Проверяет уже скрытые блоки и сообщает их номера
  const isHide = (arr) => {
    let dump = [];
    dump.length = 0;
      for (let x = 0; x < arr.length; x++) {
        if (document.querySelector('#restaurant__block_' + arr[x]).classList.contains("hideshit") === true) {
          dump.push(arr[x]);
        }
    }
    return dump;
  }

  const kitchenArray = [
    ["sushi"],
    ["burger", "pizza"],
    ["sushi"],
    ["sushi"],
    ["sushi", "vegan"],
    ["sushi"],
    ["desserts"],
    ["bbq", "pizza"],
    ["burger", "vegan"],
    ["vegan"],
    ["pizza", "burger", "bbq"],
    ["bbq", "desserts"],
  ];




  return (
    <main>
      <div className="main__wrapper">
        <div className="main__discount">
          <Discount num="1" name="SSS" bgcol="#F3F4FF" article="All deserts" sum="20% OFF" type="Deserty" />
          <Discount num="2" name="WWW" bgcol="#FFF3ED" article="Big Burgers" sum="50% OFF" type="Foodies" />
        </div>
        <div className="main__ingridients">
          <Ingridients myfn={useStyle} name="BBQ" link="bbq" cache={1} id="1" />
          <Ingridients myfn={useStyle} name="Burger" link="burger" cache={2} id="2" />
          <Ingridients myfn={useStyle} name="Pizza" link="pizza" cache={3} id="3"/>
          <Ingridients myfn={useStyle} name="Sushi" link="sushi" cache={4} id="4" />
          <Ingridients myfn={useStyle} name="Vegan" link="vegan" cache={5} id="5" />
          <Ingridients myfn={useStyle} name="Desserts" link="desserts" cache={6}  id="6"/>
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
