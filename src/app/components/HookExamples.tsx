/** @format */

"use client";

import { useState, useEffect, useRef, useMemo, useCallback, useReducer } from "react";

// A simple reducer function for useReducer example
function reducer(state: { count: number }, action: { type: string }) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export default function HookExamples() {
    // useState example
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // useEffect example
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    // useRef example
    const inputRef = useRef<HTMLInputElement>(null);

    // useMemo example
    const expensiveCalculation = useMemo(() => {
        console.log("Calculating...");
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i;
        }
        return result;
    }, []);

    // useCallback example
    const handleClick = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    // useReducer example
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div className="mt-8 p-4 border rounded">
            <h2 className="text-2xl font-bold mb-4">React Hooks Examples</h2>
            <div className="mb-4">
                <p>Count: {count}</p>
                <button
                    onClick={handleClick}
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                    Increment
                </button>
            </div>
            <div className="mb-4">
                <input
                    ref={inputRef}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border rounded p-2 mr-2"
                />
                <button
                    onClick={() => inputRef.current?.focus()}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Focus Input
                </button>
            </div>
            <div className="mb-4">
                <p>Expensive Calculation Result: {expensiveCalculation}</p>
            </div>
            <div className="mb-4">
                <p>Reducer Count: {state.count}</p>
                <button
                    onClick={() => dispatch({ type: "increment" })}
                    className="bg-purple-500 text-white px-4 py-2 rounded mr-2"
                >
                    Increment
                </button>
                <button
                    onClick={() => dispatch({ type: "decrement" })}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}
