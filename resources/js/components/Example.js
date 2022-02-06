import React, {useState} from 'react';
import axios from "axios";

const Example = () => {
    const [text, setText] = useState("name");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onClickTest = () => {
        axios.get("/sanctum/csrf-cookie").then((res)=>{console.log(res)})
    }
    const onClickUser = () => {
        axios.get("/api/get").then((res)=>console.log(res))
    }
    const onClickGetUser = () => {
        axios.get("/api/index").then((res)=>console.log(res))
    }
    
    const onClickSubmit = (e) => {
        e.preventDefault()
        const data = {
            "name" : username,
            "email" : email,
            "password" : password,
        }
        console.log(data)
        axios.post("/api/create",data,
            {
                headers: {'Content-Type': 'application/json'}
            }).then((res) => console.log(res));
    }
    return (
        <>
            <div>
                <h1>hello world</h1>
                <h2>{text}</h2>
                <button onClick={onClickUser}>click</button>
                <button onClick={onClickGetUser}>get</button>
            </div>
            <div>
                <form onSubmit={onClickSubmit}>
                    <input type="text" name="user[name]" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    <br/>
                    <input type="email" name="user[email]" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    <br/>
                    <input type="password" name="user[password]" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    <input type="submit" />
                </form>
            </div>
        </>
    );
}

export default Example;

