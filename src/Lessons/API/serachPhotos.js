import React, { Component } from 'react'
import axios from 'axios';

export default class SerachPhotos extends Component {

    constructor() {
        super();
        this.state = {
            photos: [],
            searchVal: ''
        }
    }
    
    componentDidMount() {
        const url = `https://pixabay.com/api/?key=27282998-35bd8ab769465260cb0ef9d39&q=yellow+flowers&image_type=photo`
        axios.get(url).then(data => {
            console.log(data.data.hits);
            this.setState({
                photos: data.data.hits
            })
        })
    }
    
    componentDidUpdate() {
        const url = `https://pixabay.com/api/?key=27282998-35bd8ab769465260cb0ef9d39&q=${this.state.searchVal}&image_type=photo`
        axios.get(url).then(data => {
            console.log(data.data.hits);
            this.setState({
                photos: data.data.hits
            })
        })
    } 

    searchVal = (e) => {
        this.setState({
            searchVal: e.target.value
        })
    }

  render() {
      const {photos} = this.state
    return (
      <div>
          <div className="container">
              <div className="row">
                  <div className="col-md-6 offset-3">
                      <form action="#">
                          <input type="text" placeholder='Search photos...' className='form-control my-4' onChange={this.searchVal} />
                      </form>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-6 offset-3">
                      {
                          photos.map(image => {
                              return (
                                  <img key={image.id} src={image.webformatURL} alt="" />
                              )
                          })
                      }
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
