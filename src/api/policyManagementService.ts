import type {
 Policy,
 NewPolicy,
 PolicyRefundMetric,
 Header,
 RefundData,
} from "../interface";
import Cookies from "js-cookie";
import apiClient from "./apiClient";

export const fetchAllPolicies = async (): Promise<Policy[]> => {
 try {
  const token = Cookies.get("token");
  const tokenType = Cookies.get("tokenType");
  const response = await apiClient.get("/policy-management", {
   headers: {
    Authorization: `${tokenType} ${token}`,
   },
  });
  console.log("Raw response:", response);
  console.log("Response data type:", typeof response.data);
  return response.data.response;
 } catch (error) {
  console.error("Error Fetching policies:", error);
  return [];
 }
};

export const deletePolicy = async (policyId: string) => {
 try {
  const response = await apiClient.delete(
   `/policy-management/delete/${policyId}`,
  );
  if (response.data?.success) {
   console.log("Policy deleted successfully", response.data);
  } else {
   console.warn("Failed to delete policy");
  }
 } catch (e) {
  console.error("Error:", e);
 }
};

export const createNewPolicy = async (data: NewPolicy) => {
 try {
  const token = Cookies.get("token");
  const tokenType = Cookies.get("tokenType");
  const response = await apiClient.post("/policy-management", data, {
   headers: {
    Authorization: `${tokenType} ${token}`,
    "Content-Type": "application/json",
   },
  });
  console.log("Policy created successfully!");
  return response.data;
 } catch (error) {
  console.error("Error creating policy:", error);
 }
};

export const addTicketClass = async (name: string) => {
 try {
  const token = Cookies.get("token");
  const tokenType = Cookies.get("tokenType");
  const response = await apiClient.post(
   "/ticket-class",
   { name },
   {
    headers: {
     Authorization: `${tokenType} ${token}`,
     "Content-Type": "application/json",
    },
   },
  );
  return response.data;
 } catch (e) {
  console.error("Error:", e);
 }
};

export const fetchTicketClasses = async (): Promise<Header[]> => {
 const response = await apiClient.get("/ticket-class");
 return (
  response.data?.response
   ?.filter((t: any) => t.name)
   .map((t: any) => ({
    name: t.name,
   })) ?? []
 );
};
export const deleteTicketClass = async (name: string) => {
 try {
  const response = await apiClient.delete(`/ticket-class/${name}`);
  if (response.data?.success) {
   console.log("Ticket class deleted successfully!");
   alert("Ticket class deleted successfully!");
  } else {
   console.log("Failed to delete ticket class.");
  }
 } catch (e) {
  console.error("Error:", e);
 }
};

export const fetchSubCategory = async () => {
 try {
  const response = await apiClient.get("/policy-category");
  return response.data;
 } catch (e) {
  console.error("Error:", e);
 }
};

export interface categoryPayload {
 category: string;
 name: string;
}

export const addSubCategory = async (payload: categoryPayload) => {
 try {
  const response = await apiClient.post("/policy-category", payload);
  return response.data;
 } catch (e) {
  console.error("Error creating sub category:", e);
 }
};

export const deleteSubCategory = async (name: string) => {
 try {
  const res = await apiClient.delete(`/policy-category/${name}`);
  if (res.data?.success) {
   console.log("Sub-Category deleted successfully!");
   alert("Sub-Category deleted successfully!");
  } else {
   console.log("Error deleting Sub-Category");
  }
 } catch (e) {
  console.error("Error:", e);
 }
};

// policy checkbox table
export const createPolicyRefundMetric = async (
 payload: PolicyRefundMetric[],
) => {
 await apiClient.post("/policy-refund-metric/list", payload);
};

export const fetchPolicyRefundMetrics = async (): Promise<
 PolicyRefundMetric[]
> => {
 const response = await apiClient.get(
  "/policy-refund-metric/list?cabinType=ECONOMY&routeType=DOMESTIC",
 );
 return response.data?.response ?? [];
};

export const fetchCancellationReasons = async () => {
  const token = Cookies.get("token");
  const tokenType = Cookies.get("tokenType");
 const res = await apiClient.get("/cancellation/reason", {
  headers: {
     Authorization: `${tokenType} ${token}`,
     "Content-Type": "application/json",
    },
 });
 const data = res.data?.response ?? [];
 return data;
};

export const saveRefundMetric = async (payload: RefundData[]) => {
   const token = Cookies.get("token");
  const tokenType = Cookies.get("tokenType");
 const res = await apiClient.post("/refund-metric/list", payload, {
  headers: {
     Authorization: `${tokenType} ${token}`,
     "Content-Type": "application/json",
    },
 });
  return res.data;
}

export const fetchRefundMetrics = async (
  cabinType: string,
  routeType: string
) => {
  const token = Cookies.get("token");
  const tokenType = Cookies.get("tokenType");

  const res = await apiClient.get("/refund-metric/list", {
    params: { cabinType, routeType },
    headers: {
      Authorization: `${tokenType} ${token}`,
      "Content-Type": "application/json",
    },
  });

  return res.data;
};