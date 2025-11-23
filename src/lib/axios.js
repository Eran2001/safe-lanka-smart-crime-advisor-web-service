import axios from "axios";
import token from "./utilities";
import { v4 as uuIdv4 } from "uuid";

const defaultHeaders = (contentType = "application/json") => {
  return {
    "X-Request-Id": uuIdv4(),
    "Content-Type": contentType,
    "Accept-Language": "es-US",
    Accept: "application/json",
    Authorization: "Bearer " + token.getAuthToken(),
  };
};

const clientOnboarding = axios.create({
  baseURL: import.meta.env.VITE_E_COMM_API_BASE_URL,
  timeout: 30000,
});

const instance = {
  clientOnboarding,
  defaultHeaders,
};

export default instance;
