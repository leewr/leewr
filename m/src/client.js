import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import Layout from "./comp/Layout";
import createStore from "./store/index.js";

const store = createStore(window.REDUX_DATA);

const jsx = (
    <ReduxProvider store={store}>
        <Router>
            <Layout />
        </Router>
    </ReduxProvider>
)

const app = document.getElementById("app");
ReactDOM.hydrate(jsx, app);