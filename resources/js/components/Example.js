import React, {useState} from 'react';
import axios from "axios";

const Example = () => {
    const [text, setText] = useState("name");
    const onClickTest = () => {
        axios.get("/api/get").then((res)=>{console.log(res.data), setText(res.data.name)})
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

