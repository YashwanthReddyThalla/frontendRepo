import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
const Login=()=>{
        const [uname,setUname]=useState("");
        const [pwd,setPwd]=useState("");
        const navigate = useNavigate(null);

const validate=()=>{
   
    if(uname==="Yashwanth" && pwd==="11111"){
        alert("authenticated successfully")
        navigate("/list")

    }
    else
        alert("invalid credentials")

}

    return(
        <div>
            <h3>Login </h3>
            <div>
                <form className="form-group">
                    <label className="form-label" htmlFor="uname">UserName</label>
                    <input className="form-control" 
                        name="uname"
                        id="uname"
                        type="text"
                        placeholder="Enter user name"
                        onChange={(event)=>{setUname(event.target.value)}}></input>
                    <label className="form-label" htmlFor="pwd">Password</label>
                    <input className="form-control"
                        name="pwd"
                        id="pwd"
                        type="password"
                        placeholder="Enter password"
                        onChange={(event)=>setPwd(event.target.value)}></input>
                    <button type="submit" 
                    className="btn btn-primary"
                    onClick={validate}>Submit</button>
                </form>
            </div>
        </div>
    )

}

export default Login