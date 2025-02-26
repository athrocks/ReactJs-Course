import React from "react";
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// in 10-mini-context-api repo we did this same file work in 2 files
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
  return useContext(ThemeContext);
}