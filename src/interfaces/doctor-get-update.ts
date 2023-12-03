"use server";

import DoctorUseCase from "@/use-cases/doctor-use-case";
import { Doctor } from "@/entities/doctor";

export async function getUpdateDoctors(
  id: number,
  page: number
): Promise<Doctor | null> {
  const doctorService = DoctorUseCase.getInstance();

  try {
    const doctor = await doctorService.fetchOnUpdate(id, page);
    return doctor;
  } catch (error) {
    throw error;
  }
}
