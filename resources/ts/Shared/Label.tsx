import React, { ReactNode } from "react";

export interface LabelProps {
    forInput: string;
    value: string;
    className?: string;
    children?: ReactNode | ReactNode[];
}

export default function Label({
    forInput,
    value,
    className,
    children,
}: LabelProps) {
    return (
        <label
            htmlFor={forInput}
            className={`block font-medium text-sm text-gray-700 ` + className}
        >
           {value} { children }
        </label>
    );
}
