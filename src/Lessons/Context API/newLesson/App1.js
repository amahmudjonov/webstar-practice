import React from 'react'
import { Context } from './context'
import Demo from './demo'

const App = () => {

    const user = {
        name: 'Doston',
        surname: "Ergashev",
        age: 28,
        ismarried: true
    };

  return (
    <>
        <Context.Provider value={user}>
            <Demo />
        </Context.Provider>
    </>
  )
}

export default App