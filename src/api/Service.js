import apiConfig from "./apiConfig";
import VueCookies from "vue-cookies";

//Authentication
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

export async function getMe() {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.get("/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
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
//Authentication

export async function UserConsultation(name, email, description) {
  try {
    const response = await apiConfig.post("/chat/", {
      name,
      email,
      description,
    });
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

export async function createClient(
  khmerName,
  engName,
  email,
  phone,
  address,
  vattin,
  companyName
) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.post(
      "/client/add",
      { khmerName, engName, email, phone, address, vattin, companyName },
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
export async function getClient() {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.get("/client/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}

export async function getAllInvoice() {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.get("/invoice/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
export async function getInvoiceById(id) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.get(`/invoice/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
export async function createInvoice(
  invoiceName,
  invoiceDate,
  vatPer,
  rateKh,
  client,
  invoiceDetailsPayloads
) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.post(
      "/invoice/",
      {
        invoiceName,
        invoiceDate,
        vatPer,
        rateKh,
        client,
        invoiceDetailsPayloads,
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
export async function getAllTax() {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.get("/tax/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
export async function createTax(
  name,
  dateNote,
  noteType,
  rateToRiel,
  total,
  invoiceId,
  clientId,
  detailsPayloads
) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.post(
      "/tax/",
      {
        name,
        dateNote,
        noteType,
        rateToRiel,
        total,
        invoiceId,
        clientId,
        detailsPayloads,
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
