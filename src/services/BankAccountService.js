// import React from "react";
import axios from "axios";
const BASE_URL='http://localhost:8080/account'

export const getAllAccounts=()=>{
    return axios.get(BASE_URL);
}
export const  insertAccount=(account)=>{
    return axios.post(BASE_URL,account)
}
export const getBankAccountOfAccountNum=(id)=>{
    return axios.get(BASE_URL+"/"+id)
}
export const updateBankAccount=(id,account)=>{
    return axios.put(BASE_URL+"/"+id,account)
}
export const deleteBankAccount=(id)=>{
    return axios.delete(BASE_URL+"/"+id)
}
