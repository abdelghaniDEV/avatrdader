"use server";


import { regesterData } from "./app/[locale]/register/page";

export const register = async (data: regesterData) => {
  const formData = new FormData();
  formData.append("name", data.fullName);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("phone", data.phone);
  formData.append("country", data.country);
  console.log(data)
  try {
    const response = await fetch(`http://localhost:3000/api/auth/register`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
