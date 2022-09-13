import React, { useContext } from 'react'
import { Context } from '../context'

const Demo = () => {

    const innerUser = useContext(Context)
    console.log(innerUser);
  return (
    <div>
        {/* <Context.Consumer>
            {user => <h1>{user}</h1>}
        </Context.Consumer> */}
        <h1>{innerUser.name}</h1>
    </div>
  )
}

export default Demo