import {createContext} from 'react'

export const themes = {
    light: {
      secondary: 'white',
      primary: '#008080'
    }
  }
  
  
  export const ThemeContext = createContext(themes.light);
  