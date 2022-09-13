import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import '../../../App.css'

export default class Header extends Component {  
  constructor() {
    super();
    this.state = {
      links: [
        {id: 1, to: '/', name: 'Home', className: ''},
        {id: 2, to: '/about', name: 'About', className: ''},
        {id: 3, to: '/contact', name: 'Contact', className: ''},
      ],
      selectedId: 1,
    }
  }

  myFunction = (id) => {
    this.setState({
      selectedId: id
    })

    console.log(id);
  }

  render() {
    const style = {
      background: '#edecec'
    }
    const css = {
      color: '#111',
      textDecoration: 'none',
      fontSize: '14pt'
    }
    const { links } = this.state
    return (
      <div className='d-flex p-5 pt-2 pb-2 justify-content-between' style={style}>
        <h4 className='mt-2'>Brand name</h4>
        <ul className="list-unstyled list-group list-group-horizontal">
            {/* <li className='list-item m-2'>
              <Link style={css} to={'/'}>Home</Link>
            </li>
            <li className='list-item m-2'>
              <Link style={css} to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/blog'}>Blog</Link>
            </li>
            <li className='list-item m-2'>
              <Link style={css} to={'/contact'}>Contact</Link>
            </li> */}

            {
              links.map((item, index) => {
                return (
                  <li key={index} className='list-item m-2'>
                    <Link
                    id={item.id} onClick={ () => this.myFunction(item.id)}
                    className={item.id === this.state.selectedId ? 'active' : ''} 
                    to={item.to}>{item.name}</Link>
                  </li>
                )
              })
            }
          </ul> 
      </div>
    )
  }
}
