import React, { useState } from 'react'
import { Navbar } from './themes/Navbar'
import ThemeContext, {themes} from './themes/themeContext'

const Main = () => {
    
    const [theme, setTheme] = useState(themes.dark)

  return (
    <div>
        <ThemeContext.Provider value={ theme }>
            <Navbar />
        </ThemeContext.Provider>
    </div>
  )
}

export default Main