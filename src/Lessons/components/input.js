import React, { Component } from 'react'

export default class Input extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handelSubmit = () => {
        alert()
    }

  render() {
    return (
      <form className='form-control' action="#">
          <input className='form-control' type="text" />
          <input type="submit" className='btn btn-secondary mt-2' />
      </form>
    )
  }
}
