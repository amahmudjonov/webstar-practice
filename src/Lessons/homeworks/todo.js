import React, { Component } from 'react'

export default class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.state={
            changedId: 0,
            id:0,
            name:'',
            date:'',
            status:'',
            icon:'fa fa-pencil',
            modal:false,
            todolist:[
                
            ],
        }
    }
    getVal=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    addTodo=()=>{
         this.setState({
                id: this.state.id+1
        })
        const st=this.state
        var todo={
            id:st.id,
            name:st.name,
            date:st.date,
            icon:st.icon,
            status: st.status === '' ? "pending" : st.status
        }
        this.setState({
        todolist:st.todolist.concat(todo)
        })
        console.log(st.todolist);
    }
    changeToDoind=(id)=>{
        this.setState(
            this.state.todolist.map(item=>{
                if(id === item.id)item.status="doing";
                return item
            })
        )
    }
    changeToDone=(id)=>{
        this.setState(
            this.state.todolist.map(item=>{
                if(id === item.id)item.status="done";
                return item
            })
        )
    }
    openModal=(id)=>{
        this.setState({
            modal:true
     })
     this.setState({
         changedId: id
     })
    }

    closeModal=()=>{
        this.setState({
            modal:false
     })
    }

    clearTodo=()=>{
        this.setState({
            todolist:[]
        })
    }
    changeText=()=>{
        var input=document.querySelector('#nem').value
        this.setState(
            this.state.todolist.map(item=>{
                if(this.state.changedId === item.id)item.name=input;
                return item
            }),
        )
        this.setState({
            modal:false
        })
        console.log(this.state.id);
    }
  render() {
    var st=this.state
    return (
      <div>
          <div>
              {this.state.modal === true ? (
                <div className='moda'>
                   <div className="col-3 moda_content"><button className='btn float-end' onClick={this.closeModal}><i className='fa-solid fa-xmark'></i></button> <h3 className=' mt-5 text-center'>Please Change Name</h3>
                    <input type="text" id='nem' className='form-control mt-3' />
                  
                    <button className='btn btn-primary btn2'  onClick={ ()=>this.changeText()} >Change</button>
                    </div>
                </div>
              ) : "" }
              <div className="row px-3">
                  <div className="col-md-3">
                      <h3 className='h3 text-center'>Add Todo</h3>
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" onChange={this.getVal} className='form-control mb-2'placeholder='enter todo name'/>
                      <label htmlFor="date">Date</label>
                      <input type="date" name="date" id="date" onChange={this.getVal} className='form-control mb-2'/>
                      <label htmlFor="status">Status</label>
                        <select className='form-control mb-4' onChange={this.getVal} name="status" id="status">
                            <option value="pending">Pending</option>    
                            <option value="doing">Doing</option>    
                        </select>               
                        <button className="btn btn-primary" onClick={this.addTodo}>Add Todo</button>       
                        <button className="btn btn-danger" onClick={this.clearTodo}>Clear Todo</button>       
                  </div>
                  <div className="col-md-3 px-2">
                      <div className="pendingBox">
                          <h3 className='text-center'>Rending List</h3>
                          
                          <hr />
                          {
                              st.todolist ? ( 
                                  st.todolist.filter(todo=> todo.status==='pending').map((item,index)=>{
                                      return(
                                          <div key={index}>
                                              <div className="d-flex justify-content-between my-2">
                                                 <p>{item.id + ' '}{item.name}</p>
                                                 <div>
                                                  <button onClick={ ()=>this.changeToDoind(item.id)} className='btn btn-warning'>Doing</button>
                                                  <button onClick={ ()=>this.openModal(item.id)} className='btn'><i className={item.icon}></i></button>
                                                  </div>
                                             </div>
                                             <h5>
                                                 {item.date}
                                             </h5>
                                          </div>
                                          
                                      )
                                  })
                              ): ""
                          }
                      </div>
                  </div>
                  <div className="col-md-3 px-2">
                      <div className="doingBox">
                          <h3 className='text-center'>Doing List</h3>
                          <hr />
                          {
                              st.todolist ? ( 
                                  st.todolist.filter(todo=> todo.status==='doing').map((item,index)=>{
                                      return(
                                          <div key={index}>
                                          <div className="d-flex justify-content-between">
                                              <p>{item.id + ' '}{item.name}</p>
                                              <div>
                                                  <button onClick={()=> this.changeToDone(item.id)} className='btn btn-success'>Done</button>                                                  
                                                  <button onClick={ ()=>this.openModal(item.id)} className='btn'><i className={item.icon}></i></button>
                                             </div></div>
                                            <h5>
                                                {item.date}
                                                </h5>
                                          </div>
                                      )
                                  })
                              ): ""
                          }
                      </div>
                  </div>
                  <div className="col-md-3 px-2">
                      <div className="doneBox">
                          <h3 className='text-center'>Done List</h3>
                          <hr />
                          {
                              st.todolist ? ( 
                                  st.todolist.filter(todo=> todo.status==='done').map((item,index)=>{
                                      return(
                                          <div key={index}>
                                              <div  className="d-flex justify-content-between">
                                              <p>{item.id + ' '}{item.name}</p>  
                                             </div>
                                             <h5>
                                                 {item.date}
                                             </h5>
                                          </div>
                                          
                                      )
                                  })
                              ): ""
                          }
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}