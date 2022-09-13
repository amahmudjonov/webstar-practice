import React, { useState } from "react";
import { Context } from "../../../Context API/context";
import { Link } from "react-router-dom";
import LastPage from "./lastPage";

const SignUp = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const user = {
    name: name,
    surname: surName,
    age: age,
    gender: gender,
  };

  const users = []

  const a = 'Hello'

  function setUserData(e) {
    users.concat(user)
  }

  function getName(e) {
    var name = e.target.value;
    if (name !== "") {
      name = name.toLowerCase();
      setName(name.charAt(0).toUpperCase() + name.slice(1));
    }
  }
  function getSurName(e) {
    var name = e.target.value;
    if (name !== "") {
      name = name.toLowerCase();
      setSurName(name.charAt(0).toUpperCase() + name.slice(1));
    }
  }
  function getAge(e) {
    if (e.target.value !== "") {
      setAge(e.target.value);
    }
  }
  function getGender(e) {
    if (e.target.value !== "") {
      setGender(e.target.value);
    }
  }

  return (
    <div className="container">
      <div className="d-none">
        <Context.Provider value={a}>
          <LastPage />
        </Context.Provider>
      </div>
      <h1 className="text-center">SIGN UP</h1>
      <form action="#">
        <label htmlFor="name">Name:</label>
        <input
          onChange={getName}
          type="text"
          name="name"
          className="form-control m-2"
        />
        <label htmlFor="surname">Surname:</label>
        <input
          onChange={getSurName}
          type="text"
          name="surname"
          className="form-control m-2"
        />
        <label htmlFor="age">Age:</label>
        <input
          onChange={getAge}
          type="number"
          className="form-control m-2"
          name="age"
        />
        <label htmlFor="gender">Gender:</label>
        <input
          onChange={getGender}
          type="radio"
          name="gender"
          value={"male"}
          className="form-check-input m-2"
        />
        <label htmlFor="gender">Male</label>
        <input
          onChange={getGender}
          type="radio"
          name="gender"
          value={"female"}
          className="form-check-input m-2"
        />
        <label htmlFor="gender">Female</label>
      </form>

      <button disabled={(user.name && user.surname && user.age && user.gender) ? false : true} onClick={setUserData} className="btn btn-primary m-2">
        <Link to={"/lastpage"} style={{color: '#fff', textDecoration: 'none'}}>SIGN UP</Link>
      </button>
    </div>
  );
};

export default SignUp;
