import { Page } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import React, { ReactNode } from "react";
import { InertiaRoutePropsExtended } from "../Shared/InterfacesAndTypes/InertiaInterface";
import RecipeList from "../Pages/Components/RecipesList";

/**TODO:
 *
 * - anchor for hover
 */

interface ToolsLayerTemplateProps {
    children: ReactNode | ReactNode[];
}

const helpersArray = [RecipeList];

const ToolsLayerTemplate = ({ children }: ToolsLayerTemplateProps) => {
    const { helpersList } = usePage<Page & InertiaRoutePropsExtended>().props;

    const helpers =
        helpersList &&
        helpersList.map((key, index) => {
            const Helper = helpersArray[index];
            return <Helper key={index} />;
        });

    return (
        <>
            <div className="flex shrink-0">{helpers}</div>
            <div className="mt-28">{children}</div>
        </>
    );
};
export default ToolsLayerTemplate;
