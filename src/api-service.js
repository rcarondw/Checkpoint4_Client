import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
});

const BASE_URL = "http://localhost:5000";
