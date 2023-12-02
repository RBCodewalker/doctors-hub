import { fetchData } from '@/api/api';
import { Doctors } from "@/components/doctors";
import { LoadDoctors } from '@/components/load-doctors';
import { Doctor } from '@/model';
import { useState } from 'react';

const Page = async() => {
  const doctors = await fetchData(1);
  // const [doctors, setDoctors] = useState<Doctor[]>([]);
  // setDoctors(await fetchData(1));


  return(
    <div className="container mx-auto p-4 min-h-screen max-w-5xl">
      <h1 className="text-3xl font-bold mb-4 text-center">List of Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <Doctors doctors={doctors}  />
        <LoadDoctors />
      </div>
    </div>
  )
};

export default Page;