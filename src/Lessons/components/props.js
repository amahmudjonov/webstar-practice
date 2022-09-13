import React, { Component } from 'react'

export default class Props extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text2: this.props.str
        }
    }
  render() {
    return (
      <div>
          <h1>{this.state.text2}</h1>
      </div>
    )
  }
}
