import React, {useState} from 'react';
import axios from "axios";

const Example = () => {
    const [text, setText] = useState("name");
    const onClickTest = () => {
        axios.get("/sanctum/csrf-cookie").then((res)=>{console.log(res)})
    }
    const onClickUser = () => {
        axios.get("/user").then((res)=>console.log(res))
    }
    return (
        <div>
            <h1>hello world</h1>
            <h2>{text}</h2>
            <button onClick={onClickTest}>click</button>
        </div>
    );
}

export default Example;

