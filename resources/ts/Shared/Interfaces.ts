
export type DataDumpProps =
    | { [key: string]: string | number }[]
    | { [key: string]: string | object }[]
    | { [key: string]: string | { [key: string]: string | number } }[];

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

type ParsedJSONValue =
    | string | number | boolean | ParsedJSONData;

export type ParsedJSONData =
    | { [key: string]: ParsedJSONValue }[];
    // | { [key: number]: ParsedJSONValue }[];

// export type ParsedJSONValue =
//     | string
//     | number
//     | boolean
//     | { [key: string | number | symbol]: ParsedJSONValue }
//     | Array<ParsedJSONData>;

// export type ParsedJSONData =
//     | { [key: string | number | symbol]: ParsedJSONValue }
//     | Array<ParsedJSONValue>;
