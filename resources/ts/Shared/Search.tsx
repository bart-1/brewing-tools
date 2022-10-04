import React, {
    ChangeEvent,
    KeyboardEvent,
    KeyboardEventHandler,
    useEffect,
    useState,
} from "react";
import NavLink from "./NavLink";
import { IconContext } from "react-icons";
import { BsFillCaretRightFill } from "react-icons/bs";
import { Inertia } from "@inertiajs/inertia";
import Input from "./Input";

type SearchProps = {
    basePath?: string
}

const Search = ({basePath}:SearchProps) => {
    const [input, setInput] = useState("");
    const [isActive, setIsActive] = useState(false);
   

    useEffect(() => {
        if (input.length > 0) setIsActive(true);
        else setIsActive(false);
    }, [input]);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") Inertia.visit(`${basePath}/search/${input}`);
    };

    return (
        <div className="flex align-items-center">
            {/* <input
                type="text"
                name={`Search`}
                aria-label={`Search`}
                placeholder="search..."
                onChange={(e) => setInput(e.currentTarget.value)}
                value={input}
                className="w-24 h-8 p-1 rounded-l-md"
                onKeyDown={(e) => handleKeyDown(e)}
                pattern="/[A-Za-z0-9]/gs"
            /> */}
            <Input
                ariaLabel="Search"
                className="w-24 p-1 text-sm rounded-l-md"
                type="text"
                name="search"
                placeholder="Search..."
                handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setInput(e.currentTarget.value)
                }
                value={input}
                handleEnterKeyDown={(e) => handleKeyDown(e)}
            />
            <IconContext.Provider
                value={{
                    className: "w-6 h-6 text-[color:var(--text-body)] m-auto",
                }}
            >
                <NavLink href={`${basePath}/search/${input}`} active={isActive}>
                    <div className="flex w-8 h-8 p-0 bg-[color:var(--btn-bg)] hover:bg-[color:var(--btn-hov)] justify-center rounded-r-md">
                        <BsFillCaretRightFill />
                    </div>
                </NavLink>
            </IconContext.Provider>
        </div>
    );
};
export default Search;
