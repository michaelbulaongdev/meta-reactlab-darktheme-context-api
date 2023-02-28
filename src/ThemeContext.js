import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => setTheme("light" ? "light" : "dark");

    return (
        <ThemeContext.Provider value={{ theme }}></ThemeContext.Provider>
    )
}
    
export const useTheme = () => useContext(ThemeContext);
