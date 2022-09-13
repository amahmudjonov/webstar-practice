import React from "react";

export const themes = {
    dark: {
        className: 'navbar navbar-expand-lg navbar-dark bg-dark'
    },
    light: {
        className: 'navbar navbar-expand-lg navbar-light bg-light'
    }
}

const ThemeContext = React.createContext()

export default ThemeContext