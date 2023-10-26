import { getMe } from "../api/Service.js";
import { defineStore } from "pinia";

export const useAuthentication = defineStore("data", {
  state: () => ({
    infoUser: "",
    role: "",
  }),
  actions: {
    async getinfoUser() {
      try {
        const response = await getMe();
        this.infoUser = response;
        this.role = response.roles[0].name;
        return this.infoUser;
      } catch (e) {
        console.error(e);
      }
    },
  },
});
