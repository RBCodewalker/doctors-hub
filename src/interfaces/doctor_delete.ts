"use server";
import DoctorUseCase from "@/use-cases/doctor_use_case";
import { Doctor } from "@/entities/doctor";

export async function deleteDoctor(id: number): Promise<boolean> {
  const doctorService = DoctorUseCase.getInstance();
  try {
    const res = await doctorService.deleteDoctor(id);
    return res;
  } catch (error) {
    throw error;
  }
}
