import axios from "axios";
const baseURL = "http://api-ecomerce-v2.test/api";
const instanct = axios.create({
  baseURL,
});
export default instanct;
