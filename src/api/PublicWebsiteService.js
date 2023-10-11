import apiConfig from "./apiConfig";

export async function getTextHomePage() {
  try {
    const response = await apiConfig.get("/post/id=10");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
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
export async function getTextService1Page() {
  try {
    const response = await apiConfig.get("/post/id=13");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
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
export async function getTextContactPage() {
  try {
    const response = await apiConfig.get("/post/id=15");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
