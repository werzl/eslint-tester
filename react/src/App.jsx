import React from "react";
import logo from "./logo.svg";
import "./App.css";

import TestComponent from "./TestComponent";

function app() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    hidden>
                    Learn React
                </a>
            </header>

            <TestComponent ShowDiv />
        </div>
    );
}

export default app;
