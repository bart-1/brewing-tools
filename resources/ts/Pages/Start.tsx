import { Page } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import { InertiaRouteProps } from "../Shared/InterfacesAndTypes/InertiaInterface";

const Start = () => {
    const { title } = usePage<Page & InertiaRouteProps>().props;

    return (
        <>
            <div>{title}</div>
        </>
    );
};
export default Start;
