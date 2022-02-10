import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./router/Router";
import {UserInfoProvider} from "./provider/UserInfoProvider";

const App = () => {
    return (
        <UserInfoProvider>
            <Router/>
        </UserInfoProvider>
        )
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
