import React from 'react'
import Logo from '../../imgs/main.png'
import Avatar from '../../imgs/main avatar.png'
import Basket from '../../imgs/bag.png';

export default function Header() {
  return (
    <header><div className="wrapper__header">
        <div className="header__main">
          <img src={Logo} alt="Food Delivery" />
        </div>
        <div className="header__search">
          <input type="search" name="" id="" placeholder="Search" />
        </div>
        <div className="header__buttons">
          <ul>
            <li>Restaurants</li>
            <li>Deals</li>
          </ul>
        </div>
        <div className="header__separator"> 0</div>
        <a href="/ss" className="main__orders">My orders</a>
        <div className="header__orders_button">
          <img src={Basket} alt="" />
        </div>
        <div className="header__avatar">
          <img src={Avatar} alt="" />
        </div>
        </div>
    </header>
  )
}
