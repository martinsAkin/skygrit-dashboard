import type { Policy, NewPolicy } from "../interface";
// import axios from "axios";
import Cookies from "js-cookie";
import apiClient from "./apiClient";

export const fetchAllPolicies = async ():Promise<Policy[]> => {
 try{
  const token = Cookies.get("token")
  const tokenType = Cookies.get("tokenType")
  const response = await apiClient.get("/policy-management", {
   headers: {
    Authorization: `${tokenType} ${token}`
   }
  });
  console.log("Raw response:", response);
  console.log("Response data type:", typeof response.data);
  return response.data.response;
 }catch(error){
  console.error("Error Fetching policies:", error);
  return [];
 }
}

export const createNewPolicy = async(data: NewPolicy) => {
 try {
  const token = Cookies.get("token")
  const tokenType = Cookies.get("tokenType")
  const response = await apiClient.post("/policy-management", data, {
   headers: {
    Authorization: `${tokenType} ${token}`,
    "Content-Type": "application/json"
   }
  });
  console.log("Policy created successfully!")
  return response.data;
 } catch (error) {
  console.error("Error creating policy:", error)
 }
}