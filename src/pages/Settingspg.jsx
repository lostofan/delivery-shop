import React from 'react'
import Header from '../Components/Mainpg/Header'
import Settings from '../Components/Settingspg/Settings';
import '../styles/main.css';
import '../styles/settings.css';

export default function Settingspg() {
  return (
    <div className="wrapper__main">
        <Header />
        <div className="cross_line"></div>
        <Settings />
    </div>
  )
}
