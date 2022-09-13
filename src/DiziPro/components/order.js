import React from "react";
import { Footer } from "./footer";
import Header from "./header";
import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import img1 from "../img/Rectangle 439.jpg";
import img2 from "../img/Rectangle 440.jpg";
import img3 from "../img/Rectangle 441.jpg";

const Order = () => {
  const skills = [
    {
      id: 1,
      name: "3D Modelling",
      isSelected: false,
    },
    {
      id: 2,
      name: "3D Print Modelling",
      isSelected: false,
    },
    {
      id: 3,
      name: "3D Scanning",
      isSelected: false,
    },
    {
      id: 4,
      name: "Animating",
      isSelected: false,
    },
    {
      id: 5,
      name: "Lighting",
      isSelected: false,
    },
    {
      id: 6,
      name: "Low Poly Modelling",
      isSelected: false,
    },
    {
      id: 7,
      name: "Particles",
      isSelected: false,
    },
    {
      id: 8,
      name: "PBR Modelling",
      isSelected: false,
    },
    {
      id: 9,
      name: "Rendering",
      isSelected: false,
    },
    {
      id: 10,
      name: "Rigging",
      isSelected: false,
    },
    {
      id: 11,
      name: "Shaders",
      isSelected: false,
    },
    {
      id: 12,
      name: "Skinning",
      isSelected: false,
    },
    {
      id: 13,
      name: "Texturing",
      isSelected: false,
    },
    {
      id: 14,
      name: "UV Mapping",
      isSelected: false,
    },
  ];

  const software = [
    {
      id: 1,
      name: "Autodesk 3Ds Max",
      isSelected: false,
    },
    {
      id: 2,
      name: "OBJ",
      isSelected: false,
    },
    {
      id: 3,
      name: "3D Studio",
      isSelected: false,
    },
    {
      id: 4,
      name: "Autodesk FBX",
      isSelected: false,
    },
    {
      id: 5,
      name: "Zbrush",
      isSelected: false,
    },
    {
      id: 6,
      name: "Substance Designer",
      isSelected: false,
    },
    {
      id: 7,
      name: "Lumion",
      isSelected: false,
    },
    {
      id: 8,
      name: "GrowFX",
      isSelected: false,
    },
    {
      id: 9,
      name: "3Ds Max Material Library",
      isSelected: false,
    },
    {
      id: 10,
      name: "PDF",
      isSelected: false,
    },
  ];

  function skillSelected(id) {
    skills.map((item) => {
      if (item.id === id) {
        return (skills = [...skills, (item.isSelected = !item.isSelected)]);
      }
      console.log(skills);
    });
  }
  function softSelected(id) {}

  const [selectedSkills, setSelectedSkills] = useState(0);

  useEffect(() => {
    var selectedNum = skills.filter((item) => item.isSelected === true).length;

    setSelectedSkills(selectedNum);
  });

  const [skillDropdown, setSkillDropdown] = useState(false);
  const [softDropdown, setSoftDropdown] = useState(false);

  const [navigateToHome, setNavigateToHome] = useState(false);
  const [navigateToComp, setNavigateToComp] = useState(false);

  if (navigateToHome) return <Navigate to={"/"} />;
  if (navigateToComp) return <Navigate to={"/complated"} />;

  function changeNavigate(navigate) {
    setNavigateToComp(true);
  }

  function changeNavigation(navigate) {
    setNavigateToHome(true)
  }

  return (
    <>
      <Header props="order" />
      <div className="section-order">
        <div className="section-order--content">
          <button className="btn-back">
            <Link to={"/"}>
              <div className=""></div>
              Go to Home page
            </Link>
          </button>

          <h1 className="text-center">Order a project</h1>

          <div className="section-order--content__1">
            <form action="#" className="form">
              <label htmlFor="title">title</label>
              <input type="text" name="title" placeholder="Type here" />
              <label htmlFor="description">description</label>
              <textarea
                name="description"
                id="1"
                cols="30"
                rows="10"
                placeholder="Type here"
              ></textarea>
              <label htmlFor="">3D skills</label>
              <div className="checkbox">
                <div
                  className={`checkbox--skills ${
                    skillDropdown ? " open" : " close"
                  }`}
                >
                  <div
                    onClick={() => {
                      setSkillDropdown(!skillDropdown);
                    }}
                    className="checkbox--skills__head"
                  >
                    {skillDropdown ? (
                      <>
                        <h5>Select 3D skills</h5>
                        <p>selected {selectedSkills}</p>
                      </>
                    ) : (
                      <p>Selected {selectedSkills}</p>
                    )}
                    <div className="dropdown">
                      <div className={skillDropdown ? "up" : "down"}></div>
                    </div>
                  </div>
                  {skillDropdown ? <hr /> : ""}
                  <div className={"checkbox--skills__body"}>
                    {skills.map((item, index) => {
                      return (
                        <div key={index}>
                          <input
                            type="checkbox"
                            onChange={() => skillSelected(item.id)}
                          />
                          <label htmlFor="">{item.name}</label>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div
                  className={`checkbox--skills ${
                    softDropdown ? " open" : " close"
                  }`}
                >
                  <div
                    onClick={() => {
                      setSoftDropdown(!softDropdown);
                    }}
                    className="checkbox--skills__head"
                  >
                    {softDropdown ? (
                      <>
                        <h5>Select 3D software</h5>
                        <p>selected {selectedSkills}</p>
                      </>
                    ) : (
                      <p>Selected {selectedSkills}</p>
                    )}
                    <div className="dropdown">
                      <div className={softDropdown ? "up" : "down"}></div>
                    </div>
                  </div>
                  {softDropdown ? <hr /> : ""}
                  <div className={"checkbox--skills__body"}>
                    {software.map((item, index) => {
                      return (
                        <div key={index}>
                          <input
                            type="checkbox"
                            onClick={() => softSelected(item.id)}
                          />
                          <label htmlFor="">{item.name}</label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="select-img">
                <div className="select-img--imgs">
                  <img src={img1} alt="" />
                  <img src={img2} alt="" />
                  <img src={img3} alt="" />
                </div>
                <div className="select-img--content">
                  <p>Drag or drop reference image here or</p>
                  <div>
                    <button className="btn btn-primary">browse</button>
                  </div>
                </div>
              </div>

              <div className="deadline">
                <div className="deadline__1">
                  <label htmlFor="deadline">deadline</label>
                  <label htmlFor="">budget</label>
                </div>
                <div className="deadline__2">
                  <div>
                    <input type="date" />
                    <div>
                      <input type="checkbox" />
                      <label htmlFor="">no fixed deadline</label>
                    </div>
                  </div>
                  <input type="number" placeholder="$" min={1} />
                </div>
              </div>
            </form>

            <div className="btns">
              <button
                className="btn btn-secondary"
                onClick={() => changeNavigation("cancel")}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={() => changeNavigate("start")}
              >
                Start project
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Order;
