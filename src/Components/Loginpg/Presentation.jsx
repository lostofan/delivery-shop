import React from 'react'
import three from './../../imgs/three.png';

export default function Presentation() {
  return (
    <div className="right">
            <div className="ad"><img src={three} alt=""/></div>
            <div className="text">
                <div className="hightxt">
                    <p>Leave reviews for all meals</p>
                </div>
                <div className="jsttxt">
                    <p>Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.</p>
                </div>
                <div className="slider">
                    <div className="slideme"></div>
                    <div className="slideme"></div>
                    <div className="slideme"></div>
                    <div className="slideme"></div>
                </div>
            </div>
        </div>
  )
}
