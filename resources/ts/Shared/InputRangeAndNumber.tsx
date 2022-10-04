import React, { FC, useEffect, useState } from "react";

interface InputRangeAndNumberProps {
    size?: "s" | "m" | "l";
    growDirection?: "rows" | "columns";
    bodyBgColor?: string;
    bodyTxtColor?: string;
    titleBgColor?: string;
    titleTxtColor?: string;
    title?: string;
    borderColor?: string;
    inputsParam: {
        name: string;
        value: string | number;
        min?: number;
        max?: number;
        inputChange: CallableFunction;
        index?: number;
    }[];
}

const InputRangeAndNumber: FC<InputRangeAndNumberProps> = ({
    inputsParam,
    size = "m",
    growDirection = "rows",
    bodyBgColor = `bg-[color:var(--background)]`,
    bodyTxtColor = `text-[color:var(--text-dark)]`,
    titleBgColor = `bg-[color:var(--side-elements)]`,
    borderColor = `border-[color:var(--side-elements)]`,
    titleTxtColor = `text-[color:var(--text-light)]`,
    title = `title`,
}) => {
    const twClassesInitialValue = {
        mainDiv: `relative flex flex-col gap-2 p-2 rounded-md w-80 drop-shadow-lg ${bodyBgColor}`,
        inputsSection: `flex flex-col mt-8 gap-2`,
        titleSection: `absolute top-0 left-0 justify-center w-full h-8 p-1 text-center text-sm font-bold rounded-t-md border-2 border-[color:var(--btn-hov)] ${titleTxtColor} ${titleBgColor}`,
        inputsSet: `flex flex-row w-full gap-2`,
        inputsLabel: `w-24 text-sm items-center`,
        inputRange: `flex w-full`,
        inputRangeDiv: `flex flex-1 items-center`,
        inputTxt: `flex-none w-14 p-1 text-xs border-0 rounded-md`,
    };
    const [twClasses, setTwClasses] = useState(twClassesInitialValue);

    useEffect(() => {
        switch (true) {
            case size === "s":
                return setTwClasses({
                    mainDiv: `relative flex flex-col gap-1 p-2 rounded-md w-56 drop-shadow-lg ${bodyBgColor}`,
                    inputsSection: `flex flex-col mt-6 gap-1`,
                    titleSection: `absolute top-0 left-0 justify-center w-full h-6 p-1 text-center text-xs font-bold rounded-t-md border-2 border-[color:var(--btn-hov)] ${titleTxtColor} ${titleBgColor}`,
                    inputsSet: `flex flex-row w-full gap-2`,
                    inputsLabel: `flex w-20 text-xs items-center`,
                    inputRange: `flex w-full`,
                    inputRangeDiv: `flex flex-1 items-center`,
                    inputTxt: `flex-none w-10 p-px text-xxs border-0 rounded-md`,
                });
            case size === "m":
                return setTwClasses(twClassesInitialValue);
            case size === "l":
                return setTwClasses({
                    mainDiv: `relative flex flex-col gap-2 p-4 rounded-md w-96 drop-shadow-lg ${bodyBgColor}`,
                    inputsSection: `flex flex-col mt-12 gap-4`,
                    titleSection: `absolute top-0 left-0 justify-center w-full h-12 p-2 text-center text-lg font-bold rounded-t-md border-2 border-[color:var(--btn-hov)] ${titleTxtColor} ${titleBgColor}`,
                    inputsSet: `flex flex-row w-full gap-4`,
                    inputsLabel: `flex w-24 items-center`,
                    inputRange: `flex w-full`,
                    inputRangeDiv: `flex flex-1 items-center`,
                    inputTxt: `flex-none w-18 p-1 text-s border-0 rounded-md`,
                });
        }
    }, [size]);

    const {
        mainDiv,
        inputsSection,
        titleSection,
        inputsSet,
        inputsLabel,
        inputRange,
        inputRangeDiv,
        inputTxt,
    } = twClasses;

    const inputFactory = inputsParam.map((input, index) => (
        <div key={index} id="iran-inputs-set" className={inputsSet}>
            <div id="iran-inputs-label" className={inputsLabel}>
                <span>{input.name}</span>
            </div>
            <div className={inputRangeDiv}>
                <input
                    className={inputRange}
                    id="iran-range-input"
                    name={input.name}
                    type="range"
                    min={input.min}
                    max={input.max}
                    value={input.value}
                    onChange={(e) =>
                        input.inputChange(Number(e.currentTarget.value))
                    }
                />
            </div>
            <div>
                <input
                    id="iran-txt-input"
                    className={inputTxt}
                    name={input.name}
                    type="number"
                    min={input.min}
                    max={input.max}
                    value={input.value}
                    onChange={(e) =>
                        input.inputChange(Number(e.currentTarget.value))
                    }
                />
            </div>
        </div>
    ));
    return (
        <div id="iran-main-div" className={mainDiv}>
            <div id="iran-title-section" className={titleSection}>
                {title}
            </div>
            <div id="iran-inputs-section" className={inputsSection}>
                {inputFactory}
            </div>
        </div>
    );
};

export default InputRangeAndNumber;
