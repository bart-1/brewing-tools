import React, { SyntheticEvent } from "react";
import Button from "../../../ts/Shared/Button";
import Guest from "../../Layouts/AuthTemplate";
import Input from "../../../ts/Shared/Input";
import ValidationErrors from "../../../ts/Shared/ValidationErrors";
import { useForm } from "@inertiajs/inertia-react";
import AuthTemplate from "../../Layouts/AuthTemplate";

export default function ForgotPassword({ status }: { status: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

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

        post("password.email");
    };

    return (
        <AuthTemplate>
            <div className="mb-4 text-sm leading-normal text-gray-500">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="email"
                    value={data.email}
                    className="block w-full mt-1"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <div className="flex items-center justify-end mt-4">
                    <Button
                        className="ml-4"
                        disabled={processing}
                        type="submit"
                    >
                        Email Password Reset Link
                    </Button>
                </div>
            </form>
        </AuthTemplate>
    );
}
