import React, {useEffect, useContext} from "react";
import {Background} from "../atoms/background/Background";
import axios from "axios";

const Weather = () => {
    console.log("user_info",window.localStorage.getItem("user_id"));

    useEffect((e)=>{
        const data = {
            "user_id": window.localStorage.getItem("user_id")
        }
        axios.post("api/get", data).then((res) => 
            axios.post("api/weather/get", {"location_id": res.data.locations_info[0]["name_id"]}).then((response) => {
                console.log(response.data);
            }));
    })
    return(
        <Background>weather</Background>
        )
}

export default Weather;