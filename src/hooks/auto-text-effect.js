import { useEffect, useRef, useState } from "react";

function useTextEffect(text, speed) {
    const [position, setPosition] = useState(0)
    const currentPositionRef = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("interval");
            setPosition((value) => value + 1);
            currentPositionRef.current += 1;
            if (currentPositionRef.current > text.length) {
                clearInterval(intervalId);
            }

        }, speed)
        return () => {
            clearInterval(intervalId);
            currentPositionRef.current = 0;
            setPosition(0);
        }
    }, [speed, text])


    return text.substring(0, position);
}

export default useTextEffect;