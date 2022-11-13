import { Inertia } from "@inertiajs/inertia";
import React, {
    ChangeEvent,
    ReactNode,
    useEffect,
    useState,
} from "react";
import { DataPack } from "./InterfacesAndTypes/InertiaInterface";


type Interactive = "href" | "edit" | "none";

type ColorsSet = {
    colorTableTitleText?: string;
    colorTableTitleBg?: string;
    colorTitleRowOddBg?: string;
    colorTitleRowEvenBg?: string;
    colorTitleRowText?: string;
    colorRowOddBg?: string;
    colorRowEvenBg?: string;
    colorRowText?: string;
    colorTableBg?: string;
    colorHoverRowBg?: string;
    colorHoverRowText?: string;
};

const initialColorsSet: ColorsSet = {
    colorTableTitleText: `text-[color:var(--table-title-text)]`,
    colorTableTitleBg: `bg-[color:var(--table-title-bg)]`,
    colorTitleRowOddBg: `bg-[color:var(--table-row-dark)]`,
    colorTitleRowEvenBg: `bg-[color:var(--table-row)]`,
    colorTitleRowText: `text-[color:var(--table-row-text)]`,
    colorRowOddBg: `bg-[color:var(--table-row-dark)]`,
    colorRowEvenBg: `bg-[color:var(--table-row)]`,
    colorRowText: `text-[color:var(--text-body)]`,
    colorTableBg: `bg-[color:var(--table-row-dark)]`,
    colorHoverRowBg: `hover:bg-[color:var(--btn-hov)]`,
    colorHoverRowText: `hover:text-[color:var(--text-strong)]`,
};

interface InteractiveTableProps {
    dataPack: DataPack[];
    classNameProps?: string;
    interactive?: Interactive;
    omitColumns?: string[];
    vertical?: boolean;
    colorsSet?: ColorsSet;
    tableTitle?: string;
    baseHrefURL?: string;
}

const timeRegexPattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
const addZeroPrefix = (number: number) => {
    return String(number).padStart(2, "0");
};

