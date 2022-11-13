import { Page } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import { InertiaRoutePropsExtended } from "../../Shared/InterfacesAndTypes/InertiaInterface";
import InteractiveTable from "../../Shared/InteractiveTable";

const SingleRecipe = () => {
    const { singleDataPack } = usePage<Page & InertiaRoutePropsExtended>()
        .props;

    if (!singleDataPack) return <div></div>;

    return (
        <div className="">
            <InteractiveTable
                dataPack={singleDataPack}
                interactive="edit"
                vertical={true}
                classNameProps="m-auto flex max-w-5xl border-2 border-[color:var(--accent)] rounded-xl shadow-xl"
            />
        </div>
    );
};
export default SingleRecipe;
