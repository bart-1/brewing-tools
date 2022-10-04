import React, { useEffect, useState } from "react";

interface ImageFrameProps {
    imagesCollection?: { name: string; purpose: string; url: string }[];
    time?: number;
}

const ImageFrame = ({ imagesCollection, time = 1 }: ImageFrameProps) => {
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (imagesCollection && frame < 4)
                setFrame((prevState) =>
                    prevState < 4 ? (prevState += 1) : (prevState = 0)
                );
        }, time * 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <img
                className="object-cover object-center w-full h-64 rounded-xl"
                alt={imagesCollection && imagesCollection[frame].name}
                src={imagesCollection && imagesCollection[frame].url}
            />
        </>
    );
};
export default ImageFrame;
