import React, { ReactNode } from "react";
import NavLink from "./NavLink";
import Search from "./Search";

interface NavSubMenuProps {
    links: { name: string }[];
    classNameProps?: string;
    path: string;
    children?: ReactNode | ReactNode[];
    childrenClassNameProps?: string;
}

const NavSubMenu = ({
    links,
    classNameProps = "",
    path,
    children,
    childrenClassNameProps,
}: NavSubMenuProps) => {
    const categoriesList = links.map((link, index) => (
        <NavLink key={link.name + index} href={`${path}/${link.name}`}>
            {`${link.name}`}
        </NavLink>
    ));

    return (
        <div className={classNameProps}>
            {categoriesList}
            <div className={childrenClassNameProps}>{children}</div>
        </div>
    );
};
export default NavSubMenu;
