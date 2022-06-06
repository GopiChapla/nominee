import React, { useState } from "react";
import './App.css'

const Nomineeform = (props) => {

    const [valid,setValid]=useState(true)
    
    const checkrequired = () => {
        const name=document.getElementById("name").value
        const rel=document.getElementById("relation").value
        const dob=document.getElementById("dob").value
        const add=document.getElementById("add").value
        const pin=document.getElementById("pincode").value
        const city=document.getElementById("cityname").value
        const state=document.getElementById("state").value
        const country=document.getElementById("country").value
        if(name==="")
        {
            setValid(false)
            document.getElementById("err_name").innerHTML="*Nominee Name is Required"
        }
        else
        {
            setValid(true)
            document.getElementById("err_name").innerHTML=""

        }
        if(rel==='')
        {
            setValid(false)
            document.getElementById("err_relation").innerHTML="*Please select relationship"
        }
        else
        {
            setValid(true)
            document.getElementById("err_relation").innerHTML=""
        }
        if(dob==='')
        {
            setValid(false)
            document.getElementById("err_dob").innerHTML="*Please select birthdate"
        }
        else
        {
            setValid(true)
            document.getElementById("err_dob").innerHTML=""
        }
        if(add==='')
        {
            setValid(false)
            document.getElementById("err_add").innerHTML="*Address is required"
        }
        else
        {
            setValid(true)
            document.getElementById("err_add").innerHTML=""
        }
        if(pin==='')
        {
            setValid(false)
            document.getElementById("err_pincode").innerHTML="*Pincode is required"
        }
        else
        {
            setValid(true)
            document.getElementById("err_pincode").innerHTML=""
        }
        if(city==='')
        {
            setValid(false)
            document.getElementById("err_city").innerHTML="*City name is required"
        }
        else
        {
            setValid(true)
            document.getElementById("err_city").innerHTML=""
        }
        if(state==='')
        {
            setValid(false)
            document.getElementById("err_state").innerHTML="*State name is required"
        }
        else
        {
            setValid(true)
            document.getElementById("err_state").innerHTML=""
        }
        if(country==='')
        {
            setValid(false)
            document.getElementById("err_country").innerHTML="*Country name is required"
        }
        else
        {
            setValid(true)
            document.getElementById("err_country").innerHTML=""
        }   
        if(name=="" || rel==='' || dob==='' || add==='' || pin==='' || city==='' || state==='' || country==='')
        {
            setValid(false)
        }
    }
    const checkname = () => {
        const name=document.getElementById("name").value
        const nmformat=/^[A-Za-z]{3,}[A-Za-z ]*$/;
        if(nmformat.test(name))
        {
            setValid(true)
            document.getElementById("err_name").innerHTML=""      
        }
        else
        {
            setValid(false)
            document.getElementById("err_name").innerHTML="*Name is not valid"
        }
    }
    const checkrel=()=>{
        const rel=document.getElementById("relation").value
        if(rel==='')
        {
            setValid(false)
            document.getElementById("err_relation").innerHTML="*Please select relationship"
        }
        else
        {
            setValid(true)
            document.getElementById("err_relation").innerHTML=""
        }
    }
    const checkdt=()=>{
        const dob=document.getElementById("dob").value
        const db=new Date(dob)
        const dtnow=new Date();
        if(db>dtnow)
        {
            setValid(false)
            document.getElementById("err_dob").innerHTML="*Birthdate is not valid"
        }
        else
        {
            setValid(true)
            document.getElementById("err_dob").innerHTML=""
        }
    }
    const sameadd=(e)=>{
        if(e.target.checked)
        {
            setValid(true)
            document.getElementById("add").innerHTML="304,Deepganga-B app.,\nOpp. Jogi Petrolpump\nZanzarda Road";
            document.getElementById("err_add").innerHTML="";
        }
        else
        {
            setValid(false)
            document.getElementById("add").innerHTML="";
            document.getElementById("err_add").innerHTML="*Address id required";
        }
    }
    const checkadd=()=>{
        const add=document.getElementById("add").value
        if(add==='')
        {
            setValid(false)
            document.getElementById("err_add").innerHTML="*Address is required"
        }
        else
        {
            setValid(true)
            document.getElementById("err_add").innerHTML=""
        }
    }
    const checkpincode=()=>{
        const pin=document.getElementById("pincode").value
        const loc=JSON.parse(localStorage.getItem("location"))
        loc.map(item=>{
            if(pin==item.Pincode)
            {
                setValid(true)
                document.getElementById("cityname").value=item.City
                document.getElementById("state").value=item.State
                document.getElementById("country").value=item.Country
                document.getElementById("err_city").innerHTML=""
                document.getElementById("err_state").innerHTML=""               
                document.getElementById("err_country").innerHTML=""
            }
        })
        if(pin.length!=6)
        {
            setValid(false)
            document.getElementById("err_pincode").innerHTML="*Pincode is not Valid"
        }
        else
        {
            setValid(true)
            document.getElementById("err_pincode").innerHTML=""
        }  
    }
    const checkcity=()=>{
        const city=document.getElementById("cityname").value
        const nmformat=/^[A-Za-z]{3,}[A-Za-z ]*$/;
        if(nmformat.test(city))
        {
            setValid(true)
            document.getElementById("err_city").innerHTML=""      
        }
        else
        {
            setValid(false)
            document.getElementById("err_city").innerHTML="*City name is not Valid"
        }
    }
    const checkstate=()=>{
        const state=document.getElementById("state").value
        const nmformat=/^[A-Za-z]{3,}[A-Za-z ]*$/;
        if(nmformat.test(state))
        {
            setValid(true)
            document.getElementById("err_state").innerHTML=""      
        }
        else
        {
            setValid(false)
            document.getElementById("err_state").innerHTML="*State name is not Valid"
        }
    }
    const checkcountry=()=>{
        const country=document.getElementById("country").value
        const nmformat=/^[A-Za-z]{3,}[A-Za-z ]*$/;
        if(nmformat.test(country))
        {
            setValid(true)
            document.getElementById("err_country").innerHTML=""      
        }
        else
        {
            setValid(false)
            document.getElementById("err_country").innerHTML="*Country name is not Valid"
        }
    }
    return (
        <div className="nform">
            <form onSubmit={(e)=>props.getdata(e,valid)} method="post">
                <h1 className="heading"><u>Nominee Form</u></h1>
                <div>
                    <label className="lbl">Nominee Name<span className="str">*</span></label><br />
                    <input type="text" className="getname" id="name" onChange={checkname} Value={props.data.Name}/><br />
                    <span className="err" id="err_name"></span>
                </div>
                <div className="rel">
                    <label className="lbl">Relationship<span className="str">*</span></label><br />
                    <select className="getrel" id="relation" onChange={checkrel} defaultValue={props.data.Relationship} >
                        <option disabled selected>--Select Relationship--</option>
                        <option>Father</option>
                        <option>Mother</option>
                        <option>Son</option>
                        <option>Daughter</option>
                        <option>Uncle</option>
                        <option>Other</option>
                    </select><br />
                    <span className="err" id="err_relation"></span>
                </div>
                <div>
                    <label className="lbl">Date of Birth<span className="str">*</span></label><br />
                    <input type="date" className="getdt" id="dob" onChange={checkdt} Value={props.data.Birthdate}/><br />
                    <span className="err" id="err_dob"></span><br /><br />
                </div>
                <div>
                    <label className="lbl">Address<span className="str">*</span></label>
                    <input type="checkbox" className="rdoadd" id="rdo" onChange={sameadd}/>Same as my Address<br />
                    <textarea rows="6" cols="54" id="add" onChange={checkadd}>{props.data.Address}</textarea><br />
                    <span className="err" id="err_add"></span>
                </div>
                <div className="rel">
                    <label className="lbl">Pincode<span className="str" /><span className="str">*</span></label><br />
                    <input type="text" className="city" id="pincode" onChange={checkpincode} Value={props.data.Pincode}/><br />
                    <span className="err" id="err_pincode"></span>
                </div>
                <div>
                    <label className="lbl">City<span className="str" /><span className="str">*</span></label><br />
                    <input type="text" className="city" id="cityname" onChange={checkcity} Value={props.data.City}/><br />
                    <span className="err" id="err_city"></span>
                </div>
                <div className="rel">
                    <label className="lbl">State<span className="str" /><span className="str">*</span></label><br />
                    <input type="text" className="city" id="state" onChange={checkstate} Value={props.data.State}/><br />
                    <span className="err" id="err_state"></span>
                </div>
                <div>
                    <label className="lbl">Country<span className="str" /><span className="str">*</span></label><br />
                    <input type="text" className="city" id="country" onChange={checkcountry} Value={props.data.Country}/><br />
                    <span className="err" id="err_country"></span>
                </div>
                <input type="submit" value="Save Details" className="btn" onClick={checkrequired}/>
            </form>
        </div>
    )
}

export default Nomineeform;