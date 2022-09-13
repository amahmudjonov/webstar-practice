import React, { Component } from 'react'
import NewComponent from './newComponent';

// lifecycle methods: 
// 1. constructor
// 2. render
// 3. component did mount
// 4. component did uptade
// 5. component will unmount

export default class Lesson3 extends Component {
    constructor(props){
        super(props)
        this.state = { 
            name: 'a',
            k: true
        }
        console.log('Constructor...');
    }

    myFunction = () => {
        this.setState({
            k: !this.state.k
        })
    }

    componentDidMount() {
      console.log('ComponentDidMount');
    }

    componentDidUpdate() {
      setTimeout(() => {
        console.log('ComponentDidUpdate');
      }, 1000);
    }

  render() {
    console.log('Render...');
    return (
      <div>
          <h1>Hello</h1>
          <button onClick={this.myFunction}>Click</button>
          {/* <NewComponent myProp={this.state.k} /> */}
          {
            this.state.k ? <NewComponent myProp={this.state.k} /> : ''
          }
      </div>
    )
  }
}
