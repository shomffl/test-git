import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Example from "../components/Example";
import Auth from "../components/pages/Auth";
import Select from "../components/pages/Select";
import Weather from "../components/pages/Weather";
import Admin from "../components/pages/Admin";

const Router = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />}/>
                <Route path="/select" element={<Select />}/>
                <Route path="/weather" element={<Weather />} />
                
                <Route path="/admin" element={<Admin />}/>
                <Route path="/example" element={<Example/>}/>
                
            </Routes>
        </BrowserRouter>
        )
}

export default Router;
