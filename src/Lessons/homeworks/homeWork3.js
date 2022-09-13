import React, { Component } from 'react'

export default class HomeWork3 extends Component {
    constructor() {
        super();
        this.state = {
            userBalance: 0,
            selectedBalance: 0,
            productSelected: [],
            products: [
                {id: 1, disabled: true, name:'Phone', brand:'Samsung', price:200, img: '', isAdded: false},
                {id: 2, disabled: true, name:'Laptop', brand:'HP', price:700, img: '', isAdded: false},
                {id: 3, disabled: true, name:'Phone', brand:'iPhone', price:400, img: '', isAdded: false},
                {id: 4, disabled: true, name:'Laptop', brand:'Lenovo', price:550, img: '', isAdded: false},
                {id: 5, disabled: true, name:'Phone', brand:'Redmi', price:150, img: '', isAdded: false},
                {id: 6, disabled: true, name:'Laptop', brand:'Acer', price:500, img: '', isAdded: false}
            ],
            remains: 0,
        }
    }

    a = (newId) => {

        const st = this.state

        this.setState(
            this.state.products.map((item) => {
                if (newId === item.id) {
                    item.isAdded = !item.isAdded
                }
            })
        )

        this.setState(
            this.state.products.map((item) => {
                if (item.id === newId && item.isAdded && st.userBalance >= st.selectedBalance + item.price && st.userBalance) {
                    st.selectedBalance = st.selectedBalance + item.price 
                }
                if (item.id === newId && !item.isAdded && st.userBalance) {
                    st.selectedBalance = st.selectedBalance - item.price
                }
                return item;
            })
        )

        this.setState({
            remains: parseInt(st.userBalance - st.selectedBalance)
        })

        console.log(st.remains);
    }

    setBalance = () => {
        const st = this.state

        var inputVal = document.querySelector('input').value
        this.setState({
            userBalance: parseInt(st.userBalance) + parseInt(inputVal)
        })
        document.querySelector('input').value = ''

        this.setState({
            remains: parseInt(st.userBalance - st.selectedBalance)
        })

        this.setState(
            this.state.products.map((item) => {
                if (item.price == st.remains) {
                    item.disabled = false
                }
            })
        )
    }

  render() {
    return (
      <div className='container mt-5'>
          <form action="#" className='d-flex'>
              <input onChange={this.getBalance} type="number" placeholder='Enter your balance...' className='form-control m-2' />
              <button onClick={this.setBalance} className="btn btn-warning m-2">Enter</button>
          </form>
          <div className="container">
              <h5>
                  Balance: ${this.state.userBalance}
              </h5>
              <h5>
                  Selected: ${this.state.selectedBalance}
              </h5>
          </div>
          <div className='d-flex flex-wrap justify-content-center'>
              {
                  this.state.products.map((item, index) => {
                      return(
                        <div key={index} className="card w-25 m-2">
                        <div className="card-body">
                            <div className="flex justify-content-between">
                                <h5 className='card-title'>
                                    {item.name}: {item.brand}
                                </h5>
                                <p className="card-description">
                                    Price: ${item.price}
                                </p>
                            </div>
                            <div className="card-footer d-flex">
                                {
                                    
                                }
                                {
                                    item.isAdded ? 
                                    <button disabled={item.disabled} id={item.id} onClick={() => this.a(item.id)} className="btn btn-danger m-auto">Remove</button> :
                                    <button disabled={item.disabled} id={item.id} onClick={() => this.a(item.id)} className="btn btn-success m-auto">Add</button>
                                }
                            </div>
                        </div>
                    </div>
                      )
                  })
              }
          </div>
      </div>
    )
  }
}
