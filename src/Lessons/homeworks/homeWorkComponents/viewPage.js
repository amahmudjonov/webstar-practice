import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ViewPage = (props) => {
    const location = useLocation()
    const data = location.state
  return (
    <div>
      <div className="container">
        <h1>Full view</h1>
        <div className="w-100">
          <img
            src={data.url}
            alt="img url"
          />
          <h3 className="mt-3">Heading: {data.id + 1}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            exercitationem! Corporis ipsum hic iure ex cupiditate, ad similique
            consectetur maiores error numquam, nobis eligendi pariatur aliquid
            eos repellendus dicta. Dolore temporibus dicta ad dolorem aliquam
            nam eveniet molestias quae eaque sequi magni nihil inventore
            exercitationem perferendis aperiam rerum excepturi, vero
            repellendus. Non, quaerat. Voluptas dicta libero accusantium dolorem
            nisi. Officiis, harum dolores. Corrupti at nulla rerum dignissimos
            magnam explicabo perferendis! Ex placeat incidunt magnam provident.
            Ea fugit quasi est velit temporibus sapiente reprehenderit officia
            voluptatibus, possimus assumenda blanditiis magni autem rerum
            accusantium tempora amet qui earum quas eveniet delectus! Delectus!
          </p>
        </div>
        <Link to={'/'}>
            <button className="btn btn-primary">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewPage;
