import React, { useState } from "react";
import Display from "./Display";
import Nomineeform from "./Nomineeform";

const Insert = () => {

    const [show, setshow] = useState(false)

    const insertdata = (e,valid) => {
        const name = document.getElementById("name").value
        const relation = document.getElementById("relation").value
        const dob = document.getElementById("dob").value
        const add = document.getElementById("add").value
        const pin = document.getElementById("pincode").value
        const city = document.getElementById("cityname").value
        const state = document.getElementById("state").value
        const country = document.getElementById("country").value

        if (valid) {
            const nomineedata = JSON.parse(localStorage.getItem("nominee"))
            const nid = Number(localStorage.getItem("Nid")) + 1
            localStorage.setItem("Nid", JSON.stringify(nid))
            const ndata = {
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
            nomineedata.push(ndata)
            localStorage.setItem("nominee", JSON.stringify(nomineedata))
            setshow(true)
        }
        e.preventDefault();
    }
    return (
        <>
            {show ? <Display /> : <Nomineeform getdata={insertdata} data=""/>}
        </>
    )
}

export default Insert;