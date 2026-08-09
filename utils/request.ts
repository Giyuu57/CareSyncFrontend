import axios from "axios";

import { API_BASE } from "./apiConfig";
const API_URL = `${API_BASE}/request/`;

export const fetchRequests = async (token: string) => {
  if (!token) throw new Error("Authentication token is missing.");
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addRequest = async (token: string, newRequest: any) => {
  if (!token) throw new Error("Authentication token is missing.");
  const data = {
    owner: newRequest.owner,
    name: newRequest.name,
    licenseNumber: newRequest.licenseNumber,
    contact: newRequest.contact,
    address: {
      latitude: newRequest.address.latitude,
      longitude: newRequest.address.longitude,
      street: newRequest.address.street,
      city: newRequest.address.city,
      state: newRequest.address.state,
      postalCode: newRequest.address.postalCode,
      country: newRequest.address.country,
    }
  }
  try {
    const response = await axios.post(API_URL, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err: any) {
    // The backend sends a specific reason (e.g. "State/region is required.")
    // in response.data.message — surface that instead of a generic failure,
    // otherwise the caller has no way to know what actually went wrong.
    const backendMessage = err?.response?.data?.message;
    throw new Error(backendMessage || "Failed to submit registration request. Please try again.");
  }
};

export const updateRequestStatus = async (
  token: string,
  requestId: string,
  status: string
) => {
  if (!token) throw new Error("Authentication token is missing.");
  const data = {
    status: status,
    };
  await axios.put(
    `${API_URL}${requestId}`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const checkPendingRequests = async (token: string) => {
    if (!token) throw new Error("Authentication token is missing.");
    const response = await axios.get(`${API_URL}check`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
    }

export const deleteRequest = async (token: string, requestId: string) => {
  if (!token) throw new Error("Authentication token is missing.");
  const response = await axios.delete(`${API_URL}${requestId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};