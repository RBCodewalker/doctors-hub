"use server";

import DoctorUseCase from "@/use-cases/doctor_use_case";
import { Doctor } from "@/entities/doctor";

export async function updateDoctor(doctor: Doctor) {
  const doctorService = DoctorUseCase.getInstance();

  try {
    await doctorService.updateDoctor(doctor.id, doctor);
  } catch (error) {
    throw error;
  }
}
