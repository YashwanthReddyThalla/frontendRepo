import React, { useEffect,useState }  from "react";
import {useParams} from "react-router-dom"
import { getBankAccountOfAccountNum } from "../services/BankAccountService";
const BankAccountInfo=()=>{

    const {id } =useParams()
    const[accountNum,setAccountNum]=useState(0)
    const[accountHolderName,setAccountHolderName]=useState("")
    const[bankName,setBankName]=useState("")
    const[iFSCNum,setIFSCNum]=useState("")
    const[location,setLocation]=useState("")
    const[accountHolderMobileNum,setAccountHolderMobileNum]=useState("")
    const[accountHolderEmail,setAccountHolderEmail]=useState("")
    const[pANNum,setPANNum]=useState("")
    const[aadharNum,setAadharNum]=useState(0)

    useEffect(()=>{
      if(id){
      getBankAccountOfAccountNum(id)
    .then((res)=>{
        setAccountNum(res.data.accountNum)
        setAccountHolderName(res.data.accountHolderName)
        setBankName(res.data.bankName)
        setIFSCNum(res.data.iFSCNum)
        setLocation(res.data.location)
        setAccountHolderMobileNum(res.data.accountHolderMobileNum)
        setAccountHolderEmail(res.data.accountHolderEmail)
        setPANNum(res.data.pANNum)
        setAadharNum(res.data.aadharNum)
  }).catch((error)=>console.log(error));
}},[id])

    return (
        <div>   
        <h5>Name: {accountHolderName}</h5>
        <h5>AccountNum: {accountNum}</h5>
        <h5>Bank: {bankName}</h5>
        <h5>iFSCNum: {iFSCNum}</h5>
        <h5>location: {location}</h5>
        <h5>accountHolderMobileNum: {accountHolderMobileNum}</h5>
        <h5>accountHolderEmail: {accountHolderEmail}</h5>
        <h5>pANNum: {pANNum}</h5>
        <h5>aadharNum: {aadharNum}</h5>
        </div>
    )
}
export default BankAccountInfo
