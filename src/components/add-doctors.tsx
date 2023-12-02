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
    id: 0,
    name: "",
    street: "",
    zip: "",
    city: "",
    phone: "",
    email: "",
    createdAt: "",
    updatedAt: "",
    state: "",
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
            <h2>id</h2>
            <input id="id" value={doctor?.id} onChange={handleChange} />
          </label>

          <label>
            <h2>name</h2>
            <input id="name" value={doctor?.name} onChange={handleChange} />
          </label>

          <label>
            <h2>street</h2>
            <input id="street" value={doctor?.street} onChange={handleChange} />
          </label>

          <label>
            <h2>city</h2>
            <input id="city" value={doctor?.city} onChange={handleChange} />
          </label>

          <label>
            <h2>state</h2>
            <input id="state" value={doctor?.state} onChange={handleChange} />
          </label>

          <label>
            <h2>zip</h2>
            <input id="zip" value={doctor?.zip} onChange={handleChange} />
          </label>

          <label>
            <h2>phone</h2>
            <input id="phone" value={doctor?.phone} onChange={handleChange} />
          </label>

          <label>
            <h2>email</h2>
            <input id="email" value={doctor?.email} onChange={handleChange} />
          </label>
          <Button type="submit"> Submit </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
