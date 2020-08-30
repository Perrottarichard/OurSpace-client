import React, { useState, useEffect, createContext } from "react";

const darkTheme = {
  bg: "#2e2e36",
  messageText: "white",
  bubble: 'white',
  bubbleText: '#2e2e36',
  bubbleOther: '#2e2e36',
  otherText: 'white',
  messageBg: "yellow",
  boxBg: "#505052",
  button: '#cdcdd4',
  buttonText: "black",
  left: '#2e2e36',
  inputBg: '#3b3b3d',
  inputText: 'white',
  closeIcon: '#505052'
};

const lightTheme = {
  bg: "#e1e1e3",
  messageText: "#30302f",
  bubble: '#bce3e6',
  bubbleText: '#30302f',
  bubbleOther: '#e1e1e3',
  otherText: 'black',
  messageBg: "#4c4cad",
  boxBg: "#ffffff",
  button: "#4c4cad",
  buttonText: "white",
  left: 'white',
  inputBg: 'white',
  inputText: '#30302f',
  closeIcon: 'white'
};
const nurpleTheme = {
  bg: "#3d0369",
  messageText: '#360257',
  bubble: '#fbbdff',
  bubbleText: '#3d0369',
  bubbleOther: '#3d0369',
  otherText: '#fbbdff',
  messageBg: "#f50fa8",
  boxBg: "#bd7aff",
  button: "#f50fa8",
  buttonText: "white",
  left: 'white',
  inputBg: '#fbbdff',
  inputText: '#440673',
  closeIcon: 'white'
};

const themeVars = {
  font: "Fira Sans",
  black: "#11161D",
  white: "#FFF",
};

export const AppThemeContext = createContext({
  theme: lightTheme,
  vars: themeVars
});

const AppThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const [change, setChange] = useState(false)
  const localSt = localStorage.getItem("mode");
  useEffect(() => {
    if (change || localSt) {
      if (localSt === 'nurple') {
        setTheme(nurpleTheme)
      }
      if (localSt === 'dark') {
        setTheme(darkTheme)
      }
      if (localSt === 'light') {
        setTheme(lightTheme)
      }
    }
    setChange(false)
  }, [setTheme, localSt, change])
  const selection = (event) => {
    event.preventDefault()
    localStorage.setItem('mode', event.target.value)
    setChange(true)
  }

  return (
    <AppThemeContext.Provider value={{ theme, setTheme, selection }}>
      {children}
    </AppThemeContext.Provider>
  )
}
export default AppThemeProvider