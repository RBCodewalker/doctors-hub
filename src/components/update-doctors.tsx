import { useState } from "react";

import { Doctor } from "@/entities/doctor";
import { updateDoctor } from "@/interfaces/doctor-update";

import { Edit } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "./ui/button";

export function UpdateDoctor({
  doctor,
  onUpdateDoctor,
}: {
  doctor: Doctor;
  onUpdateDoctor: Function;
}) {
  const [doctorUpdate, setDoctorUpdate] = useState<Doctor>(doctor);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const { toast } = useToast();

  const handleChange = (e: any) => {
    setDoctorUpdate((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const res = await updateDoctor(doctorUpdate);

      if (res) {
        onUpdateDoctor(res);
      }

      setPopoverOpenOff();

      toast({
        description: "Updated doctor successfully.",
      });
    } catch (e: any) {
      toast({
        title: "Error updating doctor",
        description: "Updated doctor unsuccessfully.",
      });
    }
  };

  const setPopoverOpenOff = () => {
    setIsPopoverOpen(false);
  };

  const setPopoverOpenOn = () => {
    setIsPopoverOpen(true);
  };

  return (
    <>
      {
        <Popover open={isPopoverOpen}>
          <PopoverTrigger
            onClick={setPopoverOpenOn}
            className="flex p-2 rounded-xl hover:rounded-3xl hover:bg-green-600 transition-all duration-300 text-white"
          >
            <Edit className="text-green-500 hover:text-white" />
          </PopoverTrigger>
          <PopoverContent
            onPointerDownOutside={setPopoverOpenOff}
            onEscapeKeyDown={setPopoverOpenOff}
            className="z-30"
            align="start"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              {/* 
                  Iterating through each key except for last two elements 
                  (createdAt and updatedAt) and creating a label and input 
                  field for each of the keys 
                */}
              {Object.keys(doctorUpdate).map((key, i, arr) => {
                // Check if value is NaN
                let value = doctorUpdate[key as keyof Doctor];
                let isReadOnly = false;
                let type = "text";

                if (key === "email") {
                  type = "email";
                } else if (key === "id") {
                  isReadOnly = true;
                }

                if (Number.isNaN(value)) {
                  value = "";
                }

                if (i + 2 < arr.length) {
                  return (
                    <label key={i}>
                      <div className="capitalize font-bold">{key}</div>
                      <input
                        id={key}
                        readOnly={isReadOnly}
                        value={value}
                        onChange={handleChange}
                        type={type}
                        className="border border-gray-400 rounded-md p-2"
                      />
                    </label>
                  );
                }
              })}

              <Button
                type="submit"
                className="self-center bg-green-500 text-white hover:bg-green-400"
              >
                <Check />
              </Button>
            </form>
          </PopoverContent>
        </Popover>
      }
    </>
  );
}
