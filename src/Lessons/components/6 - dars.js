import React, { Component } from "react";

export default class Lesson6 extends Component {
  constructor() {
    super();
    this.inputText = React.createRef();
    this.outputText = React.createRef();
    this.state = {
      id: 0,
      name: "",
      password: "",
      job: "",
      jobIcon: "",
      users: [],
    };
  }

  f = (e) => {
    console.log(this.inputText.current.value);

    this.outputText.current.innerHTML = this.inputText.current.value;
  };

  f2 = (e) => {};

  getName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  getPass = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  getJob = (e) => {
    var newJob = e.target.value;
    this.setState({
      job: newJob,
    });
    if (newJob === 'select') {
        return false
    } else if (newJob === "doctor") {
      this.setState({
        jobIcon: "fa-solid fa-user-doctor",
      });
    } else if (newJob === "teacher") {
      this.setState({
        jobIcon: "fa-solid fa-chalkboard-user",
      });
    } else {
      this.setState({
        jobIcon: "fa-solid fa-taxi",
      });
    }
  };

  submit = () => {
    const st = this.state;
    var person = {
      name: st.name,
      password: st.password,
      job: st.job,
      jobIcon: st.jobIcon,
    };
    this.setState({
        users: st.users.concat(person)
    })

  };

  render() {
    const st = this.state;
    return (
      <div>
        {/* <input type="text" ref={this.inputText} onInput={this.f} />
          <p ref={this.outputText}></p> */}

        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-3">
              <form action="#" onSubmit={this.f2}>
                <label htmlFor="name">Name</label>
                <input
                  onInput={this.getName}
                  className="form-control"
                  type="text"
                  id="name"
                />
                <label htmlFor="password"></label>
                <input
                  onInput={this.getPass}
                  className="form-control"
                  type="password"
                  id="password"
                />
                <label htmlFor="job">Job</label>
                <select
                  onChange={this.getJob}
                  className="form-control"
                  name="job"
                  id="job"
                >
                  <option value="select">Select job</option>
                  <option value="doctor">Doctor</option>
                  <option value="teacher">Teacher</option>
                  <option value="taxi">Taxi Driver</option>
                </select>
                <button
                  type="button"
                  onClick={this.submit}
                  className="btn btn-warning mt-2"
                >
                  Add Person
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 offset-2">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Password</th>
                  <th>Job</th>
                </tr>
              </thead>
              <tbody>
                {st.users
                  ? st.users.map((user, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{user.name}</td>
                          <td>{user.password}</td>
                          <td>{user.job}</td>
                          <td><i className={user.jobIcon}></i></td>
                        </tr>
                      );
                    })
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
