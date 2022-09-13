// React 2nd lesson

import React from 'react'

export default class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            number: 0,
            arr: [
                1,2,3,4,5,6,7
            ]
        }

        // this.addNumber = this.addNumber.bind(this)
        // this.minNumber = this.minNumber.bind(this)
    }

    addNumber = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    minNumber = () => {
        if (this.state.number <= 0) {
            return false
        } else {
            this.setState({
                number: this.state.number - 1
            })
        }
    }
    show = () => {
        // this.state.arr.forEach((element, index) => {
        //     console.log(element, 'Index: ' + index);
        //     // console.log(index);
        // })

        // const newArr = this.state.arr.forEach((element, index) => {
        //     return element;
        // })

        const newArr = this.state.arr.map((element, index) => {
            return element;
        })

        console.log(newArr);

    }

    
    render() {
        return(
            <div>
                <div className='container text-center'>
                    <h1 className='list-group-item'>{this.state.number}</h1>
                    <button className='btn btn-success m-2' onClick={this.addNumber}>Add</button>
                    <button disabled={this.state.number === 0} className='btn btn-danger m-2' onClick={this.minNumber}>Minus</button>
                    <button className='btn btn-info m-2' onClick={this.show}>Show</button>

                    <h1>
                        {this.state.number === 0 ? 'Cannot minus more' : 'Can minus more'}
                    </h1>
                </div>
            </div>
        )
    }
}