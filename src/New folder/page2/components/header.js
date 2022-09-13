import React, { useState } from "react";

const Header = () => {
  const [data, setData] = useState([
    {
      score: "8",
      description: "Week of intesive education. Lessons are 3 times a week",
    },
    {
      score: "24",
      description: "Checked lessons and tasks from teachers",
    },
    {
      score: "7",
      description:
        "Works in portfolio at the end of course. 6 shots and 1 total work",
    },
    {
      score: "4",
      description: "Students in a group, teachers for every single group",
    },
  ]);
  return (
    <>
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

      <div className="section-type-1">
        <div className="section-type-img">
          <div></div>
          <img src={img} alt="" />
        </div>
        <div className="section-type-text">
          <h2>Actual knowladge</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            eaque pariatur laborum libero in. Ullam deserunt quae voluptate
            reprehenderit, blanditiis quo laboriosam sit, aut laudantium
            necessitatibus odit porro. Quasi, quia.
          </p>
          <button className="btn btn-secondary">Buy course</button>
        </div>
      </div>
    </>
  );
};

export default Header;
