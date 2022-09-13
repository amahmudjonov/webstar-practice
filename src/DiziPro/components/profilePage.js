import React from "react";
import Header from "./header";
import img from "../img/Ellipse 1.png";
import { Link } from "react-router-dom";
import EditOrder from "./editOrder";
import img1 from "../img/edit (1).jpg";
import img2 from "../img/edit (5).jpg";
import img3 from "../img/edit (3).jpg";
import img4 from "../img/edit (4).jpg";
import img5 from "../img/edit (2).jpg";

const ProfilePage = () => {
  const orders = [
    {
      id: 1,
      name: "Animating",
      budget: "$70 000",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus in interdum et vulputate. Ornare sit eget sit facilisis leo nunc varius. Viverra orci, imperdiet volutpat aliquam a. Pellentesque sollicitudin fermentum imperdiet et, ac. Fringilla viverra semper amet mus eu sem. Cum erat at rhoncus nullam in gravida amet, eu gravida.",
      images: [{ img: img3 }, { img: img1 }, { img: img2 }],
      process: "23 hours left",
      deadline: "12/02/2022",
    },
    {
      id: 2,
      name: "Animating",
      budget: "$70 000",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus in interdum et vulputate. Ornare sit eget sit facilisis leo nunc varius. Viverra orci, imperdiet volutpat aliquam a. Pellentesque sollicitudin fermentum imperdiet et, ac. Fringilla viverra semper amet mus eu sem. Cum erat at rhoncus nullam in gravida amet, eu gravida.",
      images: [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img1 },
        { img: img4 },
        { img: img5 },
      ],
      process: "Ends 3 hours",
      deadline: "12/02/2022",
    },
  ];
  return (
    <>
      <Header props={"profile"} />
      <div className="section-profile">
        <div className="profile">
          <div className="profile--img">
            <img src={img} alt="" />
          </div>
          <div className="profile--data">
            <div className="profile--data__name">
              <h1>jaloliddin esonboyev</h1>
            </div>
            <div className="profile--data__username">
              <p>jaloliddinrmcf03@gmail.com</p>
            </div>
          </div>
        </div>

        <button className="btn-setting">
          <Link to={"/settings"}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.122 6.26267L13.8687 6.10333C13.7653 5.78533 13.638 5.47867 13.4893 5.18733L14.2633 4.19067C14.5767 3.78733 14.54 3.218 14.182 2.87133L13.132 1.82133C12.782 1.46 12.2127 1.424 11.8087 1.73667L10.8133 2.51067C10.522 2.362 10.2153 2.23467 9.89667 2.13133L9.73733 0.88C9.67733 0.378 9.25133 0 8.74667 0H7.25333C6.74867 0 6.32267 0.378 6.26267 0.878L6.10333 2.13133C5.78467 2.23467 5.478 2.36133 5.18667 2.51067L4.19067 1.73667C3.788 1.424 3.21867 1.46 2.87133 1.818L1.82133 2.86733C1.46 3.218 1.42333 3.78733 1.73667 4.19133L2.51067 5.18733C2.36133 5.47867 2.23467 5.78533 2.13133 6.10333L0.88 6.26267C0.378 6.32267 0 6.74867 0 7.25333V8.74667C0 9.25133 0.378 9.67733 0.878 9.73733L2.13133 9.89667C2.23467 10.2147 2.362 10.5213 2.51067 10.8127L1.73667 11.8093C1.42333 12.2127 1.46 12.782 1.818 13.1287L2.868 14.1787C3.21867 14.5393 3.78733 14.5753 4.19133 14.2627L5.18733 13.4887C5.47867 13.638 5.78533 13.7653 6.10333 13.868L6.26267 15.1187C6.32267 15.622 6.74867 16 7.25333 16H8.74667C9.25133 16 9.67733 15.622 9.73733 15.122L9.89667 13.8687C10.2147 13.7653 10.5213 13.638 10.8127 13.4893L11.8093 14.2633C12.2127 14.5767 12.782 14.54 13.1287 14.182L14.1787 13.132C14.54 12.7813 14.5767 12.2127 14.2633 11.8087L13.4893 10.8127C13.6387 10.5213 13.766 10.2147 13.8687 9.89667L15.1193 9.73733C15.6213 9.67733 15.9993 9.25133 15.9993 8.74667V7.25333C16 6.74867 15.622 6.32267 15.122 6.26267ZM8 11.3333C6.162 11.3333 4.66667 9.838 4.66667 8C4.66667 6.162 6.162 4.66667 8 4.66667C9.838 4.66667 11.3333 6.162 11.3333 8C11.3333 9.838 9.838 11.3333 8 11.3333Z"
                fill="#7E7E7E"
              />
            </svg>
            <p>Settings</p>
          </Link>
        </button>

        {orders.map((item, index) => {
          return (
            <div key={index} className="order-content content">
              <div className="content--img">
                {item.images.map((item, index) => {
                  return (
                    <div key={index} className="img">
                      <img src={item.img} alt="" />
                    </div>
                  );
                })}
                <div className="content--img__content">
                  <div className="content--header">
                    <h1>{item.name}</h1>
                    <h4>
                      Budget:
                      <p>{item.budget}</p>
                    </h4>
                  </div>
                  <div className="con">
                    <div className="con--content con__process">
                      <p>Process:</p>
                      <div className="progress">
                        <div></div>
                      </div>
                      <span className="text">{item.process}</span>
                    </div>
                    <div className="con--content con__deadline">
                      <p>
                        Deadline: <span>{item.deadline}</span>
                      </p>
                      <div className="progress">
                        <div></div>
                      </div>
                      <span className="text">Recomendet 20 hours</span>
                    </div>
                  </div>
                  <div className="btns"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProfilePage;
