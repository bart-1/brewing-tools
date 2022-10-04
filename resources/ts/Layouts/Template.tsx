import React, { ReactNode } from "react";
import NavButtonsMenu from "../Shared/NavButtonsMenu";

interface TemplateChildren {
    children: ReactNode | ReactNode[];
}

const Template = ({ children }: TemplateChildren) => {
    return (
        <>
            <div className="flex justify-between w-full mb-5">
                <NavButtonsMenu
                    classNameBtn="border-1 border-[color:var(--text-body)] mr-3"
                    classNameDiv="bg-black w-fit p-5 justify-self-start rounded-br-lg"
                    navRoutes={["start", "panel", "admin"]}
                    buttonsSize="m"
                />
                    <NavButtonsMenu
                        classNameBtn="border-1 border-[color:var(--text-body)] mr-3"
                        classNameDiv="bg-black w-fit p-5 justify-self-end rounded-bl-lg"
                        navRoutes={["login", "logout", "register"]}
                    buttonsSize="m"
                    label="user"
                    />
            </div>
            <div className="flex justify-center gap-5">{children}</div>
        </>
    );
};
export default Template;
