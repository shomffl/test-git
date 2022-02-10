import React,{useState, useEffect} from "react";
import {Background} from "../atoms/background/Background";
import axios from "axios";
import {PrimaryButton} from "../atoms/button/PrimaryButton";


const Select = () => {
    const [locations, setLocations] = useState("");
    const validateLocationsList = [];
    const sendLocationsList = [];

    const onClickAddList = (e) => {
        const filter_code = validateLocationsList.filter((code, index) => {
            return code.includes(e["name_id"]);
        })
        const sameNameIndex = validateLocationsList.indexOf(e["name_id"], 0);
        if (filter_code[0] == null){
            validateLocationsList.push(e["name_id"]);
            sendLocationsList.push(e["id"])
        }else{
            validateLocationsList.splice(sameNameIndex, 1);
            sendLocationsList.splice(sameNameIndex, 1);
        }
        console.log(validateLocationsList)
        console.log(sendLocationsList)
    }

    useEffect(()=>{
        axios.get("api/location/get").then((res)=>setLocations(res.data.locations));
    },[])
    
    const onClickSend = () => {
        const data = {
            "locations" : sendLocationsList
        }
        axios.post("api/locations/update",data)
    }
    
    return (
        <Background>
            <div>
                {Object.keys(locations).map((data, key)=> (
                        <PrimaryButton key={key} onClickEvent={e => onClickAddList(locations[data])}>{locations[data]["name"]}</PrimaryButton>
                    ))}
            </div>
            <button onClick={onClickSend}>send</button>
        </Background>
        )
}
export default Select;