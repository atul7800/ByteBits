import axios from "axios";
import.meta.env;

const BASE_URL = "https://bitbytes-steel.vercel.app/";
const BEARER_TOKEN = import.meta.env.VITE_API_TOKEN;

const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
});

const getPost = api.get("/blogs?populate=*");
const getPostsByID = (id) => api.get("/blogs/" + id + "?populate=*");

export default {
  getPost,
  getPostsByID,
  BASE_URL,
};
