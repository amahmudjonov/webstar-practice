import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../Context API/context";

const LastPage = () => {
  const usersData = useContext(Context);
  console.log(usersData);

  return (
    <div>
      <div className="container">
        <h3 className="text-center mt-2">LAST PAGE</h3>
        <table className="table table-stripped table-hover mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>
                <img
                  src="https://img.icons8.com/glyph-neue/344/gender.png"
                  style={{ width: "25px" }}
                  alt=""
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {
              // usersData.map((item, index) => {
              //     return(
              //         <tr key={index}>
              //             <td>{index + 1}</td>
              //             <td>{item.name}</td>
              //             <td>{item.surname}</td>
              //             <td>{item.age}</td>
              //             <td>{item.gender}</td>
              //         </tr>
              //     )
              // })
            }
          </tbody>
        </table>
        <button className="btn btn-primary">
          <Link to={"/"} style={{ color: "#fff", textDecoration: "none" }}>
            <img
              src="https://img.icons8.com/glyph-neue/344/ffffff/back.png"
              alt=""
              style={{ width: "20px", marginBottom: "3px" }}
            />{" "}
            Back
          </Link>
        </button>
      </div>
    </div>
  );
};

export default LastPage;

// venus https://img.icons8.com/ios-filled/344/venus-symbol.png
// mars https://img.icons8.com/ios-filled/344/mars-symbol.png
