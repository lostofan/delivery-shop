import React from 'react'
import Header from '../Components/Mainpg/Header'
import Main from '../Components/Mainpg/Main'
import Footer from '../Components/Mainpg/Footer'
import '../styles/main.css';

export default function Mainpg() {
  return (
    <div className="wrapper__main">
      <Header />
      <div className="cross_line"></div>
      <Main />
      <Footer />
    </div>
  )
}
