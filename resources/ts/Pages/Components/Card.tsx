import React, { ReactNode } from "react";

interface CardProps {
    children: ReactNode | ReactNode[];
}

const Card = ({ children }: CardProps) => {
    return (
        <>
            <div className="max-w-md border-2 border-indigo-900 flex flex-col p-5 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 dark:bg-gradient-to-br dark:from-slate-900 dark:to-blue-800 shadow-md mx-auto">
                {" "}
                {children}{" "}
            </div>
        </>
    );
};
export default Card;
