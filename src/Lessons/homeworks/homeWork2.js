import React, { Component } from 'react'

export default class HomeWork extends Component {
    constructor(){
        super()
        this.state = {
            total: 0,
            selectedNum: 0,
            class: 'true'
        }
    }

    btnPressed = (e) => {
        console.log(e.target.id); 

        if (this.state.class === 'true') {
            this.setState({
                class: 'false'
            })
        } else {
            this.setState({
                class: 'true'
            })
        }

        this.setState({
            total: this.state.total += 1
        })
    }       



  render() {
    return (
      <div className='container-fluid col-md-6'>
          <div className="content">
              <h1>Total: <p>{this.state.total}</p></h1>
              <h1>Selected: <p>{this.state.selectedNum}</p></h1>
          </div>
          <div className="col">
                <div className="card m-2" style={{width: '18rem'}}>
                    <img src="https://i.ucrazy.ru/files/i/2007.12.8/1197110766_oboina25.jpg" alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Hello</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#">$100</a>
                        <button className={this.state.class} id={'1'} onClick={this.btnPressed}></button>
                    </div>
                </div>
                <div className="card m-2" style={{width: '18rem'}}>
                    <img src="https://i.ucrazy.ru/files/i/2007.12.8/1197110766_oboina25.jpg" alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Hello</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#">$100</a>
                        <button className={this.state.class} id={'2'} onClick={this.btnPressed}></button>
                    </div>
                </div>
                <div className="card m-2" style={{width: '18rem'}}>
                    <img src="https://i.ucrazy.ru/files/i/2007.12.8/1197110766_oboina25.jpg" alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Hello</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#">$100</a>
                        <button className={this.state.class} id={'3'} onClick={this.btnPressed}></button>
                    </div>
                </div>
                <div className="card m-2" style={{width: '18rem'}}>
                    <img src="https://i.ucrazy.ru/files/i/2007.12.8/1197110766_oboina25.jpg" alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Hello</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#">$100</a>
                        <button className='true' id={'4'} onClick={this.btnPressed}></button>
                    </div>
                </div>
                <div className="card m-2" style={{width: '18rem'}}>
                    <img src="https://i.ucrazy.ru/files/i/2007.12.8/1197110766_oboina25.jpg" alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Hello</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#">$100</a>
                        <button className='true' id={'5'} onClick={this.btnPressed}></button>
                    </div>
                </div>
                <div className="card m-2" style={{width: '18rem'}}>
                    <img src="https://i.ucrazy.ru/files/i/2007.12.8/1197110766_oboina25.jpg" alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Hello</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#">$100</a>
                        <button className='true' id={'6'} onClick={this.btnPressed}></button>
                    </div>
                </div>
          </div>
      </div>
    )
  }
}
