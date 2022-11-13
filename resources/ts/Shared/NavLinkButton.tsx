import React, { FC, ReactNode, useEffect, useState } from "react";
import { Link } from "@inertiajs/inertia-react";

export type ButtonSize = "l" | "m" | "s" | "xs";

export interface NavLinkButtonInterface {
    href?: string;
    method?: string;
    active?: boolean;
    children?: ReactNode | ReactNode[] | string | undefined;
    className?: string;
    size?: ButtonSize;
    bgColor?: string;
    txtColor?: string;
    dataCy?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const NavLinkButton: FC<NavLinkButtonInterface> = ({
    type='button',
    href,
    active = true,
    children,
    method = "get",
    className,
    bgColor = `bg-blue-900 hover:bg-sky-400 dark:bg-slate-900 dark:hover:bg-indigo-800`,
    size = "m",
    txtColor = `text-yellow-400 dark:text-gray-500 hover:text-yellow-100 dark:hover:text-gray-200`,
    dataCy,
    disabled,
}) => {
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        if (window.location.pathname.includes(`/${children}`))
            setIsPressed(true);
        else setIsPressed(false);
    }, [window.location.pathname]);
    return (
        <Link
            data-cy={dataCy}
            disabled={disabled}
            type={type}
            as="button"
            href={href ? href : ""}
            method={method}
            className={`inline-flex items-center border-transparent rounded-md font-normal ${
                size === "xs" && "px-1.5 py-1 border text-xxs"
            } ${size === "s" && "px-2 py-1.5 border text-xs"} ${
                size === "m" && "px-4 py-2 border text-xs"
            } ${size === "l" && "px-6 py-4 border text-s"} ${
                !isPressed
                    ? `${txtColor} ${bgColor} brightness-50`
                    : `${txtColor} ${bgColor} brightness-100`
            } ${disabled && "opacity-25"} ${className}`}
        >
            {children}
        </Link>
    );
};

export default NavLinkButton;
