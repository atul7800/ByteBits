import axios from "axios";
import.meta.env;

const BASE_URL = "http://localhost:1337/api";
const BEARER_TOKEN = import.meta.env.VITE_API_TOKEN;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
});

const getPost = api.get("/blogs?populate=*");

export default {
  getPost,
  BASE_URL,
};
