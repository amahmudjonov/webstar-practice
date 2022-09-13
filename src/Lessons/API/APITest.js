import React, { useEffect, useState } from "react";
import axios from "axios";

const APITest = () => {
  const [users, setUsers] = useState([]);
  const [ok, setOk] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "John",
    job: "Driver",
  });

  //   useEffect(() => {
  //       const url = "https://reqres.in/api/users"
  //     setTimeout(() => {
  //         setOk(false)
  //       fetch(url)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           setUsers(data.data);
  //         });
  //     }, 1000);
  //   }, []);

  // useEffect(() => {
  //     const url = "https://reqres.in/api/users"
  //     setTimeout(() => {
  //         axios.get(url).then(data => {
  //             console.log(data.data);
  //         })
  //     }, 1000);
  // })

  useEffect(() => {
    const url = "https://reqres.in/api/users";
    // axios.post(url, newUser).then(response => {
    //     console.log(response.data);
    // })

    const url1 = "https://reqres.in/api/users/1";
    // axios.put(url1, newUser).then((data) => {
    //   console.log(data);
    // });

    // axios.delete(url1).then(data => {
    //     console.log(data);
    // }).catch(error => console.error(error))
  }, []);

  return (
    <div>
      {ok ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        <div className="container">
          <div className="row text-center">
            <h1>{users.length} users are in here</h1>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>
                      <img src={item.avatar} alt="" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default APITest;
