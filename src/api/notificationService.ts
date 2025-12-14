import apiClient from "./apiClient";
import type { NotificationTemplate, NotificationTemplatePayload } from "../interface";
import Cookies from "js-cookie";


export const createNotificationTemplate = async (payload: NotificationTemplatePayload) => {
 try {
   const token = Cookies.get("token");
  const tokenType = Cookies.get("tokenType");

   const response = await apiClient.post("/notification-template", 
    payload,
    {
    headers: {
      Authorization: `${tokenType} ${token}`,
      "Content-Type": "application/json",
    }
   }
   ); 
   return response.data;
   console.log("Template created successfully:", response.data);
   console.log("payload:", payload);
  } catch (error) {
   console.error("error:", error);
   throw error;
  }
}

export const fetchNotificationTemplates = async (): Promise<NotificationTemplate[]> => {
  const token = Cookies.get("token");
  const tokenType = Cookies.get("tokenType");

  const res = await apiClient.get<{ response: NotificationTemplate[] }>("/notification-template/", {
    headers: {
      Authorization: `${tokenType} ${token}`,
      "Content-Type": "application/json",
    },
  })

  return res.data.response ?? [];
}

export const ViewTemplateById = async() => {

}