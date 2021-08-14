import React, { useState } from "react";
import Simple from "../componens/Simple";
import Science from "../componens/Science";

export default function Home() {
    const [simpleCal, setSimpleCal] = useState(false);
    const [scienceCal, setScienceCal] = useState(true);

    const simple = () => {
        setSimpleCal(true);
        setScienceCal(false);
    };

    const science = () => {
        setSimpleCal(false);
        setScienceCal(true);
    };

    return (
        <>
            <div className="flex flex-row justify-center mt-5">
                <button
                    onClick={science}
                    className="m-1 px-2 py-1 rounded-lg bg-green-500 hover:bg-green-600 text-center text-white"
                >
                    Calculator Science
                </button>
                <button
                    onClick={simple}
                    className="m-1 px-2 py-1 rounded-lg bg-green-500 hover:bg-green-600 text-center text-white"
                >
                    Calculator simple
                </button>
            </div>
            <div className="mt-5">{simpleCal && <Simple />}</div>
            <div className="mt-5">{scienceCal && <Science />}</div>
        </>
    );
}
