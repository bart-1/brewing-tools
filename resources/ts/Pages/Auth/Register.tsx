import React, { SyntheticEvent, useEffect } from "react";
import Button from "../../../ts/Shared/Button";
import Guest from "../../Layouts/AuthTemplate";
import Input from "../../../ts/Shared/Input";
import Label from "../../../ts/Shared/Label";
import ValidationErrors from "../../../ts/Shared/ValidationErrors";
import { Link, useForm } from "@inertiajs/inertia-react";
import AuthTemplate from "../../Layouts/AuthTemplate";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event: SyntheticEvent) => {
        const currentTarget =
            event.currentTarget as typeof event.currentTarget & {
                name: "email" | "password" | "remember" | any;
                type: string;
                checked: boolean;
                value: typeof data;
            };
        setData(
            currentTarget.name,
            currentTarget.type === "checkbox"
                ? currentTarget.checked
                : currentTarget.value
        );
    };

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();

        post("register");
    };

    return (
        <AuthTemplate>
            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="name" value="Name" />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="block w-full mt-1"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="email" value="Email" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full mt-1"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full mt-1"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label
                        forInput="password_confirmation"
                        value="Confirm Password"
                    />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="block w-full mt-1"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={"/login"}
                        className="text-sm text-gray-600 underline hover:text-gray-900"
                    >
                        Already registered?
                    </Link>

                    <Button
                        className="ml-4"
                        disabled={processing}
                        type="submit"
                    >
                        Register
                    </Button>
                </div>
            </form>
        </AuthTemplate>
    );
}
