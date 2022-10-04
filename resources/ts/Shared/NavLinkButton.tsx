import React, { FC, ReactNode, useEffect, useState } from "react";
import { Link } from "@inertiajs/inertia-react";

export type ButtonSize = "l" | "m" | "s" | "xs";

export interface NavLinkButtonInterface {
    href: string;
    method?: string;
    active?: boolean;
    children?: ReactNode | ReactNode[] | string | undefined;
    className?: string;
    size?: ButtonSize;
    bgColor?: string;
    txtColor?: string;
    hoverColor?: string;
    dataCy?: string;
    disabled?: boolean;
}

const NavLinkButton: FC<NavLinkButtonInterface> = ({
    href,
    active = true,
    children,
    method = "get",
    className,
    bgColor = `bg-[color:var(--btn-bg)]`,
    hoverColor = `bg-[color:var(--btn-hov)]`,
    size = "m",
    txtColor = `text-[color:var(--btn-txt)]`,
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
            as="button"
            href={active ? href : ""}
            method={method}
            className={`inline-flex items-center border-transparent rounded-md font-normal ${
                size === "xs" && "px-1.5 py-1 border text-xxs"
            } ${size === "s" && "px-2 py-1.5 border text-xs"} ${
                size === "m" && "px-4 py-2 border text-xs"
            } ${size === "l" && "px-6 py-4 border text-s"} ${
                !isPressed
                    ? `${txtColor} ${bgColor} hover:${hoverColor}`
                    : `${txtColor} ${hoverColor} hover:${bgColor}`
            } ${disabled && "opacity-25"} ${className}`}
        >
            {children}
        </Link>
    );
};

export default NavLinkButton;
