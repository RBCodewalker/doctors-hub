"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Doctor } from "@/entities/doctor";
import { useState } from "react";
import { addDoctor } from "@/interfaces/doctor_add";

export function AddDoctor() {
  const [doctor, setDoctor] = useState<Doctor>({
    id: 1523,
    name: "Do6a78 the Ex5lorer",
    street: "Chi65e71",
    zip: "456751 ",
    city: "O65a7ruck1",
    phone: "+47456559651",
    email: "do6ra575mail.com",
    createdAt: "63/75/2023",
    updatedAt: "63/52/2023",
    state: "6o57ia",
  });

  const handleChange = (event: any) => {
    setDoctor((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    addDoctor(doctor);
  };

  return (
    <Popover>
      <PopoverTrigger>Add</PopoverTrigger>
      <PopoverContent>
        <form onSubmit={handleSubmit}>
          <label>
            id
            <input id="id" value={doctor?.id} onChange={handleChange} />
          </label>

          <label>
            name
            <input id="name" value={doctor?.name} onChange={handleChange} />
          </label>

          <label>
            phone
            <input id="phone" value={doctor?.phone} onChange={handleChange} />
          </label>
          <Button type="submit"> Submit </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
