"use client";
import { Doctor } from "@/model";
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
import { fetchData } from "@/api/api";
import { Loader } from "./ui/loader";

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
    const newDoctors = await fetchData(page).catch((_: any) => {
      setIsError(true);
    });;

    if (newDoctors != undefined) {
      setIsError(false);
      setIsLoaderVisible(true);
    }


    if (newDoctors?.length === 0 || isError || newDoctors == undefined) {
      setIsLoaderVisible(false);
      return;
    }

    setDoctors(doctors.concat(newDoctors ?? []));
    setPage(page + 1);
  };

  useEffect(() => {
    if (doctors) {
      setDoctors(doctors);
    }

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
            </CardFooter>
          </Card>
        ))
      ) : (
        <div className="text-xl font-bold">
          <div> Error occured please try again. </div>
          <button onClick={loadMoreDoctors}> Retry </button>
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
