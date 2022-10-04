import React, { useEffect, useState } from "react";
import { ParsedJSONData } from "./Interfaces";

interface TableProps {
    parsedData: ParsedJSONData;
    classNameProps?: string;
    isActiveHref: boolean;
    biggestCellsKeys?: string[];
    omitColumns?: string[];
}

const Table = ({
    classNameProps,
    biggestCellsKeys,
    isActiveHref,
    omitColumns,
    parsedData,
}: TableProps) => {
    const [baseRoutePath, setBaseRouthPath] = useState("");
    useEffect(() => {
        setBaseRouthPath(window.location.pathname);
    }, []);

    const thead = Object.entries(parsedData[0]).map(([key, value], index) => {
        if (
            omitColumns &&
            omitColumns.length > 0 &&
            !omitColumns.find((element) => element === String(key))
        )
            return (
                <th key={index} className="py-5 text-center">
                    {String(key.replace("_", " "))}
                </th>
            );
    });

    const tbody = Object.entries(parsedData).map(
        ([keyRow, valueRow], indexRow) => (
            <tr
                key={indexRow}
                className={
                    indexRow % 2 === 0 ? `bg-[color:var(--background)]` : ""
                }
            >
                {Object.entries(valueRow).map(
                    ([keyCell, valueCell], indexCell) => {
                        if (
                            typeof valueCell !== "object" &&
                            valueCell !== null &&
                            valueCell !== undefined &&
                            omitColumns &&
                            omitColumns.length > 0 &&
                            !omitColumns.find(
                                (element) => element === String(keyCell)
                            )
                        )
                            return (
                                <td
                                    key={indexCell}
                                    className={`p-3 text-center`}
                                >
                                    {String(valueCell)}
                                </td>
                            );
                        else if (
                            typeof valueCell == "object" &&
                            valueCell !== null &&
                            valueCell !== undefined &&
                            omitColumns &&
                            omitColumns.length > 0 &&
                            !omitColumns.find(
                                (element) => element === String(keyCell)
                            )
                        ) {
                            return (
                                <td
                                    key={indexCell}
                                    className={`py-5 text-center `}
                                >
                                    {Object.entries(valueCell).map(
                                        ([keyLine, valueLine], indexLine) => (
                                            <li key={indexLine}>
                                                {String(keyLine)}:
                                                {String(valueLine)}
                                            </li>
                                        )
                                    )}
                                </td>
                            );
                        } else {
                            <td> - </td>;
                        }
                    }
                )}
            </tr>
        )
    );

    return (
        <div className={`${classNameProps} p-3 w-full`}>
            <table
                className={`text-xs table-auto w-full text-[color:var(--text-body)]`}
            >
                <thead>
                    <tr>{thead}</tr>
                </thead>
                <tbody>{tbody}</tbody>
            </table>
        </div>
    );
};

export default Table;
