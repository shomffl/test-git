import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Example from "../components/Example";


const Router = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Example/>}/>
            </Routes>
        </BrowserRouter>
        )
}

export default Router;
