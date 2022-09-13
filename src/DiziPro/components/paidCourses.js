import React from "react";
import img from "../img/cardimg.png";
import Header from "./header";

const PaidCourses = () => {
  const courses = [
    {
      id: 1,
      name: "3Ds Max",
      status: "Start",
      price: "$59.99",
      img: img,
    },
    {
      id: 1,
      name: "3Ds Max",
      status: "Start",
      price: "$59.99",
      img: img,
    },
    {
      id: 1,
      name: "3Ds Max",
      status: "Start",
      price: "$59.99",
      img: img,
    },
    {
      id: 1,
      name: "3Ds Max",
      status: "Start",
      price: "$59.99",
      img: img,
    },
    {
      id: 1,
      name: "3Ds Max",
      status: "Start",
      price: "$59.99",
      img: img,
    },
  ];

  return (
    <>
      <Header props='paid' />
      <div className="section-paid-courses paid">
        <h1 className="text-center">Paid courses</h1>
        <div className="paid__courses">
          {courses.map((item, index) => {
            return (
              <div className="paid__courses--card card" key={index}>
                <div className="card-top">
                  <p>{item.id}</p>
                </div>
                <div className="card-img">
                  <img src={item.img} alt="" />
                </div>
                <div className="card-body">
                  <h4 className="text-center">
                    {item.name} - {item.status}
                  </h4>
                </div>
                <div className="card-footer">
                  <p>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5732 0H6.85903C6.74538 2.51109e-05 6.6364 0.0451996 6.55604 0.12558L0.127649 6.55397C-0.0398157 6.72124 -0.0399663 6.99258 0.127323 7.16005C0.127423 7.16015 0.127549 7.16027 0.127649 7.16037L4.84179 11.8745C5.00916 12.0418 5.28043 12.0418 5.44777 11.8745L11.8762 5.44613C11.9566 5.36567 12.0018 5.25652 12.0017 5.14271V0.428568C12.0017 0.191872 11.8099 0 11.5732 0ZM9.00182 3.85704C8.52845 3.85704 8.14471 3.47329 8.14471 2.99992C8.14471 2.52656 8.52845 2.14281 9.00182 2.14281C9.47519 2.14281 9.85893 2.52656 9.85893 2.99992C9.85893 3.47329 9.47519 3.85704 9.00182 3.85704Z"
                        fill="#010101"
                      />
                    </svg>

                    {item.price}
                  </p>
                  <button className="btn btn-dark">
                    <svg
                      width="11"
                      height="12"
                      viewBox="0 0 13 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.258 14.406L11.7262 4.13421C11.7114 3.84842 11.4754 3.62429 11.1892 3.62429H9.61981V3.11952C9.61981 1.3994 8.22029 0 6.50013 0C4.78002 0 3.38069 1.3994 3.38069 3.11952V3.62429H1.81126C1.52507 3.62429 1.28897 3.84842 1.27416 4.13421L0.740948 14.4344C0.733361 14.5816 0.786515 14.7256 0.888055 14.8325C0.989557 14.9394 1.13055 15 1.27801 15H11.7225C11.7228 15 11.723 15 11.7232 15C12.0202 15 12.2609 14.7592 12.2609 14.4623C12.2609 14.4432 12.26 14.4244 12.258 14.406ZM4.14678 5.8009C3.82869 5.8009 3.57074 5.54295 3.57074 5.22486C3.57074 4.90677 3.82869 4.64883 4.14678 4.64883C4.46487 4.64883 4.72281 4.90677 4.72281 5.22486C4.72281 5.54295 4.46487 5.8009 4.14678 5.8009ZM8.01995 3.62429H4.98048V3.11952C4.98048 2.28149 5.66218 1.59978 6.50013 1.59978C7.3382 1.59978 8.01995 2.28149 8.01995 3.11952V3.62429ZM8.85436 5.8009C8.53627 5.8009 8.27833 5.54295 8.27833 5.22486C8.27833 4.90677 8.53627 4.64883 8.85436 4.64883C9.17245 4.64883 9.4304 4.90677 9.4304 5.22486C9.4304 5.54295 9.17245 5.8009 8.85436 5.8009Z"
                        fill="#004267"
                      />
                    </svg>
                    purchase
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PaidCourses;
