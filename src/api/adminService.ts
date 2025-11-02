import apiClient from "./apiClient";

export interface LoginPayload{
 email: string;
 password: string;
}

export const loginAdmin = async (payload: LoginPayload) => {
 const response = await apiClient.post("/admin/login", payload)
 return response.data;
}