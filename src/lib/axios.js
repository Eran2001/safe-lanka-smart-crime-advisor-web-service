import axios from "axios";
import token from "./utilities";
import { v4 as uuIdv4 } from "uuid";

const publicHeaders = (contentType = "application/json") => {
  return {
    "X-Request-Id": uuIdv4(),
    "Content-Type": contentType,
    "Accept-Language": "es-US",
    Accept: "application/json",
  };
};

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
  baseURL: import.meta.env.VITE_SAFE_LANKA_API_BASE_URL,
  timeout: 30000,
});

const instance = {
  clientOnboarding,
  publicHeaders,
  defaultHeaders,
};

export default instance;
