import React, { useState } from "react";
import { Link } from "react-router-dom";
import ViewPage from './viewPage'

const Card = (props) => {
  const [innerUrl, setInnerUrl] = useState(props.url);
  const [innerCount, setInnerCount] = useState(props.count);

  const data = {
      url: "", id: 0
  }

  return (
    <>
      {[...new Array(parseInt(innerCount))].map((item, index) => {
        return (
            <div className="card m-2" key={index} style={{ width: "20rem" }}>
              <img src={innerUrl} alt="url img" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Heading: {index + 1}</h5>
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  sed!
                </p>
                <Link to='/view' state={{
                    url: innerUrl, id: index
                }}>
                    <button className="btn btn-primary">Full view</button>
                </Link>
              </div>
            </div>
        );
      })}
    </>
  );
};

export default Card;

//https://avatars.mds.yandex.net/i?id=68067fc23f0866ee3542a806abace9b8-5236530-images-thumbs&n=13
