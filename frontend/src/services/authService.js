import axios from "axios";
const API = "http://localhost:4000/api";

export const registerUser = async (userData) => {
  const response = await axios.post(`${API}/user/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API}/user/login`, userData);
  return response.data;
};

export const registerSellerUser = async (data) => {
  const response = await axios.post(`${API}/seller/create`, data);
  return response.data;
};

export const loginSellerUser = async (data) => {
  const response = await axios.post(`${API}/seller/login`, data);
  return response.data;
};
