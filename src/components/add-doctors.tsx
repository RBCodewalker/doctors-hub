"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Doctor } from "@/model";
import { useState } from "react";
import { addDoctor } from "@/api/api";

export function AddDoctor() {

  const [doctor, setDoctor] = useState<Doctor>({
    id: 100,
    name: "Doctor",
    street: "Doctor",
    zip: "Doctor",
    city: "Doctor",
    phone: "Doctor",
    email: "Doctor",
    createdAt: "Doctor",
    updatedAt: "Doctor",
    state: "Doctor",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setDoctor( (prev) => ({
      ...prev,
      [name]: value
    }))

  }


  return (
    <Popover>
      <PopoverTrigger>Add</PopoverTrigger>
      <PopoverContent>
        <form action={() => { addDoctor(doctor);}}>
          <label>
            id
            <input value={doctor?.id} onChange={handleChange} />
          </label>

          <label>
            name
            <input value={doctor?.name} onChange={handleChange} />
          </label>

          <label>
            phone
            <input value={doctor?.phone} onChange={handleChange} />
          </label>
          <Button type="submit"> Submit </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
