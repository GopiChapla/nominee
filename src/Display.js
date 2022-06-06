import React, { useState } from "react";
import './Display.css'
import Insert from "./Insert";
import Update from "./Update";

const Display = () => {

    const [show,setshow]=useState(true)
    const [update,setUpdate]=useState(false)
    const [nid,setNid]=useState()
    const deletedata =(index) =>
    {
        const nomineedata=JSON.parse(localStorage.getItem("nominee"))
        nomineedata.splice(index,1)
        localStorage.setItem("nominee",JSON.stringify(nomineedata))
    }
    const updatedata =(index) =>
    {
        setshow(false)
        setUpdate(true)
        setNid(index)
    }
    const nomineedata=JSON.parse(localStorage.getItem("nominee"))
    const data=[];
    nomineedata.forEach((item,index) => {
        data.push(<><tr><td>{item.Nid}</td>
                <td>{item.Name}</td>
                <td>{item.Relationship}</td>
                <td>{item.Birthdate}</td>
                <td>{item.Address}</td>
                <td>{item.Pincode}</td>
                <td>{item.City}</td>
                <td>{item.State}</td>
                <td>{item.Country}</td>
                <td><button onClick={()=>updatedata(index)}>&#9998;</button>
                <button onClick={()=>deletedata(index)}>&#10060;</button></td></tr></>)
    });

    return (
        
        <>{show?<>
            <table border="1">
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Relationship</th>
                    <th>Birthdate</th>
                    <th>Address</th>
                    <th>Pincode</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Operation</th>
                </tr>
                {data}
            </tbody>
            </table>
            <button className="btnadd" onClick={()=>setshow(false)}>Add Nominee</button></>:update?<Update nid={nid}/>:<Insert />}
        </>
    )
}

export default Display