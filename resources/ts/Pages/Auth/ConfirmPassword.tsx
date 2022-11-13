import React, { SyntheticEvent, useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import NavLinkButton from "../../Shared/NavLinkButton";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event: SyntheticEvent) => {
        const currentTarget =
            event.currentTarget as typeof event.currentTarget & {
                name: "email" | "password" | "remember" | any;
                value: typeof data;
            };
        setData(currentTarget.name, currentTarget.value);
    };

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();

        post("password.confirm");
    };

    return (
        <>
            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>
            {/* <ValidationErrors errors={errors} /> */}
            <form onSubmit={submit}>
                <div className="mt-4">
                    <label>
                        <input
                            type="password"
                            name="password"
                            value={data.password}
                            className="block w-full mt-1"
                            // isFocused={true}
                            onChange={onHandleChange}
                        />
                    </label>
                </div>
                <div className="flex items-center justify-end mt-4">
                    <NavLinkButton
                        type="submit"
                        className="ml-4"
                        disabled={processing}
                    >
                        Confirm
                    </NavLinkButton>
                </div>
            </form>
        </>
    );
}
