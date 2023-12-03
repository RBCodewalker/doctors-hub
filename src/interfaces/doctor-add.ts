"use server";

import DoctorUseCase from "@/use-cases/doctor-use-case";
import { Doctor } from "@/entities/doctor";

export const addDoctor = async (doctor: Doctor) => {
  try {
    return await DoctorUseCase.getInstance().addDoctor(doctor);
  } catch (error) {
    if (error === 405) {
      throw "Value already exists";
    }
    throw error;
  }
};
