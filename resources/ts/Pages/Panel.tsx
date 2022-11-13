import React from "react";
import { Page } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { InertiaRoutePropsExtended } from "../Shared/InterfacesAndTypes/InertiaInterface";
import SingleRecipe from "./Components/SingleRecipe";


const PanelPage = () => {
    const { title, allDataPack, singleDataPack } = usePage<
        Page & InertiaRoutePropsExtended
    >().props;

    return (
        <>
            <SingleRecipe />
        </>
    );
};
export default PanelPage;
