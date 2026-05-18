import axios from "axios";

const API = "http://localhost:5000/api";

export const registerUser = async (userData) => {
  const response = await axios.post(`${API}/register`, userData);
  return response.data;
};
