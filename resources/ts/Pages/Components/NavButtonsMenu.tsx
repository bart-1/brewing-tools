import React from "react";
import NavLinkButton, { ButtonSize } from "../../Shared/NavLinkButton";

type RouteMethod = "get" | "post"

interface NavButtonsMenuProps {
    classNameBtn?: string;
    classNameDiv?: string;
    navRoutes?: {route: string, method: RouteMethod }[];
    buttonsSize?: ButtonSize;
    label?: string;
}

const NavButtonsMenu = ({
    navRoutes,
    classNameBtn,
    classNameDiv,
    buttonsSize = "m",
    label,
}: NavButtonsMenuProps) => {
    const navButtonFactory = navRoutes?.map((route, index) => (
        <NavLinkButton
            key={index}
            href={"/" + route.route}
            active={true}
            className={`${classNameBtn}`}
            disabled={false}
            size={buttonsSize}
            dataCy={route.route}
            method={route.method}
        >
            {route.route}
        </NavLinkButton>
    ));

    return (
        <div className={classNameDiv}>
            <span className="pr-5 text-cyan-600 dark:text-cyan-800" >
                {label}
            </span>
            {navButtonFactory}
        </div>
    );
};

export default NavButtonsMenu;
