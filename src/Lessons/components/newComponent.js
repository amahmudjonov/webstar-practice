import React, { Component } from 'react'


export default class NewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            k: this.props.myProp
        }
    }

    componentWillUnmount() {
        alert('Can I leave')
    }

  render() {
    return (
      <div>{
        this.state.k ? 'MyNewComponent' : ''  
        }</div>
    )
  }
}
