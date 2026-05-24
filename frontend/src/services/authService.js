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

export const productCreate = async (data) => {
  const formData = new FormData();

  console.log("data:::===>", data);

  formData.append("productname", data.productname);
  formData.append("category", data.category);
  formData.append("saleprice", data.saleprice);
  formData.append("sku", data.sku);
  formData.append("stock", data.stock);
  formData.append("brand", data.brand);
  formData.append("price", data.price);
  formData.append("description", data.description);
  formData.append("producttag", data.producttag);
  formData.append("status", data.status);

  formData.append("thumbnail", data.thumbnail);

  const response = await axios.post(`${API}/product/create`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
