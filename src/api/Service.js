import apiConfig from "./apiConfig";


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
export async function login(username , password){
    try{
        const response = await apiConfig.post("/login",{username , password});
        return response.data;
    }catch(error){
        throw new Error("Error fetching data");
    }
}