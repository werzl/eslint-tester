import React, { useRef, useState, useEffect, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";

import TestComponent from "./TestComponent";

const todos = [];

function App() {
    const [myState, setMyState] = useState("");
    const myRef = useRef(null);

    useEffect(() => {
        setMyState(test());
    }, [test]);

    const test = useCallback(() => {
        return "testy";
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload. {myState}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    ref={myRef}>
                    Learn React
                </a>
            </header>

            {todos.map((todo) =>
                <div key={todo.id}>{todo}</div>
            )}

            <TestComponent ShowDiv />
        </div>
    );
}

export default App;