import React, { ReactNode } from "react";
import NavButtonsMenu from "../Pages/Components/NavButtonsMenu";
import ThemeSwitcher from "../Pages/Components/ThemeSwitcher";
import ToolsLayerTemplate from "./ToolsLayerTemplate";

interface TemplateChildren {
    children: ReactNode | ReactNode[];
}

const Template = ({ children }: TemplateChildren) => {
    return (
        <>
            <div className="fixed z-40 flex justify-between w-full h-20 mb-5 bg-slate-900 dark:bg-black shadow-md">
                <NavButtonsMenu
                    classNameBtn="mr-3"
                    classNameDiv=" bg-slate-900 dark:bg-black shadow-md w-fit p-5 justify-self-start rounded-br-lg"
                    navRoutes={[{route: "start", method: "get"}, {route: "panel", method: "get"}, {route: "admin", method: "get"}]}
                    buttonsSize="m"
                />
                <ThemeSwitcher />
                <NavButtonsMenu
                    classNameBtn="border-1 border-[color:var(--text-body)] mr-3"
                    classNameDiv=" bg-slate-900 dark:bg-black shadow-md w-fit p-5 justify-self-end rounded-bl-lg"
                    navRoutes={[{ route: "login", method: "get"}, {route: "logout", method: "post"}, {route:"register", method: "get"}]}
                    buttonsSize="m"
                    label="user"

                />
            </div>
            <div className="flex flex-col flex-wrap ">
                <ToolsLayerTemplate>{children}</ToolsLayerTemplate>
            </div>
        </>
    );
};
export default Template;
