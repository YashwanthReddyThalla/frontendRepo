import React, { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllAccounts } from "../services/BankAccountService";
// import AddBankAccount from "./AddBankAccount";

const BankAccountList=()=>{

    const [accounts,setAccounts]=useState([
        {accountHolderName:"T.Yashwanth Reddy",accountNum:"123456",bankName:"SBI"}
    ])
    const navigate =useNavigate(null)

    useEffect(()=>getAllAccountsInfo(),[])

    const getAllAccountsInfo=()=>{
       getAllAccounts().then((res)=>{
        setAccounts(res.data);
        console.log(res.data)
    })
   
    .catch((error)=>console.log("error generated"))
    }

    const deleteAccount=()=>{
        alert("account deleted")
    }


const AddBankAccount=()=>{
    navigate("/add")
}
    return(
        <div className="container">
            <button type="button" className="btn btn-success" onClick={AddBankAccount}>AddAccount</button>
            <table border={3}>
                <thead>
                    <th>Account Number</th>
                    <th>Account Holder  Name</th>
                    <th>Bank Name</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {accounts.map((account)=>(                        
                         <tr key={account.accountNum}>
                         <td>{account.accountNum}</td>
                         <td>{account.accountHolderName}</td>
                         <td>{account.bankName}</td>
                        <td>
                           <Link to='/update' className="btn btn-primary">Update</Link>
                            <button className='btn btn-danger' onClick={deleteAccount}>Delete</button>
                            <Link to='/info' className='btn btn-info'>Info</Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default BankAccountList