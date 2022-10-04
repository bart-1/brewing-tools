import React, { SyntheticEvent, useEffect } from "react";
import Button from "../../../ts/Shared/Button";
import Guest from "../../Layouts/AuthTemplate";
import Input from "../../../ts/Shared/Input";
import Label from "../../../ts/Shared/Label";
import ValidationErrors from "../../../ts/Shared/ValidationErrors";
import { useForm } from "@inertiajs/inertia-react";
import AuthTemplate from "../../Layouts/AuthTemplate";

interface ResetPasswordI {
    token: string;
    email: string;
}

export default function ResetPassword({ token, email }: ResetPasswordI) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
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
                value: typeof data;
            };
        setData(currentTarget.name, currentTarget.value);
    };

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();

        post("/password.update");
    };

    return (
        <AuthTemplate>
            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="Email" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full mt-1"
                        autoComplete="username"
                        handleChange={onHandleChange}
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
                        isFocused={true}
                        handleChange={onHandleChange}
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
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button
                        className="ml-4"
                        disabled={processing}
                        type="submit"
                    >
                        Reset Password
                    </Button>
                </div>
            </form>
        </AuthTemplate>
    );
}
