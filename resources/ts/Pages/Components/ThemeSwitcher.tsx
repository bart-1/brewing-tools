import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { TbSun, TbMoon } from "react-icons/tb";

interface ThemeSwitcherProps {
    size?: "S" | "M" | "L";
}

const ThemeSwitcher = ({ size = "M" }: ThemeSwitcherProps) => {
    const [theme, setTheme] = useState<string>();
    const [iconSize, setIconSize] = useState(30);

    useEffect(() => {
        if (size === "S") setIconSize(15);
        if (size === "L") setIconSize(45);
        const actualTheme = document.documentElement.getAttribute("data-theme");
        if (actualTheme) setTheme(actualTheme);
        else setTheme("light");
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme ?? "");
        if (theme === "dark") document.documentElement.classList.add("dark");
        if (theme === "light")
            document.documentElement.classList.remove("dark");
    }, [theme]);

    const handleClick = () => {
        if (theme === "dark") setTheme("light");
        if (theme === "light") setTheme("dark");
    };

    return (
        <>
            <div
                className="p-3"
                style={{ padding: "0.75rem" }}
                onClick={handleClick}
            >
                <IconContext.Provider
                    value={{
                        size: `${iconSize}`,
                        className: "text-yellow-500 dark:text-gray-300",
                    }}
                >
                    {theme === "light" ? <TbSun /> : <TbMoon />}
                </IconContext.Provider>
            </div>
        </>
    );
};
export default ThemeSwitcher;