const checkAndConvertJsonDateFormat = (value: string) => {
    if (value.match(timeRegexPattern)) {
        const date = new Date(value);
        const day = date.getDay();
        const month = date.getMonth();
        const year = date.getFullYear();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${addZeroPrefix(day)}.${addZeroPrefix(
            month
        )}.${year} ${addZeroPrefix(hour)}:${addZeroPrefix(
            minutes
        )}:${addZeroPrefix(seconds)}`;
    }
    return value;
};

const TableInput = ({ name, value }: { name: string; value: string }) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setInputValue(value);
    }, []);

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
    };
    return (
        <input
            className="p-0 text-black"
            type="text"
            name={name}
            value={inputValue}
            onChange={inputHandler}
        />
    );
};

interface TableElementGeneratorProps {
    tag: "th" | "tr" | "td";
    interactive?: Interactive;
    colorsSet: ColorsSet;
    className?: string;
    clickedIndex?: string | number | null;
    indexPrefix?: string;
    index?: number;
    children: ReactNode | ReactNode[] | null;
    handleClick?: (index: string) => void;
}

const TableElementGenerator = ({
    tag,
    interactive = "none",
    colorsSet,
    className = "",
    clickedIndex = "",
    indexPrefix = "",
    index = 0,
    children,
    handleClick = () => "",
}: TableElementGeneratorProps) => {
    const [isInteractive, setIsInteractive] = useState("");
    const [evenOddColor, setEvenOddColor] = useState("");
    const [inputActive, setInputActive] = useState(false);

    useEffect(() => {
        (interactive === "href" || interactive === "edit") &&
            setIsInteractive(
                `cursor-pointer ${colorsSet.colorHoverRowBg} ${colorsSet.colorHoverRowText}`
            );

        index % 2 === 0
            ? setEvenOddColor(`${colorsSet.colorRowOddBg}`)
            : setEvenOddColor(`${colorsSet.colorRowEvenBg}`);
    }, []);

    useEffect(() => {
        if (
            (interactive === "href" || interactive === "edit") &&
            clickedIndex === String(indexPrefix + index)
        )
            setInputActive(true);
        else setInputActive(false);
    }, [clickedIndex]);

    if (tag === "tr") {
        return (
            <tr
                className={`${className} ${isInteractive} ${evenOddColor}`}
                key={index}
            >
                {inputActive ? (
                    <TableInput value={String(children)} name={String(index)} />
                ) : (
                    children
                )}
            </tr>
        );
    }
    if (tag === "td") {
        return (
            <td
                className={`${className} ${isInteractive} ${evenOddColor}`}
                onClick={() => handleClick(String(indexPrefix + index))}
            >
                {inputActive ? (
                    <TableInput value={String(children)} name={String(index)} />
                ) : children ? (
                    children
                ) : (
                    <span> - </span>
                )}
            </td>
        );
    }
    if (tag === "th") {
        return (
            <th
                className={`${className} ${isInteractive} ${evenOddColor}`}
                onClick={() => handleClick(String(indexPrefix + index))}
            >
                {children}
            </th>
        );
    }
    return <></>;
};
/**
 *
 * @param datapack Laravel Collection data
 * @param classNameProps tailwind classes string
 * @param interactive "href" - fields as GET links (Inertia) OR "edit" to edit fields OR "none" as standard table
 * @param omitColumns if you want to omit some data
 * @param vertical false for standard table
 * @param colorsSet check ColorsSet type
 * @param tableTitle str
 * @param baseHrefURL url location of table if you whant use interactive "href"s
 * @returns FC
 */

const InteractiveTable = ({
    classNameProps,
    omitColumns = [""],
    interactive = "none",
    dataPack,
    vertical = false,
    colorsSet = initialColorsSet,
    tableTitle = "Table",
    baseHrefURL = "/",
}: InteractiveTableProps) => {
    const [isDataReady, setIsDataReady] = useState(false);
    const [editRow, setEditRow] = useState(false);
    const [clickedElementIndex, setClickedElementIndex] = useState<
        number | string | null
    >();

    const handleOnClick = (clickedIndex: number | string) => {
        console.log(clickedIndex);
        if (interactive === "href")
            return Inertia.visit(baseHrefURL + clickedIndex);

        if (interactive === "edit") {
            setClickedElementIndex(clickedIndex);
            console.log(clickedIndex);
            setEditRow(true);
        }
    };

    /**
     * horizontal table
     * */

    const thead = (
        <tr className="h-10">
            {Object.entries(dataPack[0]).map(([key, value], index) => {
                if (
                    omitColumns &&
                    omitColumns.length > 0 &&
                    !omitColumns.find((element) => element === String(key))
                )
                    return (
                        <th
                            key={index}
                            className={`p-3 ${colorsSet.colorTitleRowOddBg} brightness-50
                        `}
                        >
                            {String(key.replaceAll("_", " "))}
                        </th>
                    );
            })}
        </tr>
    );

    const tbody = Object.entries(dataPack).map(
        ([keyRow, valueRow], indexRow) => (
            <tr
                key={indexRow}
                className={`${
                    interactive === "href" || interactive === "edit"
                        ? `cursor-pointer ${colorsSet.colorHoverRowBg} ${colorsSet.colorHoverRowText} `
                        : ""
                }
                    ${
                        indexRow % 2 === 0
                            ? `${colorsSet.colorRowEvenBg} `
                            : `${colorsSet.colorRowOddBg} `
                    }
                    h-10`}
                onClick={() => handleOnClick(indexRow + 1)}
            >
                {Object.entries(valueRow).map(
                    ([keyCell, valueCell], indexCell) => {
                        // if empty
                        if (valueCell === null)
                            return (
                                <td key={indexCell} className={`p-3 `}>
                                    <span>-</span>
                                </td>
                            );

                        // if standard data
                        if (
                            omitColumns &&
                            omitColumns.length > 0 &&
                            !omitColumns.find(
                                (element) =>
                                    element === String(keyCell) &&
                                    typeof valueCell !== "object"
                            )
                        )
                            return (
                                <td key={indexCell} className={`p-3`}>
                                    {checkAndConvertJsonDateFormat(
                                        String(valueCell)
                                    )}
                                </td>
                            );

                        //if JSON object
                        if (
                            omitColumns &&
                            omitColumns.length > 0 &&
                            !omitColumns.find(
                                (element) =>
                                    element === String(keyCell) &&
                                    typeof valueCell === "object"
                            )
                        )
                            return (
                                <td key={indexCell} className={`p-3`}>
                                    {Object.entries(valueCell).map(
                                        ([keyLine, valueLine], indexLine) => (
                                            <table>
                                                <tr key={indexLine + indexCell}>
                                                    <td>{String(keyLine)}</td>
                                                    <td>{String(valueLine)}</td>
                                                </tr>
                                            </table>
                                        )
                                    )}
                                </td>
                            );
                    }
                )}
            </tr>
        )
    );

    /**
     * vertical table
     * */

    const tbodyVertical = Object.entries(dataPack).map(
        ([keyRow, valueRow], indexRow) =>
            Object.entries(valueRow).map(([keyCell, valueCell], indexCell) => (
                <TableElementGenerator
                    tag="tr"
                    colorsSet={colorsSet}
                    interactive="edit"
                    index={indexCell}
                    key={`0-tr-${indexCell}`}
                >
                    {/* titles column */}
                    <TableElementGenerator
                        tag="th"
                        className="w-56 p-3 brightness-75"
                        colorsSet={colorsSet}
                        index={indexCell}
                    >
                        {keyCell}
                    </TableElementGenerator>

                    {omitColumns &&
                        omitColumns.length > 0 &&
                        !omitColumns.find(
                            (element) => element === String(keyCell)
                        ) &&
                        (typeof valueCell !== "object" ? (
                            <TableElementGenerator
                                tag="td"
                                colorsSet={colorsSet}
                                className={`p-3`}
                                interactive={interactive}
                                clickedIndex={clickedElementIndex}
                                indexPrefix={`0-`}
                                index={indexCell}
                                handleClick={(clikckedIndex) =>
                                    handleOnClick(clikckedIndex)
                                }
                            >
                                {checkAndConvertJsonDateFormat(
                                    String(valueCell)
                                )}
                            </TableElementGenerator>
                        ) : (
                            //  if object json data

                            <TableElementGenerator
                                tag="td"
                                colorsSet={colorsSet}
                                className={`p-3`}
                            >
                                {valueCell &&
                                    Object.entries(valueCell).map(
                                        ([keyLine, valueLine], indexLine) => (
                                            <table
                                                className="flex w-full p-0"
                                                key={indexLine + indexCell}
                                            >
                                                <TableElementGenerator
                                                    tag="tr"
                                                    colorsSet={colorsSet}
                                                    className="flex w-full p-3"
                                                >
                                                    <TableElementGenerator
                                                        tag="td"
                                                        className="flex-1"
                                                        colorsSet={colorsSet}
                                                        interactive={
                                                            interactive
                                                        }
                                                        handleClick={(
                                                            clickedIndex
                                                        ) =>
                                                            handleOnClick(
                                                                clickedIndex
                                                            )
                                                        }
                                                        clickedIndex={
                                                            clickedElementIndex
                                                        }
                                                        indexPrefix={"2A-"}
                                                        index={
                                                            indexLine +
                                                            indexCell
                                                        }
                                                    >
                                                        {String(keyLine)}
                                                    </TableElementGenerator>
                                                    <TableElementGenerator
                                                        tag="td"
                                                        className="flex-1"
                                                        colorsSet={colorsSet}
                                                        interactive={
                                                            interactive
                                                        }
                                                        handleClick={(
                                                            clickedIndex
                                                        ) =>
                                                            handleOnClick(
                                                                clickedIndex
                                                            )
                                                        }
                                                        clickedIndex={
                                                            clickedElementIndex
                                                        }
                                                        indexPrefix={"2B-"}
                                                        index={
                                                            indexLine +
                                                            indexCell
                                                        }
                                                    >
                                                        {String(valueLine)}
                                                    </TableElementGenerator>
                                                </TableElementGenerator>
                                            </table>
                                        )
                                    )}
                            </TableElementGenerator>
                        ))}
                </TableElementGenerator>
            ))
    );

    return (
        <div className={`${classNameProps} p-3`}>
            <table
                className={`text-sm text-center table-auto ${colorsSet.colorRowText} `}
            >
                {!vertical ? (
                    <>
                        <caption
                            className={`h-2 rounded-t-lg ${colorsSet.colorRowOddBg} brightness-50`}
                        ></caption>
                        <thead>{thead}</thead>
                        <tbody>{tbody}</tbody>
                    </>
                ) : (
                    <>
                        <caption
                            className={`${colorsSet.colorRowOddBg} bg-[color:var(--accent)] w-full text-2xl text-[color:var(--table-title-text)] p-5 rounded-t-lg`}
                        >
                            {tableTitle}
                        </caption>
                        <tbody>{tbodyVertical}</tbody>
                    </>
                )}
            </table>
        </div>
    );
};

export default InteractiveTable;
