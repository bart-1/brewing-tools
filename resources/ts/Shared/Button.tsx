import React, { MouseEventHandler, MouseEvent, ReactNode, SyntheticEvent } from "react";
import { IconType } from "react-icons";

export type ButtonType = {
    bgColor?: string;
    children?: ReactNode | ReactNode[];
    className?: string;
    disabled?: boolean;
    hoverColor?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    size?: "l" | "m" | "s" | "xs";
    type: "submit" | "button" | "reset" | undefined;
    txtColor?: string;
    dataCy?: string;
    name?: string;
};

function Button({
    bgColor = `bg-[color:var(--btn-bg)]`,
    children,
    className = "",
    disabled,
    hoverColor = `bg-[color:var(--btn-hov)]`,
    onClick,
    size = "m",
    type = "button",
    txtColor = `text-[color:var(--btn-txt)]`,
    dataCy,
    name,
}: ButtonType) {
    return (
        <button
            data-cy={dataCy}
            type={type}
            className={`inline-flex items-center border-transparent rounded-md font-normal
            hover:${hoverColor} ${txtColor} ${bgColor} ${
                size === "xs" && "px-1.5 py-1 border text-xxs"
            } ${size === "s" && "px-2 py-1.5 border text-xs"} ${
                size === "m" && "px-4 py-2 border text-xs"
            } ${size === "l" && "px-6 py-4 border text-s"} ${
                disabled && "opacity-25"
            } ${className}`}
            disabled={disabled}
            onClick={onClick ? (e:MouseEvent<HTMLButtonElement>) => onClick(e) : undefined}
            name={name}
        >
            {children}
        </button>
    );
}

export default Button;
