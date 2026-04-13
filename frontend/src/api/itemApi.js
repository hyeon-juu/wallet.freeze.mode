import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});
export const getItems = (status) => API.get("/items", { params: { status } });
export const getSummary = () => API.get("/items/summary");
export const createItem = (data) => API.post("/items", data);
export const updateStatus = (id, status) =>
  API.patch(`/items/${id}/status`, { status });
