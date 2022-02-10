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
    
    const onClickSend = () => {
        const data = {
            "locations" : locationsList
        }
        axios.post("api/locations/update",data)
    }
    
    return (
        <Background>
            <div>
                {Object.keys(locations).map((data, key)=> (
                        <PrimaryButton key={key} onClickEvent={e => onClickAddList(locations[data]["name_id"])}>{locations[data]["name"]}</PrimaryButton>
                    ))}
            </div>
            <button onClick={onClickSend}>send</button>
            <div>
                <ul>
                    {locationsList.map((location, index) => (
                         <li key={index}>{location}</li>
                    ))}
                </ul>
            </div>
        </Background>
        )
}
export default Select;