import {
  getMe,
  getAllUser,
  getClient,
  getAllInvoice,
  getAllTax,
  getTaxByType,
} from "../api/Service.js";
import { defineStore } from "pinia";

export const useAuthentication = defineStore("data", {
  state: () => ({
    infoUser: "",
    role: "",
    allusernumber: "",
    getAllClient: "",
    getInvoice: "",
    getTax: "",
  }),
  actions: {
    async getinfoUser() {
      try {
        const response = await getMe();
        this.infoUser = response.data;
        this.role = response.data.roles[0].name;
      } catch (e) {
        console.error(e);
      }
    },
    async getDashboard() {
      try {
        const user = await getAllUser();
        const client = await getClient();
        const invoice = await getAllInvoice();
        const tax = await getAllTax();
        this.allusernumber = user.data.length;
        this.getAllClient = client.data.length;
        this.getInvoice = invoice.data.length;
        this.getTax = tax.data.length;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
