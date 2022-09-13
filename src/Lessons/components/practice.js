import React, { Component } from 'react'

export default class Practice extends Component {
 constructor(props){
     super(props)
     this.state={
         balance: 0,
         products: 0,
         products: [
             {name:'Laptop', brand:'acer', price:500, img: '', isAdded: false},
             {name:'phone', brand:'Samsung', price:200, img: '', isAdded: false},
             {name:'Laptop', brand:'hp', price:700, img: '', isAdded: false},
             {name:'phone', brand:'iphone', price:400, img: '', isAdded: false},
             {name:'Laptop', brand:'lenovo', price:550, img: '', isAdded: false},
             {name:'phone', brand:'redmi', price:150, img: '', isAdded: false}


         ]
     }
 }

handleChange = (newIsAdded) => {
    this.setState(
        this.state.products.map((item) => {
            if (item.isAdded === newIsAdded){
                item.isAdded = !item.isAdded;
            }
        })
    )
}

  render() {
      
    return (
        
      <div className='container'>
          <div className='d-flex'>

            {
                this.state.products.map((item, index) => {
                    return(
                    <div key={index} className='card w-25 m-2'>
                      <div className='card-body'>
                        <div className='d-flex justify-content-between'>
                          <h4> 
                              {item.brand}
                          </h4>
                          <p>
                              {
                                  item.price
                              }
                          </p>
                        </div>
                      </div>
                      <div className='card-footer'>
                          <button onClick={this.handleChange(item.isAdded)} className='btn btn-success'>Add</button>
                          
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
