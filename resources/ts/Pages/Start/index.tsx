import { Page } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import { InertiaRouteProps } from "../../../ts/Shared/Interfaces";
import NavLink from "../../Shared/NavLink";

const Start = () => {
      const { title } = usePage<
          Page & InertiaRouteProps
      >().props;

    return (
        <>
        </>
    );
};
export default Start;
