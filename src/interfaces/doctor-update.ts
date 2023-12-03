"use server";

import DoctorUseCase from "@/use-cases/doctor-use-case";
import { Doctor } from "@/entities/doctor";

export async function updateDoctor(doctor: Doctor) {
  try {
    return await DoctorUseCase.getInstance().updateDoctor(doctor.id, doctor);
  } catch (error) {
    throw error;
  }
}
