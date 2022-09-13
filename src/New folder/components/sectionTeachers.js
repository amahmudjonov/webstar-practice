import React, { useState } from "react";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";

const SectionTeachers = () => {
  const [data, setData] = useState([
    {
      score: "100+",
      description: "Teorical and Practical courses for different levels",
    },
    {
      score: "3 000",
      description: "Hours video-lexies and webinars from best mentors",
    },
    {
      score: "15",
      description: "Directions for common professions",
    },
    {
      score: "2 000",
      description: "Students are already having classes at our platform",
    },
  ]);
  const [teachers, setTeachers] = useState([
    {
      name: "Katya",
      description: "Head designer TailGroup",
      img: img1,
    },
    {
      name: "Marina",
      description: "Marketolog Headers Market",
      img: img2,
    },
    {
      name: "Slava",
      description: "PR-Manager Central Media",
      img: img3,
    },
    {
      name: "Pasha",
      description: "Founder LeadCompany",
      img: img4,
    },
    {
      name: "Sasha",
      description: "Head editor Just Journal",
      img: img5,
    },
    {
      name: "Lenya",
      description: "Head developer Ymail",
      img: img6,
    },
  ]);
  return (
    <div className="section-teachers-head">
      <div className="head-content">
        <div>
          {data.map((data, index) => {
            return (
              <div className="head-content-div" key={index}>
                <h3 className="data-score">{data.score}</h3>
                <p className="data-description">{data.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="teachers-content">
        <div className="teachers-content-text">
          <div>
            <h1>Learn from the bests</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo,
              sint a neque assumenda quam sapiente! Atque suscipit incidunt
              repellendus, fugit officiis nihil, nostrum laborum odit blanditiis
              reiciendis nemo numquam.
            </p>

            <button className="btn btn-primary">All directions</button>
          </div>
        </div>
        <div className="teachers-content-img">
          <div>
            {teachers.map((data, index) => {
              return (
                <div className="teachers-img" key={index}>
                  <div>
                    <img src={data.img} alt="" />
                  </div>
                  <p>{data.name + ", " + data.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTeachers;
