import React, { useState } from "react";
import img from "../img/photo11.jpg";
import img1 from "../img/pic.png";
import img2 from "../img/pic-1.png";
import img3 from "../img/pic-2.png";
import img4 from "../img/pic-3.png";

const SectionType = () => {
  const [data, setData] = useState([
    {
      text: "Motion design",
      img: img1,
    },
    {
      text: "Instagram target",
      img: img2,
    },
    {
      text: "Effective presentation",
      img: img3,
    },
    {
      text: "SMM strategy",
      img: img4,
    },
  ]);
  return (
    <>
      <div className="section-type-1">
        <div className="section-type-img">
          <div></div>
          <img src={img} alt="" />
        </div>
        <div className="section-type-text">
          <h2>Choose your education format</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            eaque pariatur laborum libero in. Ullam deserunt quae voluptate
            reprehenderit, blanditiis quo laboriosam sit, aut laudantium
            necessitatibus odit porro. Quasi, quia.
          </p>
          <button className="btn btn-secondary">All courses</button>
        </div>
      </div>

      <div className="section-popular-courses">
        <h1 className="center-text-popular">Most popular courses</h1>

        <div className="section-popular-content">
          {data.map((item, index) => {
            return (
              <div key={index} className="sec-pop-img">
                <img src={item.img} alt="" />
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
        <button className="btn btn-primary">All courses</button>
      </div>

      <div className="section-pre-footer">
        <div></div>
        <div>
          <h1>Join E-Mentor now</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            molestias nostrum maiores nesciunt similique necessitatibus saepe
            amet ipsa deleniti excepturi, fuga illo voluptas fugit reprehenderit
            perspiciatis exercitationem inventore minus veniam.
          </p>
          <button className="btn btn-secondary">Choose rate</button>
        </div>
      </div>
    </>
  );
};

export default SectionType;
