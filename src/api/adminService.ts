import type { User, NewRole } from "../interface";
import apiClient from "./apiClient";
import Cookies from "js-cookie";

export interface LoginPayload {
 email: string;
 password: string;
}

export const loginAdmin = async (payload: LoginPayload) => {
 try {
  const response = await apiClient.post("/admin/login", payload);
  const { accessToken, tokenType } = response.data.response;
  Cookies.set("token", accessToken);
  Cookies.set("tokenType", tokenType);
  return response.data;
 } catch (error) {
  console.error("error:", error);
  throw error;
 }
};

export interface AddAdminPayload {
 username: string;
 role: string;
 fullName: string;
}

export const addAdmin = async (payload: AddAdminPayload) => {
 const response = await apiClient.post("/admin/add", payload);
 return response.data;
};

export const fetchAddedUsers = async (): Promise<User[]> => {
 try {
  const token = Cookies.get("token");
  const tokenType = Cookies.get("tokenType");
  
  if (!token || !tokenType) {
      throw new Error("No auth token found. Please log in.");
  }

  const response = await apiClient.get("/admin", {
   headers: {
    Authorization: `${tokenType} ${token}`,
   },
  });
  const content = response.data?.response.content ?? [];
  return content.map((u: any) => ({
      userID: u.id,
      name: u.fullName,
      email: u.username, // backend uses "username" as email
      role: u.role,
      status: u.active ? "Active" : "Inactive", // map boolean to string
    }));
 } catch (error) {
  console.error("Error Fetching users:", error);
  return [];
 }
};

export const createRole = async (data: NewRole) => {
 try {
  const token = Cookies.get("token");
  const tokenType = Cookies.get("tokenType");

  const response = await apiClient.post("/role", data, {
   headers: {
    Authorization: `${tokenType} ${token}`,
    "Content-Type": "application/json",
   },
  });

  console.log("Role created successfully:", response.data);
  return response.data;
 } catch (error) {
  console.error("Error creating role:", error);
  throw error;
 }
};
