
export type DataPack = {
    [key: string]: string | number | object | DataPack | DataPack[];
};


export interface InertiaRouteProps {
    props?: {
        auth?: { user: { admin: number; name: string; email?: string } };
        errors?: object;
        navRoutes?: string[];
        header?: string;
        dataDump?: string;
        title?: SVGStringList;
        responseStatus?: number;
        recordsTotal?: number;
        returnedPageNumber?: number;
        submenu?: { name: string }[];
        imagesCollection?: { name: string; url: string; purpose: string }[];
        products?: {
            id: number;
            name: string;
            description: string;
            image: { id: number; name: string; url: string };
            price: number;
            tax: number;
        }[];
    };
}

// extend propertise props in interface
export interface InertiaRoutePropsExtended extends InertiaRouteProps {
    props: InertiaRouteProps["props"] & {
        allDataPack: { [key: string]: DataPack }[];
        singleDataPack: { [key: string]: DataPack }[];
        helpersList: string[];
    };
}
