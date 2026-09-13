import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});


// =========================
// JWT Token Interceptor
// =========================

API.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {

    config.headers.Authorization = `Bearer ${token}`;

  }

  return config;

});


// =========================
// Research
// =========================

export const analyzeCompany = (company) =>
  API.post("/research", { company });


// =========================
// SWOT
// =========================

export const generateSwot = (company) =>
  API.post("/swot", { company });


// =========================
// Compare
// =========================

export const compareCompanies = (company1, company2) =>
  API.post("/compare", {

    company1,

    company2

  });


// =========================
// History
// =========================

export const getHistory = () =>
  API.get("/history");


export default API;