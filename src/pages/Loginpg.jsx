import React from 'react'
import Login from '../Components/Loginpg/Login';
import Presentation from '../Components/Loginpg/Presentation';
import '../styles/style.css';

export default function Loginpg() {
  return (
    <div className="wrapper">
    <div className="wrapper-left">
      <Login></Login>
    </div>
    <div className="wrapper-right">
      <Presentation></Presentation>
    </div>
    </div>
  )
}
