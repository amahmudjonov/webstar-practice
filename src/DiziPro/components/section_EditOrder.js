import React from "react";
import { Link } from "react-router-dom";
import EditOrder from "./editOrder";
import Header from "./header";

const SectionEditOrder = () => {
  return (
    <>
      <Header />
      <div className="section-edit">
        <button className="btn btn-back">
          <Link to={""}>
            <div></div>
            Go to Profile page
          </Link>
        </button>

        <div className="section-edit--content">
          <EditOrder />
        </div>
      </div>
    </>
  );
};

export default SectionEditOrder;
