import { Page } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import { InertiaRoutePropsExtended } from "../../Shared/InterfacesAndTypes/InertiaInterface";
import InteractiveTable from "../../Shared/InteractiveTable";

const RecipeListTool = () => {
    const { allDataPack } = usePage<Page & InertiaRoutePropsExtended>().props;

    return (
        <>
            <div className="fixed z-30 overflow-hidden w-[40rem] h-fit -top-48 hover:top-20 rounded-b-xl">
                <div className="shadow-md rounded-br-xl bg-[color:var(--btn-hov)]">
                    <InteractiveTable
                        dataPack={allDataPack}
                        interactive="href"
                        classNameProps={``}
                        baseHrefURL="/panel/"
                    />
                </div>
                <div className="w-full text-[color:var(--btn-txt)] justify-start">
                    <div className="w-fit bg-[color:var(--btn-hov)] p-2 rounded-b-xl shadow-md">
                        Recipes list
                    </div>
                </div>
            </div>
        </>
    );
};
export default RecipeListTool;
