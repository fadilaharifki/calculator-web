import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCount } from "../store/action/count";

export default function Science() {
    const data = useSelector((state) => state.data);
    console.log(Number(data.dataCount));
    const dispatch = useDispatch();

    const [plus, setPlus] = useState(false);
    const [three, setThree] = useState();
    const [tempThree, setTempThree] = useState();
    const [result, setResult] = useState(0);

    const clickPlus = () => {
        setPlus(true);
        setThree();
        if (result === 0) {
            setResult("+");
        } else {
            setResult(result + "+");
        }
    };

    const clickThree = () => {
        if (!three) {
            setThree("3");
        } else {
            setThree(three + "3");
        }
        if (result === 0) {
            setResult("3");
        } else {
            setResult(result + "3");
        }
    };

    const clickEqual = () => {
        let lastResult;
        if (plus) {
            lastResult = +tempThree + +three;
            dispatch(setCount(lastResult));
        }
        setTempThree();
        setThree();
        setResult(lastResult);
    };

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="box-border border-2">
                    <div className="box-border border-2 h-20 m-2 rounded-lg p-2 flex justify-end items-end">
                        <div>{result}</div>
                    </div>
                    <div className="grid grid-cols-7 gap-4 m-2">
                        <div className="grid grid-rows-5 gap-1 text-center">
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                Rad
                            </button>
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                inv
                            </button>
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                phi
                            </button>
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                e
                            </button>
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                Ans
                            </button>
                        </div>
                        <div className="grid grid-rows-5 gap-1 text-center">
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                Deg
                            </button>
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                sin
                            </button>
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                cos
                            </button>
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                tan
                            </button>
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                EXP
                            </button>
                        </div>
                        <div className="grid grid-rows-5 gap-1 text-center">
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                x!
                            </button>
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                ln
                            </button>
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                log
                            </button>
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                akar
                            </button>
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                X^y
                            </button>
                        </div>
                        <div className="grid grid-rows-5 gap-1 text-center">
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                (
                            </button>
                            <button className="bg-gray-100 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                7
                            </button>
                            <button className="bg-gray-100 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                4
                            </button>
                            <button className="bg-gray-100 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                1
                            </button>
                            <button className="bg-gray-100 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                0
                            </button>
                        </div>
                        <div className="grid grid-rows-5 gap-1 text-center">
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                )
                            </button>
                            <button className="bg-gray-100 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                8
                            </button>
                            <button className="bg-gray-100 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                5
                            </button>
                            <button className="bg-gray-100 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                2
                            </button>
                            <button className="bg-gray-100 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                .
                            </button>
                        </div>
                        <div className="grid grid-rows-5 gap-1 text-center">
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                %
                            </button>
                            <button className="bg-gray-100 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                9
                            </button>
                            <button className="bg-gray-100 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                6
                            </button>
                            <button
                                onClick={clickThree}
                                className="bg-gray-100 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white"
                            >
                                3
                            </button>
                            <button
                                onClick={clickEqual}
                                className="bg-gray-100 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white"
                            >
                                =
                            </button>
                        </div>
                        <div className="grid grid-rows-5 gap-1 text-center">
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                AC
                            </button>
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                /
                            </button>
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                X
                            </button>
                            <button className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white">
                                -
                            </button>
                            <button
                                onClick={clickPlus}
                                className="bg-gray-200 px-8 py-1 rounded cursor-pointer active:bg-green-500 active:text-white"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
