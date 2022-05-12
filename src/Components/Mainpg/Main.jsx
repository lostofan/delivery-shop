import React from 'react'
import Discount from './Discount'
import Ingridients from './Ingridients'
import Restaurant from './Restaurant'

export default function Main() {
  return (
    <main>
      <div className="main__wrapper">
        <div className="main__discount">
          <Discount num="1" name="SSS" bgcol="#F3F4FF" article="All deserts" sum="20% OFF" type="Deserty"/>
          <Discount num="2" name="WWW" bgcol="#FFF3ED" article="Big Burgers" sum="50% OFF" type="Foodies"/>
        </div>
        <div className="main__ingridients">
          <Ingridients name="Pizza" link="pizza" />
          <Ingridients name="Burger" link="burger"/>
          <Ingridients name="BBQ" link="meat"/>
          <Ingridients name="Sushi" link="sushi"/>
          <Ingridients name="Vegan" link="broccoli"/>
          <Ingridients name="Desserts" link="cake"/>
        </div>
        <div className="main__restaurant">
          <div className="main__article"><p>Nearby restaurants</p></div>
          <div className="wrapper__main_restaurant">
          <Restaurant pic="royal" name="Royal Sushi House" time="30-40 min" sum="$32 min sum" featured="true" />
          <Restaurant pic="burg" name="Burgers & Pizza" time="40-60 min" sum="$24 min sum" featured="true" />
          <Restaurant pic="ninja" name="Ninja sushi" time="20-40 min" sum="$40 min sum" />
          <Restaurant pic="master" name="Sushi master" time="60-70 min" sum="$49 min sum" />
          <Restaurant pic="jap" name="Japanese sushi" time="30-50 min" sum="$104 min sum" />
          <Restaurant pic="kobe" name="Kobe" time="20-30 min" sum="$57 min sum" />
          </div>
        </div>
      </div>
    </main>
  )
}
