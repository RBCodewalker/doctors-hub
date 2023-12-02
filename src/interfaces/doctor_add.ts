"use server";

import DoctorUseCase from "@/use-cases/doctor_use_case";
import { Doctor } from "@/entities/doctor";

export const addDoctor = async (doctor: Doctor) => {
  const doctorService = DoctorUseCase.getInstance();

  try {
    await doctorService.addDoctor(doctor);
  } catch (error) {
    if (error === 405) {
      console.log("Value already exists");
      return;
    }
    throw error;
  }
};
