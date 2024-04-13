import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { getBankAccountOfAccountNum, insertAccount, updateBankAccount } from "../services/BankAccountService";
const AddBankAccount=()=>{

    const[accountNum,setAccountNum]=useState("")
    const[accountHolderName,setAccountHolderName]=useState("")
    const[bankName,setBankName]=useState("")
    const[iFSCNum,setIFSCNum]=useState("")
    const[location,setLocation]=useState("")
    const[accountHolderMobileNum,setAccountHolderMobileNum]=useState("")
    const[accountHolderEmail,setAccountHolderEmail]=useState("")
    const[pANNum,setPANNum]=useState("")
    const[aadharNum,setAadharNum]=useState(0)
    const navigate=useNavigate(null)
    const{id}=useParams()

    const account={accountNum,
    accountHolderName,bankName,iFSCNum,location,accountHolderMobileNum,
    accountHolderEmail,pANNum,aadharNum           
    }
useEffect(()=>{
    if(id){
    getBankAccountOfAccountNum(id).then((res)=>{
        setAccountNum(res.data.accountNum)
        setAccountHolderName(res.data.accountHolderName)
        setBankName(res.data.bankName)
        setIFSCNum(res.data.iFSCNum)
        setLocation(res.data.location)
        setAccountHolderMobileNum(res.data.accountHolderMobileNum)
        setAccountHolderEmail(res.data.accountHolderEmail)
        setPANNum(res.data.pANNum)
        setAadharNum(res.data.aadharNum)
  });
}}
  ,[id])


const addAccount=(event)=>{
    event.preventDefault();
    if(id){
        updateBankAccount(id,account).then((res)=>{
            navigate("/list")
            console.log(res)
        })
        .catch((error)=>console.log(error))

    }
    else{
        insertAccount(account).then((res)=>{
            console.log(res.data)
            navigate("/list")
        })
        .catch((error)=>console.log(error))
    }
}

const pageTitle=()=>{
    if(id)
        return(
            <h2>Update Bank Account</h2>
    )
    else
    return(
        <h2>Add Bank Account</h2>
    )
}


    return (
        <div className="container">
            {pageTitle}
            <form className="form-group">
                <label className="form-label" htmlFor="accHolderName">Account Number</label>
                <input className="form-control"
                type="text"
                name="accHolderName"
                id="accHolderName"
                placeholder="Enter account holder name"
                value={accountHolderName}
                onChange={(event)=>setAccountHolderName(event.target.value)}>
                </input>

                <label className="form-label" htmlFor="accHolderNum">Account Holder Name</label>
                <input className="form-control"
                type="text"
                name="accHolderNum"
                id="accHolderNum"
                placeholder="Enter account number"
                value={accountNum}
                onChange={(event)=>setAccountNum(event.target.value)}>
                </input>

                <label className="form-label" htmlFor="bankName">Bank Name</label>
                <input className="form-control"
                type="text"
                name="bankName"
                id="bankName"
                placeholder="Enter bank name"
                value={bankName}
                onChange={(event)=>setBankName(event.target.value)}>
                </input>

                <label className="form-label" htmlFor="ifsc">IFSC Num</label>
                <input className="form-control"
                type="text"
                name="ifsc"
                id="ifsc"
                placeholder="Enter bank ifsc"
                value={iFSCNum}
                onChange={(event)=>setIFSCNum(event.target.value)}>
                </input>

                <label className="form-label" htmlFor="mobile">Mobile Number</label>
                <input className="form-control"
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Enter mobile number"
                value={accountHolderMobileNum}
                onChange={(event)=>setAccountHolderMobileNum(event.target.value)}>
                </input>

                <label className="form-label" htmlFor="mobile">Email</label>
                <input className="form-control"
                type="text"
                name="email"
                id="email"
                placeholder="Enter Email"
                value={accountHolderEmail}
                onChange={(event)=>setAccountHolderEmail(event.target.value)}>
                </input>

                <label className="form-label" htmlFor="loc">Location</label>
                <input className="form-control"
                type="text"
                name="loc"
                id="loc"
                placeholder="Enter location"
                value={location}
                onChange={(event)=>setLocation(event.target.value)}>
                </input>


                <label className="form-label" htmlFor="pan">PAN Number</label>
                <input className="form-control"
                type="text"
                name="pan"
                id="pan"
                placeholder="Enter PAN"
                value={pANNum}
                onChange={(event)=>setPANNum(event.target.value)}>
                </input>

                <label className="form-label" htmlFor="aadhar">Aadhar Number</label>
                <input className="form-control"
                type="number"
                name="aadhar"
                id="aadhar"
                placeholder="Enter aadhar number"
                value={aadharNum}
                onChange={(event)=>setAadharNum(event.target.value)}>
                </input>

                <button type="submit"onClick={(event)=>addAccount()}>Submit</button>
            </form>
           
        </div>
    )
}
export default AddBankAccount