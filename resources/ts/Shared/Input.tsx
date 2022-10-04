import React, {
    useEffect,
    useRef,
    ChangeEvent,
    KeyboardEvent,
} from "react";

export type InputType = {
    appearance?: boolean;
    ariaLabel?: string;
    autoComplete?: string | undefined;
    className?: string;
    isFocused?: boolean;
    max?: number;
    min?: number;
    name: string;
    handleEnterKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    otherParameters?: object;
    placeholder?: string;
    required?: boolean;
    type: string;
    value: string | number;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 *  Input component, optional focused with tailwind,
 *  aria, cypress support
 *
 * @version 1.0.1
 * @author [Bartosz Woldański](https://github.com/bart-1)
 */

function Input({
    appearance = true,
    ariaLabel,
    autoComplete,
    className,
    handleChange,
    isFocused,
    max,
    min,
    name,
    handleEnterKeyDown,
    otherParameters,
    placeholder,
    required,
    type = "text",
    value,
}: InputType) {
    const input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isFocused && input.current) {
            input.current.focus();
        }
    }, []);

    return (
        <>
            <input
                aria-label={ariaLabel ? ariaLabel : name}
                data-cy={name}
                id={`input-${name}`}
                type={type}
                name={name}
                inputMode={!appearance ? "numeric" : "text"}
                value={value}
                className={`border-gray-300 focus:border-0 focus:ring focus:ring-[color:var(--btn-hov)] focus:ring-opacity-50 shadow-sm
                    ${className} `}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                onKeyDown={
                    handleEnterKeyDown
                        ? (e) => handleEnterKeyDown(e)
                        : undefined
                }
                placeholder={placeholder}
                min={type === "number" ? min : undefined}
                max={type === "number" ? max : undefined}
                {...otherParameters}
            />
        </>
    );
}

export default Input;
