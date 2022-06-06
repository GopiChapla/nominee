import React, { useEffect, useState } from "react";
import Display from "./Display";
import Nomineeform from "./Nomineeform";

const Update = (props) => {

    const [show, setshow] = useState(false)
    const nomineedata = JSON.parse(localStorage.getItem("nominee"))
    
    
    const updatedata = (e,valid) => {
        const nomineedata = JSON.parse(localStorage.getItem("nominee"))
        const nid= nomineedata[props.nid].Nid
        const name = document.getElementById("name").value
        const relation = document.getElementById("relation").value
        const dob = document.getElementById("dob").value
        const add = document.getElementById("add").value
        const pin = document.getElementById("pincode").value
        const city = document.getElementById("cityname").value
        const state = document.getElementById("state").value
        const country = document.getElementById("country").value

        if (valid) {
            const data = {
                Nid: nid,
                Name: name,
                Relationship: relation,
                Birthdate: dob,
                Address: add,
                Pincode: pin,
                City: city,
                State: state,
                Country: country
            }
            nomineedata[props.nid]=data
            localStorage.setItem("nominee", JSON.stringify(nomineedata))
            setshow(true)
        }
        e.preventDefault();
    }
    return (
        <>
            {show ? <Display /> : <Nomineeform getdata={updatedata}  data={nomineedata[props.nid]} />}
        </>
    )
}

export default Update;