import React, { SyntheticEvent } from "react";
import Button from "../../../ts/Shared/Button";
// import Guest from "../../Layouts/AuthTemplate";
import { Link, useForm } from "@inertiajs/inertia-react";
import AuthTemplate from "../../Layouts/AuthTemplate";

export default function VerifyEmail({ status }: { status: string }) {
    const { post, processing } = useForm({
        post: false,
        processing: () => {},
    });

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();

        post("/verification.send");
    };

    return (
        <AuthTemplate>
            <div className="mb-4 text-sm text-gray-600">
                Thanks for signing up! Before getting started, could you verify
                your email address by clicking on the link we just emailed to
                you? If you didn't receive the email, we will gladly send you
                another.
            </div>

            {status === "verification-link-sent" && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="flex items-center justify-between mt-4">
                    <Button disabled={processing} type="submit">
                        Resend Verification Email
                    </Button>

                    <Link
                        href={"/logout"}
                        method="post"
                        as="button"
                        className="text-sm text-gray-600 underline hover:text-gray-900"
                    >
                        Log Out
                    </Link>
                </div>
            </form>
        </AuthTemplate>
    );
}
