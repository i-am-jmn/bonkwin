import axios from "axios";

export const BASE_URL = "http://localhost:9000/";

axios.defaults.withCredentials = true;

export interface Product {
  title: string;
  description: string;
  price: string;
  ownerId: string;
}

export const fetchUser = async () => {
  try {
    return await axios.get(BASE_URL + "user");
  } catch {
    return null;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get<Product[]>(BASE_URL + "product/my");
    if (response.status === 200) return response.data;
    return [];
  } catch {
    return [];
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    return await axios.post(BASE_URL + "user/sign-in", {
      email,
      password,
    });
  } catch {
    return null;
  }
};

export const signUp = async (
  email: string,
  firstName: string,
  lastName: string,
  password: string
) => {
  try {
    return await axios.post(BASE_URL + "user/sign-up", {
      email,
      firstName,
      lastName,
      password,
    });
  } catch {
    return null;
  }
};

export const signOut = async () => {
  return await axios.post(BASE_URL + "user/sign-out");
};

export const publish = async (
  title: string,
  description: string,
  price: number
) => {
  return await axios.post(BASE_URL + "product", {
    title,
    description,
    price,
  });
};
