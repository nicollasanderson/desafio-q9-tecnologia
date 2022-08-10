import axios from "axios";

const app = axios.create({
  baseURL: "https://dogbreed-api.q9.com.br/",
});

export default app;
