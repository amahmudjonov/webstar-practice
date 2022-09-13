import React, { useState } from 'react'

const Lesson8 = () => {
    const [name, setName] = useState('Azamat');
    const [isToggle, setIsToggle] = useState(true);
    const [count, setCount] = useState(0)

    function onChange() {
      setIsToggle(!isToggle)
    }

    function add() {
      setCount(count + 1)
    }
  return (
    <div className='container'>
        {/* {
            name
        }
        <button className='btn btn-primary' onClick={onChange}>Click</button> */}
        <div>
          <p>{count}</p>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={add}>+</button>
        </div>
    </div>
  )
}

export default Lesson8