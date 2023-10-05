import apiConfigTest from "./apiConfigTest";
export async function getText() {
  try {
    const response = await apiConfigTest.get("/para/1");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
