"use server";

import DoctorUseCase from "@/use-cases/doctor_use_case";
import { Doctor } from "@/entities/doctor";

export async function getDoctors(page: number): Promise<Doctor[]> {
  const doctorService = DoctorUseCase.getInstance();

  try {
    const doctors = await doctorService.fetchData(page);
    return doctors;
  } catch (error) {
    throw error;
  }
}
