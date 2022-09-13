import React, { useState } from "react";
import Card from "./homeWorkComponents/card";

const HomeWork8 = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [url, setUrl] = useState("");
  const [count, setCount] = useState("");
  const data = [];

  function openFullView() {
    setIsOpen(!isOpen);
  }

  function getUrl(e) {
    var url = e.target.value;
    setUrl(url);
    if (isOpen !== "") {
      setDate(url);
    }
  }

  function getCount(e) {
    var count = e.target.value;
    setCount(count);
    if (count !== "") {
      setDate(count);
    }
  }

  function setDate(url, count) {
    var date = {
      id: data.length + 1,
      url: url,
      count: count,
    };

    data.concat(date);
  }

  return (
    <div>
      <div>
        <div className="container mb-5 mt-3">
          <label className="mt-2" htmlFor="url">
            Url
          </label>
          <input
            onChange={getUrl}
            type="text"
            name="url"
            className="form-control"
            placeholder="Url..."
          />
          <label className="mt-2" htmlFor="repeat">
            Repeat
          </label>
          <input
            onChange={getCount}
            type="number"
            name="repeat"
            className="form-control"
            placeholder="Repeat..."
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex">
          {url && count ? <Card url={url} count={count} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default HomeWork8;
