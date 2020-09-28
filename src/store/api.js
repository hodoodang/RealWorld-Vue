import axios from "axios";

export const api = axios.create({
  baseURL: "https://conduit.example.io/api"
});

export function setToken(jwt) {
  api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function clearToken() {
  delete api.defaults.headers.common["Authorization"];
}
