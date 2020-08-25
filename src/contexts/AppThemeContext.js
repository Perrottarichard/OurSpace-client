import React, { useState, useEffect, createContext } from "react";

const darkTheme = {
  bg: "#0B1622",
  primaryColor: "#9FADBD",
  secondaryColor: "#8596A5",
  tertiaryColor: "#151F2E",
};

const lightTheme = {
  bg: "#E5EBF1",
  primaryColor: "#26343F",
  secondaryColor: "#404E5C",
  tertiaryColor: "#FBFBFB",
};
const nurpleTheme = {
  bg: "#59076b",
  primaryColor: "white",
  secondaryColor: "#f7d272",
  tertiaryColor: "#f590df",
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