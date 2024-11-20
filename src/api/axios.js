import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    language: "ko",
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
});

export default instance;
