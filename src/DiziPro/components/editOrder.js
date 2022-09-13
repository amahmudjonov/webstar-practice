import React from "react";
import img1 from '../img/edit (1).jpg'
import img2 from '../img/edit (5).jpg'
import img3 from '../img/edit (3).jpg'
import img4 from '../img/edit (4).jpg'
import img5 from '../img/edit (2).jpg'
import Header from "./header";

const EditOrder = () => {
  const orders = [
    {
      id: 1,
      name: "Animating",
      budget: "$70 000",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus in interdum et vulputate. Ornare sit eget sit facilisis leo nunc varius. Viverra orci, imperdiet volutpat aliquam a. Pellentesque sollicitudin fermentum imperdiet et, ac. Fringilla viverra semper amet mus eu sem. Cum erat at rhoncus nullam in gravida amet, eu gravida.",
      images: [
        { img: img1 },
        { img: img2 },
        { img: img3 },
      ],
      process: "Ends 3 hours",
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
    <Header />
      {orders.map((item, index) => {
        return (
          <div key={index} className="order-content content">
            <div className="content--header">
              <h1>{item.name}</h1>
              <h4>
                Budget:
                <p>{item.budget}</p>
              </h4>
            </div>
            <div className="content--body">
              <p>{item.title}</p>
            </div>
            <div className="content--img">
              {
                item.images.map((item, index) => {
                    return(
                        <div key={index} className="img">
                            <img src={item.img} alt="" />
                        </div>
                    )
                })
              }
              <div className="content--img__content">
                <div className="con">
                  <div className="con--content con__process">
                    <p>
                        Process:
                    </p>
                    <div className="progress">
                        <div></div>
                    </div>
                    <span className="text">{item.process}</span>
                  </div>
                  <div className="con--content con__deadline">
                    <p>Deadline: <span>{item.deadline}</span></p>
                    <div className="progress">
                        <div></div>
                    </div>
                    <span className="text">Recomendet 20 hours</span>
                  </div>
                </div>
                <div className="btns">
                  <button className="btn btn-dark">Edit</button>
                  <button className="btn btn-primary">Go to chat</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EditOrder;
