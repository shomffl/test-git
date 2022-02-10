import React,{useState} from "react";
import axios from "axios";

const Admin = () => {
    const [cityName, setCityName] = useState("");
    const [cityCode, setCityCode] = useState("");
    const onClickSubmit = (e) => {
        e.preventDefault();
        const data = {
            "name" : cityName,
            "name_id" : cityCode
        }
        axios.post("api/location/register", data).then((res)=>console.log(res.data))
    }
    
    return (
    <form onSubmit={onClickSubmit}>
        <input type="text" placeholder={"都市名"} onChange={(e) => setCityName(e.target.value)}/>
        <input type="text" placeholder={"都市コード"} onChange={(e) => setCityCode(e.target.value)}/>
        <input type="submit" />
    </form>
    )
}

export default Admin;