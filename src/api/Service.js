import apiConfig from "./apiConfig";
import VueCookies from "vue-cookies";
export async function getAllUser() {
  try {
    const response = await apiConfig.get("/all", {
      headers: {},
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}

export async function login(username, password) {
  try {
    const response = await apiConfig.post("/login", { username, password });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
export async function createUser(
  firstname,
  lastname,
  phone,
  username,
  email,
  gender,
  roles
) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.post(
      "/addUser",
      {
        firstname,
        lastname,
        phone,
        username,
        email,
        gender,
        roles,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.date;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
