import axios from "axios";
import VueCookies from "vue-cookies";
import { ElNotification } from "element-plus";
const baseURL = "https://tax-service-production.up.railway.app/api";
const instanct = axios.create({
  baseURL,
});

// instanct.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       VueCookies.remove("jstoken");
//       ElNotification({
//         title: "warning",
//         duration: 2000,
//         message: "Expired, please log in again",
//         type: "warning",
//       });
//       setTimeout(() => {
//         window.location.reload();
//       }, 3000);
//     }
//     return Promise.reject(error);
//   }
// );

export default instanct;
