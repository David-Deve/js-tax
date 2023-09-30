import axios from "axios";
const baseURL = "https://tax-service-production.up.railway.app/api/auth";
const instanct = axios.create({
  baseURL,
});


export default instanct;