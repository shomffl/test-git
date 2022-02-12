import React, {useEffect, useContext} from "react";
import {Background} from "../atoms/background/Background";
import axios from "axios";

const Weather = () => {
    console.log("user_info",window.localStorage.getItem("user_id"));

    useEffect((e)=>{
        const data = {
            "user_id": window.localStorage.getItem("user_id")
        }
        axios.post("api/get", data).then((res) => console.log(res.data.locations_info[0]["name_id"]));
    })
    return(
        <Background>weather</Background>
        )
}

export default Weather;