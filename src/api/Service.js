import apiConfig from "./apiConfig";
import VueCookies from "vue-cookies";

//Authentication
export async function getAllUser() {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.get("/auth/all", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
export async function getUserById(id) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.get(`/auth/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
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
    if (error.response.status === 401) {
      console.log(error.response.data.message);
    }
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
      "/auth/addUser",
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
export async function updateUser(
  id,
  idCard,
  position,
  joinDate,
  gender,
  dateOfBirth,
  address,
  homeNo,
  streetNo,
  companyName
) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.put(
      `/auth/${id}`,
      {
        idCard,
        position,
        joinDate,
        gender,
        dateOfBirth,
        address,
        homeNo,
        streetNo,
        companyName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching Data");
  }
}

export async function changeRoleUser(id, roles) {
  const token = VueCookies.get("jstoken");
  const params = new URLSearchParams({ roles });
  try {
    const response = await apiConfig.put(
      `/auth/${id}/role?${params.toString()}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching Data");
  }
}
export async function changePasswordUser(id, password) {
  const token = VueCookies.get("jstoken");
  const params = new URLSearchParams({ password });
  try {
    const response = await apiConfig.put(
      `/auth/${id}/change/?${params.toString()}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching Data");
  }
}
export async function deleteUser(id) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.delete(`/auth/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error deteleting");
  }
}
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
export async function getClientId(id) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.get(`/client/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
export async function updateClient(
  id,
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
    const response = await apiConfig.put(
      `/client/update/${id}`,
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
export async function getTaxInvoiceById(id) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.get(`/tax/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
export async function getTaxByType(noteType) {
  const token = VueCookies.get("jstoken");
  const params = new URLSearchParams({ noteType });
  try {
    const response = await apiConfig.get(`/tax/status?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching Data");
  }
}
export async function changeCloseTax(id, value) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.put(
      `/tax/close/${id}?close=${value}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching Data");
  }
}
export async function getCloseTax(value) {
  const token = VueCookies.get("jstoken");
  try {
    const response = await apiConfig.get(`/tax/close=${value}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching Data");
  }
}
export async function dataGraph(fromDate, toDate) {
  const token = VueCookies.get("jstoken");
  const params1 = new URLSearchParams({ fromDate });
  const params2 = new URLSearchParams({ toDate });
  try {
    const response = await apiConfig.get(
      `/post/graph?${params1.toString()}&${params2.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching Data");
  }
}
