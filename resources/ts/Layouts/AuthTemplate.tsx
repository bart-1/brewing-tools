import React, { ReactNode } from "react";
import ApplicationLogo from "../Shared/ApplicationLogo";

export default function AuthTemplate({
    children,
}: {
    children?: ReactNode | ReactNode[] | undefined;
}) {
    return (

            <div className="px-6 py-4 mt-6 overflow-hidden bg-white shadow-md max-w-72 sm:max-w-md sm:rounded-lg">
                {children}
            </div>
    );
}
