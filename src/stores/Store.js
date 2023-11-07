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
    getcredit: "",
    getDebit: "",
    getReimbes: "",
    getStatement: "",
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
        const credit = await getTaxByType("CREDIT");
        const debit = await getTaxByType("DEBIT");
        const reimbes = await getTaxByType("RE_IN");
        const statement = await getTaxByType("STATEMENT");
        this.allusernumber = user.data.length;
        this.getAllClient = client.data.length;
        this.getInvoice = invoice.data.length;
        this.getTax = tax.data.length;
        this.getcredit = credit.data.length;
        this.getDebit = debit.data.length;
        this.getReimbes = reimbes.data.length;
        this.getStatement = statement.data.length;
        console.log(this.allusernumber);
      } catch (e) {}
    },
  },
});
