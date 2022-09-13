import React, { Component } from "react";
import "../css/7 - dars.css";

export default class Lesson7 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      status: "",
      todoList: [],
      pending: 'pending',
      doing: 'doing',
      doingOrPending: true
    };
  }

  getVal = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addTodo = () => {
      const st = this.state
      let todo = {
          id: st.todoList.length + 1,
          name: st.name,
          date: st.date,
          status: st.status === ''? 'pending' : st.status,
        }
        console.log(todo);
      this.setState({
          todoList: st.todoList.concat(todo)
      })
  }

  changeToDoing = (id) => {
    this.setState(
        this.state.todoList.map(item => {
            if (id === item.id) item.status = 'doing'
            return item
        })
    )
  }

  changeToDone = (id) => {
    this.setState(
        this.state.todoList.map(item => {
            if (id === item.id) item.status = 'done'
            return item
        })
    )
  }

  render() {
    const st = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <h3 className="h3 text-center">Add Todo</h3>
            <label className="mt-2" htmlFor="name">
              Name
            </label>
            <input
              onChange={this.getVal}
              name="name"
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter todo name..."
            />
            <label className="mt-2" htmlFor="date">
              Date
            </label>
            <input
              onChange={this.getVal}
              name="date"
              type="date"
              className="form-control"
            />
            <label className="mt-2" htmlFor="status">
              Status
            </label>
            <select
              onChange={this.getVal}
              name="status"
              id="status"
              className="form-control"
            >
                
              <option value="pending">Pending</option>
              <option value="doing">Doing</option>
            </select>
            <div className="text-center">
              <button onClick={this.addTodo} className="btn btn-primary mt-2">Add Todo</button>
              <button onClick={this.clearTodos} className="btn btn-danger mt-2">Clear Todos</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="pendingBox">
              <h3>Pending list</h3>
              <hr />
              {
                  st.todoList ? (
                      st.todoList.filter(todo => todo.status === 'pending').map((item, index) => {
                          return (
                              <div key={index} className='d-flex justify-content-between mt-2'>
                                  <p>{index + 1 + '. '}{item.name + '. '}{item.date}</p>
                                  <button onClick={() => this.changeToDoing(item.id)} className="btn btn-warning">Doing</button>
                              </div>
                          )
                      })
                  ) : ""
              }
            </div>
          </div>
          <div className="col-md-3">
            <div className="doingBox">
              <h3>Doign list</h3>
              <hr />
              {
                  st.todoList ? (
                      st.todoList.filter(todo => todo.status === 'doing').map((item, index) => {
                          return (
                              <div key={index} className='d-flex justify-content-between mt-2'>
                                  <p>{index + 1 + '. '}{item.name + '. '}{item.date}</p>
                                  <button onClick={() => this.changeToDone(item.id)} className="btn btn-success">Done</button>
                              </div>
                          )
                      })
                  ) : ""
              }
            </div>
          </div>
          <div className="col-md-3">
            <div className="doneBox">
              <h3>Done list</h3>
              <hr />
              {
                  st.todoList ? (
                      st.todoList.filter(todo => todo.status === 'done').map((item, index) => {
                          return (
                              <div key={index} className='d-flex justify-content-between mt-2'>
                                  <p>{index + 1 + '. '}{item.name + '. '}{item.date}</p>
                              </div>
                          )
                      })
                  ) : ""
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
