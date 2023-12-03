"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Doctor } from "@/entities/doctor";
import { useState } from "react";
import { addDoctor } from "@/interfaces/doctor-add";
import { Check } from "lucide-react";
import { useToast } from "./ui/use-toast";

export function AddDoctor() {
  // An instance of an empty Doctor
  const emptyDoctor: Doctor = {
    id: NaN,
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
  };

  const [doctor, setDoctor] = useState<Doctor>(emptyDoctor);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const { toast } = useToast();

  // Update only changed value
  const handleChange = (event: any) => {
    setDoctor((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();

      const res = await addDoctor(doctor);

      if (res) {
        setPopoverOpenOff();

        toast({
          description: "Added doctor successfully",
        });
      }
    } catch (e: any) {
      toast({
        title: "Error adding doctor",
        description: "Could not add doctor. Error message:" + e,
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
      <Popover open={isPopoverOpen}>
        <PopoverTrigger
          onClick={setPopoverOpenOn}
          className="px-6 py-2 bg-[#22b3a7] text-primary-foreground hover:opacity-90 rounded-md text-sm font-medium transition-colors"
        >
          Add Doctor
        </PopoverTrigger>

        <PopoverContent
          onPointerDownOutside={setPopoverOpenOff}
          onEscapeKeyDown={setPopoverOpenOff}
          className="z-30"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            {/* 
                Iterating through each key except for last two elements 
                (createdAt and updatedAt) and creating a label and input 
                field for each of the keys 
              */}
            {Object.keys(doctor).map((key, i, arr) => {
              // Check if value is NaN
              let value = doctor[key as keyof Doctor];
              let type = "text";
              let pattern = ".*";

              // Logic for data validation
              if (key === "email") {
                type = "email";
              } else if (key === "id" || key === "zip") {
                pattern = "^[0-9]\\d*$";
              }
              if (Number.isNaN(value)) {
                value = "";
              }

              if (i + 1 <= arr.length) {
                return (
                  <label key={i}>
                    <div className="capitalize font-bold">{key}</div>
                    <input
                      id={key}
                      value={value}
                      onChange={handleChange}
                      type={type}
                      className="border border-gray-400 rounded-md p-2"
                      required
                      pattern={pattern}
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
    </>
  );
}
