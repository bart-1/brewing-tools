import React, { FC } from "react";
import ApplicationLogo from "./ApplicationLogo";
import { InertiaRouteProps } from "../Shared/Interfaces";
import Button from "./Button";
import { useThemeContext } from "./ThemeContext";
import NavLink from "./NavLink";
import Nav from "./NavButtonsMenu";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { usePage } from "@inertiajs/inertia-react";
import { Page } from "@inertiajs/inertia";

const Header = () => {
     const { auth, navRoutes } = usePage<Page & InertiaRouteProps>()
         .props;
    const { colorTheme, setColorTheme } = useThemeContext();
    return (
        <>
            <div className="fixed top-0 z-40 flex w-full h-12 align-items-center bg-[color:var(--side-elements)] drop-shadow-md">
                <div className="flex flex-wrap md:flex-nowrap h-10 sm:w-full py-1 px-2 rounded-b-md text-[color:var(--text-dark)] text-right items-center justify-center grow">
                    <ApplicationLogo
                        className="justify-center hidden w-24 p-1 grow-0 xs:block right-2"
                        fillColor={`var(--text-body)`}
                    />
                    <IconContext.Provider
                        value={{
                            className:
                                "w-4 h-4 ml-px text-[color:var(--text-dark)] ",
                        }}
                    >
                        <Button
                            type="button"
                            onClick={() =>
                                setColorTheme(
                                    colorTheme === "dark" ? "light" : "dark"
                                )
                            }
                            className="flex-none w-8 h-8 mr-5 rounded-full"
                            disabled={false}
                            size="xs"
                            txtColor="amber-400"
                        >
                            {colorTheme ? <BsSunFill /> : <BsMoonFill />}
                        </Button>
                    </IconContext.Provider>
                    <div className="flex-none h-8 px-2 rounded-md max-w-xxs text-[color:var(--btn-hov)] md:order-last">
                        <span className="flex-none inline-block text-xs text-center text-[color:var(--text-body)] align-middle">
                            {auth?.user?.name
                                ? `user: ${auth.user.name}
                                 `
                                : `hello visitor, You can `}
                            {!auth?.user?.name && (
                                <>
                                    <NavLink
                                        href={"/login"}
                                        method="get"
                                        className="font-extrabold text-[color:var(--text-strong)] hover:text-[color:var(--btn-hov)]"
                                    >
                                        log in
                                    </NavLink>
                                    {` or `}
                                    <NavLink
                                        href="/register"
                                        method="get"
                                        className="font-extrabold text-[color:var(--text-strong)] hover:text-[color:var(--btn-hov)]"
                                    >
                                        register
                                    </NavLink>
                                </>
                            )}
                            {auth?.user?.name && (
                                <NavLink
                                    href={"/logout"}
                                    method="post"
                                    className="font-extrabold text-[color:var(--btn-bg)] hover:text-[color:var(--btn-hov)]"
                                >
                                    logout
                                </NavLink>
                            )}
                        </span>
                    </div>
                </div>
            </div>
            <div className="fixed z-30 w-full mx-auto text-center top-12">
                <div className="mx-auto w-96 bg-[color:var(--side-elements)] rounded-b-2xl drop-shadow-md p-1">
                    <Nav
                        navRoutes={navRoutes}
                        classNameDiv="mr-2 whitespace-nowrap"
                        classNameBtn="mr-2"
                    />
                </div>
            </div>
        </>
    );
};

export default Header;
