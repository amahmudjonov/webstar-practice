import React from "react";
import { useState } from "react";
import img1 from "../img/2.png";
import img2 from "../img/3.png";
import img3 from "../img/4.png";
import { Footer } from "./footer";
import Header from "./header";

function Portfolio() {
  const works = [
    {
      id: "1",
      title: "New house interior",
      img: img1,
    },
    {
      id: "2",
      title: "New house interior",
      img: img2,
    },
    {
      id: "3",
      title: "New house interior",
      img: img3,
    },
    {
      id: "4",
      title: "New house interior",
      img: img1,
    },
    {
      id: "5",
      title: "New house interior",
      img: img2,
    },
    {
      id: "6",
      title: "New house interior",
      img: img3,
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [modalImg, setModalImg] = useState('')

  function modal(id) {
    works.map(item => {
      if (item.id === id) {
        setModalImg(item.img)
      }
    })

    setModalIsOpen(!modalIsOpen)
  }

  return (
    <>
      <div className="modal" onClick={() => {
        setModalIsOpen(!modalIsOpen)
      }} style={modalIsOpen ? {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: '5000',
        overflow: 'hidden',
      } : {display: 'none'}}>
        <img style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }} src={modalImg} alt="" />
      </div>
      <Header props="portfolio" />
      <div className="section-works">
        <h1 className="text-center">Our works</h1>

        <div className="portfolio-menu">
          <ul>
            <li className="active">furniture</li>
            <li className="">furniture</li>
            <li className="">furniture</li>
            <li className="">furniture</li>
            <li className="">furniture</li>
          </ul>
        </div>

        <div className="section-works--content">
          {works.map((item, index) => {
            return (
              <div
                key={index}
                className="section-work--content"
                onClick={() => modal(item.id)}
              >
                <div>
                  <img src={item.img} alt="" />
                  <p>{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <button className="btn btn-primary">See more</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
