import React, { useEffect, useState } from "react";
import { ParsedJSONData } from "./Interfaces";

interface TableProps {
    data?: string;
    classNameProps?: string;
    isActiveHref: boolean;
}

const TableJSON = ({
    classNameProps,
    data,
    // data = [{ table: "sorry, no data" }],
    isActiveHref,
}: TableProps) => {
    const [baseRoutePath, setBaseRouthPath] = useState("");


    useEffect(() => {
        setBaseRouthPath(window.location.pathname);
    }, []);

    const noDataError = data ? data : `[{"Error":"sorry, no data"}]`;

    const dataParsed: ParsedJSONData = JSON.parse(noDataError);
    // const dataParsed: ParsedJSONData = JSON.parse(noDataError, (key, value) => {console.log(key.'>'.value)});

    // const thead = Object.entries(dataParsed[0]).map(([key, value], index) => (
    //     <th key={index} className="py-5 text-center">
    //         {String(key)}
    //     </th>
    // ));

    const tbody = Object.values(dataParsed).map((value, index) => (
        <tr key={index}>
            {Object.entries(value).map((el, index) => (
                <td key={index} className="py-5 text-center">
                    {String(el[1])}
                </td>
            ))}
        </tr>
    ));

    return (
        <div className={`${classNameProps} p-3 w-full`}>
            <table
                className={`text-xs table-auto w-full text-[color:var(--text-body)]`}
            >
                <thead>
                    {/* <tr>{thead}</tr> */}
                </thead>
                <tbody>{tbody}</tbody>
            </table>
        </div>
    );
};

export default TableJSON;
