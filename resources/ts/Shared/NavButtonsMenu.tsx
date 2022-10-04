import React from "react";
import NavLinkButton, { ButtonSize } from "./NavLinkButton";

interface NavButtonsMenuProps {
    classNameBtn?: string;
    classNameDiv?: string;
    navRoutes?: string[];
    buttonsSize?: ButtonSize;
    label?: string;
}

const NavButtonsMenu = ({
    navRoutes,
    classNameBtn,
    classNameDiv,
    buttonsSize = "m",
    label
}: NavButtonsMenuProps) => {
    const navButtonFactory = navRoutes?.map((route, index) => (
        <NavLinkButton
            key={index}
            href={"/" + route}
            active={true}
            className={`${classNameBtn}`}
            disabled={false}
            size={buttonsSize}
            dataCy={route}
        >
            {route}
        </NavLinkButton>
    ));

    return <div className={classNameDiv}><span className="pr-5">{label}</span>{navButtonFactory}</div>;
};

export default NavButtonsMenu;
