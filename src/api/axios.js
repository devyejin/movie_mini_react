import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    language: "ko",
  },
});

export default instance;
