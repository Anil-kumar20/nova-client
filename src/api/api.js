import axios from "axios";

const api = axios.create({
baseURL: "https://nova-server.onrender.com/api"
});

export default api;
