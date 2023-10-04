import apiConfig from "./apiConfig";
import VueCookies from "vue-cookies";
export async function getAllUser() {
  try {
    const response = await apiConfig.get("/auth/all", {
      headers: {},
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}

export async function login(username, password) {
  try {
    const response = await apiConfig.post("/auth/login", {
      username,
      password,
    });
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
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
export async function UserConsultation(name, email, description) {
  try {
    const token = VueCookies.get("jstoken");
    const response = await apiConfig.post(
      "/chat/",
      {
        name,
        email,
        description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
export async function getConsultation() {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.get("/chat", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
