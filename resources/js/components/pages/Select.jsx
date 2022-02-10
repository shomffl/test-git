import React,{useState, useEffect} from "react";
import {Background} from "../atoms/background/Background";
import axios from "axios";
import {PrimaryButton} from "../atoms/button/PrimaryButton";


const Select = () => {
    const [locations, setLocations] = useState("");
    const locationsList = [];
    const onClickAddList = (e) => {
        const filter_code = locationsList.filter((code, index) => {
            return code.includes(e);
        })
        console.log("filter_code",filter_code)
        if (filter_code[0] == null){
            locationsList.push(e);
        }else{
            const sameNameIndex = locationsList.indexOf(e, 0);
            locationsList.splice(sameNameIndex, 1);
        }
        console.log(locationsList)
    }
    
    useEffect(()=>{
        axios.get("api/location/get").then((res)=>setLocations(res.data.locations));
    },[])
    console.log(locations)
    return (
        <Background>
                {Object.keys(locations).map((data, key)=> (
                        <PrimaryButton key={key} onClickEvent={e => onClickAddList(locations[data]["name_id"])}>{locations[data]["name"]}</PrimaryButton>
                    ))}
        </Background>
        )
}
export default Select;