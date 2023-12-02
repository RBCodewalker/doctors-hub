import { Doctor } from "@/model";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter
} from "@/components/ui/card";

export interface DoctorProps {
  doctors: Doctor[] | null;
  // onChange: Function;
};

export function Doctors({ doctors }: DoctorProps) {


  

  return(
    <>
      {doctors ? (
        doctors.length && doctors.map((doctor) => (
        <Card key={doctor.id}>
          {/* <CardContent className="flex flex-col items-center justify-center p-4"> */}
            {/* ADD IMAGE LATER */}
          {/* </CardContent> */}
          <CardFooter className="text-center flex flex-col p-4">
            <CardTitle className="my-2">{doctor.name}</CardTitle>
            <CardDescription>{doctor.phone}</CardDescription>
          </CardFooter>
        </Card>
        ))
      ) : (
        <div className="text-xl font-bold">Data not available!!!</div>
      )}
    </>
  );
};