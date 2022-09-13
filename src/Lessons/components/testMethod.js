import React, { Component } from 'react'

export default class TestMethod extends Component {
    constructor() {
        super();
        this.state = {
            num: [11, 24, 35, 42, 37, 12, 13, 15, 45, 135, 72],
            tub: false
        }
    }
  render() {
    return (
      <div>
          {
              this.state.num.map((num, index) => {
                //   if (num % 2 > 0) {
                //       return (
                //           <h1 key={index}>{num}</h1>
                //       )
                //   }
///////////////////////////////////////////////////////////////
            //     for (let i = 2; i < num; i++) {
            //         if (num % i === 0) {
            //             return <p key={index}>{num}</p>
            //         } 
            //     }
            //   
            //////////////////////////////////////////////////////////

            if (num % 3 === 0 && num % 5 === 0) {
                return <p key={index}>{num}</p>
            }
        })
          }
      </div>
    )
  }
}
