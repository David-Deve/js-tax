import axios from "axios";
const baseURL = "https://tax-service-production.up.railway.app/api";
const instanct = axios.create({
  baseURL,
});

export default instanct;
