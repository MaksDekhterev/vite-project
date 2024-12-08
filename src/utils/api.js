import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + "contacts",
  timeout: 5000,
});

export async function getContacts(search, gender, filter) {
  try {
    const response = await instance.get("", {
      params: { search: search, gender: gender, filter: filter },
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createContact(formData) {
  try {
    const response = await instance.post("", formData);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteContact(id) {
  try {
    const response = await instance.delete("/" + id);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
