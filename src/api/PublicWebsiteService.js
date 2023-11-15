import apiConfig from "./apiConfig";
import VueCookies from "vue-cookies";
export async function getTextHomePage() {
  try {
    const response = await apiConfig.get("/post/id=10");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
export async function updateTextHomePage(bodyPayloads) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.put(
      "/post/update/10",
      { bodyPayloads },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error updating data");
  }
}
export async function getTextAboutPage() {
  try {
    const response = await apiConfig.get("/post/id=12");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}

export async function updateTextAboutPage(bodyPayloads) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.put(
      "/post/update/12",
      { bodyPayloads },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error updating data");
  }
}
export async function getTextService1Page() {
  try {
    const response = await apiConfig.get("/post/id=13");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
export async function updateTextService1Page(bodyPayloads) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.put(
      "/post/update/13",
      { bodyPayloads },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error updating data");
  }
}
export async function getBusinessRegister() {
  try {
    const response = await apiConfig.get("/post/id=18");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
export async function updateBusinessRegister(bodyPayloads) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.put(
      "/post/update/18",
      { bodyPayloads },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error updating data");
  }
}
export async function getTextService2Page() {
  try {
    const response = await apiConfig.get("/post/id=14");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
export async function updateTextService2Page(bodyPayloads) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.put(
      "/post/update/14",
      { bodyPayloads },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error updating data");
  }
}
export async function getTextContactPage() {
  try {
    const response = await apiConfig.get("/post/id=15");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}

export async function updateTextContactPage(bodyPayloads) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.put(
      "/post/update/15",
      { bodyPayloads },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error updating data");
  }
}
