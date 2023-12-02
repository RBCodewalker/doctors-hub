"use server";

import { Doctor } from "@/entities/doctor";

const apiUrl = `https://challenge.digitalepatientenhilfe.de/api/doctors`;

export const fetchData = async (page: number) => {
  try {
    const response = await fetch(apiUrl + `?page=${page}`);

    if (response.ok && response.status === 200) {
      const data = await response.json();
      return data.results as Doctor[];
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw new Error("Failed to fetch data.");
  }
};

export const addDoctor = async (doctor: Doctor) => {
  try {
    console.log(doctor);
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doctor),
    });

    if (response.ok && response.status === 200) {
      return;
    }
  } catch (error) {
    throw new Error("Failed to add doctor.");
  }
};

export const deleteDoctor = async (id: number) => {
  try {
    const response = await fetch(apiUrl + `/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "*/*",
      },
    });

    if (response.status === 200) {
      return;
    }
  } catch (error) {
    throw new Error("Failed to delete doctor.");
  }
};

export const updateDoctor = async (id: number, newDoctor: Doctor) => {
  try {
    const response = await fetch(apiUrl + `/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDoctor),
    });

    if (response.status === 200) {
      return;
    }
  } catch (error) {
    throw new Error("Failed to update doctor.");
  }
};
