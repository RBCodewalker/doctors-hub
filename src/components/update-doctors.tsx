import { Doctor } from "@/entities/doctor";
import { Button } from "./ui/button";
import { updateDoctor } from "@/interfaces/doctor_update";
import { useState } from "react";

export function UpdateDoctor({ doctor }: { doctor: Doctor }) {
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);
  const [doctorUpdate, setDoctorUpdate] = useState<Doctor>(doctor);

  const handleUpdate = (e: any) => {
    e.preventDefault();
    setIsUpdateClicked(true);
  };

  const handleChange = (e: any) => {
    setDoctorUpdate((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateDoctor(doctorUpdate);
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    setIsUpdateClicked(false);
  };

  return (
    <>
      {isUpdateClicked ? (
        <form>
          <label>
            id
            <input id="id" readOnly value={doctorUpdate?.id} />
          </label>

          <label>
            name
            <input
              id="name"
              value={doctorUpdate?.name}
              onChange={handleChange}
            />
          </label>

          <label>
            street
            <input
              id="street"
              value={doctorUpdate?.street}
              onChange={handleChange}
            />
          </label>

          <label>
            city
            <input
              id="city"
              value={doctorUpdate?.state}
              onChange={handleChange}
            />
          </label>

          <label>
            state
            <input
              id="state"
              value={doctorUpdate?.state}
              onChange={handleChange}
            />
          </label>

          <label>
            zip
            <input id="zip" value={doctorUpdate?.zip} onChange={handleChange} />
          </label>

          <label>
            phone
            <input
              id="phone"
              value={doctorUpdate?.phone}
              onChange={handleChange}
            />
          </label>

          <label>
            email
            <input
              id="email"
              value={doctorUpdate?.email}
              onChange={handleChange}
            />
          </label>
          <Button type="submit" onClick={handleSubmit}>
            {" "}
            Submit{" "}
          </Button>
          <Button onClick={handleCancel}> Cancel </Button>
        </form>
      ) : (
        <Button onClick={handleUpdate}> Update </Button>
      )}{" "}
    </>
  );
}
