import React, {
    createContext,
    ReactElement,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

export type Theme = "light" | "dark";

export interface ThemeContext {
    colorTheme: Theme;
    setColorTheme: CallableFunction;
}
export const ThemeContext = createContext<ThemeContext>({
    colorTheme: "light",
    setColorTheme: () => {},
});

interface ThemeProviderProps {
    children: ReactNode | ReactNode[] | ReactElement;
}


const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [colorTheme, setColorTheme] = useState<Theme>("light");

    useEffect(() => {
        colorTheme === "dark"
            ? document.documentElement.setAttribute("data-theme", "dark")
            : document.documentElement.setAttribute("data-theme", "light");
    }, [colorTheme]);

    return (
        <ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeProvider;
