import axios from "axios";

const API = axios.create({

  baseURL: import.meta.env.VITE_API_URL

});

export const analyzeCompany = (company) =>

  API.post("/research", { company });

export const generateSwot = (company) =>

  API.post("/swot", { company });

export const compareCompanies = (company1, company2) =>

  API.post("/compare", {

    company1,

    company2

  });

export const getHistory = () =>

  API.get("/history");

export default API;