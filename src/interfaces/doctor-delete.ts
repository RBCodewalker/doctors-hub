"use server";
import DoctorUseCase from "@/use-cases/doctor-use-case";

export async function deleteDoctor(id: number): Promise<boolean> {
  try {
    return await DoctorUseCase.getInstance().deleteDoctor(id);
  } catch (error) {
    throw error;
  }
}
