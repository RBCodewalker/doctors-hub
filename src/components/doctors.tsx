"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { Loader } from "./ui/loader";
import { Button } from "./ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

import { getDoctors } from "@/interfaces/doctor-get";
import { Doctor } from "@/entities/doctor";
import { DeleteDoctor } from "./delete-doctors";
import { UpdateDoctor } from "./update-doctors";
import { AddDoctor } from "./add-doctors";

export interface DoctorProps {
  doctors: Doctor[];
  page: number;
}

export function Doctors({ ...props }: DoctorProps) {
  const [doctors, setDoctors] = useState<Doctor[]>(props.doctors);
  const [page, setPage] = useState<number>(props.page);

  const [isLoaderVisible, setIsLoaderVisible] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const { ref, inView } = useInView();

  const loadMoreDoctors = async () => {
    try {
      const newDoctors = await getDoctors(page);

      if (newDoctors.length === 0) throw "No new data";

      setIsError(false);
      setIsLoaderVisible(true);

      setDoctors((prevDoctors: Doctor[]) => [...prevDoctors, ...newDoctors]);

      setPage(page + 1);
    } catch (err) {
      setIsError(true);
      setIsLoaderVisible(false);
    }
  };

  const onAddDoctor = (newDoctor: Doctor[]) => {
    setDoctors((prevDoctors: Doctor[]) => [...prevDoctors, ...newDoctor]);
  };

  const onDeleteDoctor = (doctorId: number) => {
    const updatedDoctors = doctors.filter((doctor) => doctor.id !== doctorId);
    setDoctors(updatedDoctors);
  };

  const onUpdateDoctor = (doctorInfo: Doctor) => {
    const updatedDoctorList = doctors.map((doctor) => {
      if (doctor.id === doctorInfo.id) {
        return { ...doctor, ...doctorInfo };
      }
      return doctor;
    });

    setDoctors(updatedDoctorList);
  };

  useEffect(() => {
    if (inView) {
      loadMoreDoctors();
    }
  }, [doctors, inView]);

  return (
    <>
      <div className="mx-auto p-0 sm:col-span-2 col-span-1 md:col-span-4">
        <AddDoctor onAddDoctor={onAddDoctor} />
      </div>
      {doctors.length || !isError ? (
        doctors.map((doctor) => (
          <Card key={doctor.id}>
            <CardFooter className="text-center flex flex-col p-4">
              <CardTitle className="my-2">{doctor.name}</CardTitle>

              <CardDescription>
                {doctor.email}
                {<br />}
                {doctor.phone}

                {doctor.street}
                {<br />}
                {doctor.zip}
                {", "}
                {doctor.state}
              </CardDescription>

              <div className="flex gap-4 pt-2">
                <UpdateDoctor doctor={doctor} onUpdateDoctor={onUpdateDoctor} />
                <DeleteDoctor id={doctor.id} onDeleteDoctor={onDeleteDoctor} />
              </div>
            </CardFooter>
          </Card>
        ))
      ) : (
        // If there is an error fetching the doctors an error message and a retry button are shown
        <div className="mx-auto p-0 sm:col-span-2 col-span-1 md:col-span-4 text-center">
          <div className="text-xl font-bold mb-4">Network Error</div>
          <Button className="bg-[#344597]" onClick={loadMoreDoctors}>
            Retry
          </Button>
        </div>
      )}

      {isLoaderVisible && (
        <div
          className="mx-auto p-0 sm:col-span-2 col-span-1 md:col-span-4"
          ref={ref}
        >
          <Loader />
        </div>
      )}
    </>
  );
}
