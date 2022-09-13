import React, { Component } from "react";
import axios from "axios";
import Photos from "./homeWorkComponents/photos";

export default class HomeAPI1 extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      photos: [],
      imgAPI: [],
      isSelected: false,
    };
  }

  urlUsers = "https://jsonplaceholder.typicode.com/users";
  urlImg = "https://jsonplaceholder.typicode.com/photos";

  componentDidMount() {
    axios.get(this.urlUsers).then((users) => {
      // console.log(users.data);
      this.setState({
        users: users.data,
      });
    });

    axios.get(this.urlImg).then((imgs) => {
      for (let i = 0; i < 99; i++) {
        const element = imgs.data[i];
        var arr = {
            element: element
        }
      }
      this.setState({
          photos: this.state.photos.concat(arr)
      })
    });
  }

  //   componentDidUpdate() {
  //     for (let i = 0; i < 99; i++) {
  //         const element = this.state.photos[i];
  //         console.log(element);
  //     }

  //     console.log(this.state.imgAPI);
  //   }

  isSelected = () => {
    this.setState({
      isSelected: !this.state.isSelected,
    });
  };
  render() {
    const { users, photos, isSelected } = this.state;
    return (
      <>
        <div className="container-fluid">
          <button
            onClick={this.isSelected}
            className="btn btn-outline-light mb-3"
          >
            {isSelected ? "Photos" : "Users"}
          </button>
          {isSelected ? (
            <table className="table table-stripped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.address.city}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="d-flex jusify-center">
              <div className="row">
                  <Photos />
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}