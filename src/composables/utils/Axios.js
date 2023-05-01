import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: "https://anime-web-scrapper.cyclic.app",
});
