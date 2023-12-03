"use server";

import { Doctor } from "@/entities/doctor";

// DoctorUseCase is a Singleton Class
class DoctorUseCase {
  private static instance: DoctorUseCase;
  private apiUrl = `https://challenge.digitalepatientenhilfe.de/api/doctors`;

  private constructor() {}

  public static getInstance(): DoctorUseCase {
    if (!DoctorUseCase.instance) {
      DoctorUseCase.instance = new DoctorUseCase();
    }

    return DoctorUseCase.instance;
  }

  async fetchData(page: number): Promise<Doctor[]> {
    try {
      const response = await fetch(`${this.apiUrl}?page=${page}`, {
        cache: "no-store",
      });

      if (response.ok && response.status === 200) {
        const data = await response.json();
        return data.results as Doctor[];
      }
      throw new Error("Failed to fetch data.");
    } catch (error) {
      throw error;
    }
  }

  async addDoctor(doctor: Doctor) {
    try {
      const response = await fetch(this.apiUrl, {
        method: "POST",
        cache: "no-store",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(doctor),
      });

      if (response.ok || response.status === 201) {
        return await response.json();
      }
      throw response.status;
    } catch (error) {
      throw error;
    }
  }

  async deleteDoctor(id: number): Promise<boolean> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: "DELETE",
        cache: "no-store",
        headers: {
          Accept: "*/*",
        },
      });

      return response.status === 200;
    } catch (error) {
      throw new Error("Failed to delete doctor.");
    }
  }

  async updateDoctor(id: number, newDoctor: Doctor): Promise<Doctor> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDoctor),
      });

      if (response.status === 200) {
        return await response.json();
      }

      throw response.status;
    } catch (error) {
      throw new Error("Failed to update doctor.");
    }
  }
}

export default DoctorUseCase;
