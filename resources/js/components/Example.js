import React, {useState} from 'react';
import axios from "axios";

const Example = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onClickTest = () => {
        axios.get("/sanctum/csrf-cookie").then((res)=>{console.log(res)})
    }
    const onClickUser = () => {
        axios.get("/api/index").then((res)=>console.log(res))
    }
    const onClickGetUser = () => {
            axios.get("/api/index").then((res)=>console.log(res))
    }
    
    const onClickRegister = (e) => {
        e.preventDefault()
        const data = {
            "name" : username,
            "email" : email,
            "password" : password,
        }
        console.log(data)
        axios.post("/api/register",data,
          ).then((res) => console.log(res.data));
    }
    
    const onClickLogin = (e) => {
        e.preventDefault()
        const data = {
            "name" : username,
            "email" : email,
            "password" : password,
        }
        axios.post("/api/login", data).then((res) => console.log(res.data));
    }
    return (
        <>
            <div>
                <h1>hello world</h1>
                <button onClick={onClickUser}>click</button>
                <button onClick={onClickGetUser}>get</button>
            </div>
            <div>
                <h2>register</h2>
                <form onSubmit={onClickRegister}>
                    <input type="text"  placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    <br/>
                    <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    <br/>
                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    <input type="submit" />
                </form>
            </div>
            <div>
                <h2>login</h2>
                <form onSubmit={onClickLogin}>
                    <input type="text"  placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    <br/>
                    <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                    <br/>
                    <input type="password"  placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    <input type="submit" />
                </form>
            </div>
        </>
    );
}

export default Example;

