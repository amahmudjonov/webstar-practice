import React from 'react'
import Header from './header'
import img from '../img/Vector.png'

const Complate = () => {
  return (
    <>
    <Header />

    <div className="section-complate">
        <div className="section-complate--img">
            <img src={img} alt="" />
        </div>
        <div className="section-complate--content">
            <h3>Your order will be processed shortly and you will be notified.</h3>
            <p>Stay with us</p>
            <button className="btn btn-dark">Return to home page</button>
        </div>
    </div>
    </>
  )
}

export default Complate