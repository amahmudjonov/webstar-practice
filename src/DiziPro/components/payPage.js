import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import img from "../img/path.png";

const PayPage = () => {
  return (
    <>
      <Header />
      <div className="section-payment">
        <button className="btn-back">
          <Link to={"/"}>
            <div></div>
            Go to home page
          </Link>
        </button>

        <form action="" className="form">
          <div className="form__content">
            <div className="form-items">
              <label htmlFor="name">Card holder name</label>
              <input type="text" placeholder="Card holder name" />
            </div>
            <div className="form-items">
              <label htmlFor="number">Card number</label>
              <input type="number" placeholder="Card number" />
            </div>
            <div className="form-items">
              <div className="input-cvv">
                <div>
                  <label htmlFor="date">Expiry date</label>
                  <input type="text" placeholder="Expiry date" />
                </div>
                <div>
                  <label htmlFor="code">CVV code</label>
                  <input type="password" placeholder="CVV code" />
                </div>
              </div>
            </div>

            <div className="form-content">
              <div className="form-content--1">
                <p>Total payment(100%):</p>
                <h5>The amount you gave to pay(30%):</h5>
              </div>
              <div className="form-content--2">
                <p>$50 000</p>
                <h5>$15 000</h5>
              </div>
            </div>

            <button className="btn btn-primary">Submit</button>
          </div>
          <div className="form__img">
            <img src={img} alt="" />

            <p>You must spend 30% of the total amount to get started</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default PayPage;
