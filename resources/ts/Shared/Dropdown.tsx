import React, { ReactNode, useState, useContext } from "react";
import { Link } from "@inertiajs/inertia-react";
import { Transition } from "@headlessui/react";

interface ComponentChildren {
    children?: ReactNode | ReactNode[];
}

interface DropdownContentProps extends ComponentChildren {
    align?: string;
    width?: string;
    contentClasses?: string;
}

interface DropdownContext extends ComponentChildren {
    open: boolean;
    toggleOpen: () => void;
    setOpen: (prevState: boolean) => void;
}
interface DropdownLinkProps extends ComponentChildren {
    href: string;
    method: string;
    as: string;
}

export const DropdownContext = React.createContext<DropdownContext>({
    open: false,
    toggleOpen: () => {},
    setOpen: () => {},
});

export const Dropdown = ({ children }: ComponentChildren) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <DropdownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="relative">{children}</div>
        </DropdownContext.Provider>
    );
};

export const DropdownTrigger = ({ children }: ComponentChildren) => {
    const { open, setOpen, toggleOpen } = useContext(DropdownContext);

    return (
        <>
            <div onClick={toggleOpen}>{children}</div>

            {open && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setOpen(false)}
                ></div>
            )}
        </>
    );
};

export const DropdownContent = ({
    align = "right",
    width = "48",
    contentClasses = "py-1 bg-white",
    children,
}: DropdownContentProps) => {
    const { open, setOpen } = useContext(DropdownContext);

    let alignmentClasses = "origin-top";

    if (align === "left") {
        alignmentClasses = "origin-top-left left-0";
    } else if (align === "right") {
        alignmentClasses = "origin-top-right right-0";
    }

    let widthClasses = "";

    if (width === "48") {
        widthClasses = "w-48";
    }

    return (
        <Transition
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            {open && (
                <div
                    className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
                    onClick={() => setOpen(false)}
                >
                    <div
                        className={`rounded-md ring-1 ring-black ring-opacity-5 ${contentClasses}`}
                    >
                        {children}
                    </div>
                </div>
            )}
        </Transition>
    );
};

export const DropdownLinkProps = ({
    href,
    method = "post",
    as = "a",
    children,
}:DropdownLinkProps
) => {
    return (
        <Link
            href={href}
            method={method}
            as={as}
            className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
        >
            {children}
        </Link>
    );
};
