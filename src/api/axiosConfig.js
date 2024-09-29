import axios from "axios";

export default axios.create({
  baseURL: "https://movie-reviewer-api-bft0.onrender.com",
  headers: { "ngrok-skip-browser-warning": "true" },
});
