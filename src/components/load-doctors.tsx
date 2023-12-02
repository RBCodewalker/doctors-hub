"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Loader } from "./ui/loader";

import { fetchData } from "@/api/api";
import { Doctor } from "@/model";
import { Doctors } from "@/components/doctors";

export function LoadDoctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreDoctors = async () => {
    // await delay(1000);
    const nextPage = (page % 4) + 1;
    const newDoctors = (await fetchData(nextPage)) ?? [];
    setDoctors((prevDoctors: Doctor[]) => [...prevDoctors, ...newDoctors]);
    setPage(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMoreDoctors();
    }
  }, [inView]);

  return (
    <>
      <Doctors doctors={doctors} />
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <Loader />
      </div>
    </>
  );
}