"use client";
import { Doctor } from "@/entities/doctor";
import { useInView } from "react-intersection-observer";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { getDoctors } from "@/interfaces/doctor_get";
import { Loader } from "./ui/loader";
import { Button, buttonVariants } from "./ui/button";

import { DeleteDoctor } from "./delete-doctors";
import { UpdateDoctor } from "./update-doctors";

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

      setDoctors(doctors.concat(newDoctors ?? []));
      setPage(page + 1);
    } catch (err) {
      setIsError(true);
      setIsLoaderVisible(false);
    }
  };

  useEffect(() => {
    if (inView) {
      loadMoreDoctors();
    }
  }, [doctors, inView]);

  return (
    <>
      {doctors.length || !isError ? (
        doctors.map((doctor) => (
          <Card key={doctor.id}>
            <CardFooter className="text-center flex flex-col p-4">
              <CardTitle className="my-2">{doctor.name}</CardTitle>
              <CardDescription>{doctor.phone}</CardDescription>
              <div className="flex gap-4">
                <UpdateDoctor doctor={doctor} />
                <DeleteDoctor id={doctor.id} onDelete={loadMoreDoctors} />
              </div>
            </CardFooter>
          </Card>
        ))
      ) : (
        <div className="flex justify-between items-center text-xl font-bold">
          <div> Error occured please try again. </div>
          <Button onClick={loadMoreDoctors}> Retry </Button>
        </div>
      )}

      {isLoaderVisible && (
        <div
          className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
          ref={ref}
        >
          <Loader />
        </div>
      )}
    </>
  );
}
