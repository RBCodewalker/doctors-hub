"use server";

import DoctorUseCase from "@/use-cases/doctor-use-case";
import { Doctor } from "@/entities/doctor";

export async function getDoctors(page: number): Promise<Doctor[]> {

  try {
    return await DoctorUseCase.getInstance().fetchData(page);
  } catch (error) {
    throw error;
  }
}
