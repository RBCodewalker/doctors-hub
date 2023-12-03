import Image from "next/image";

import { Doctors } from "@/components/doctors";
import { Doctor } from "@/entities/doctor";

const Page = async () => {
  const initPage = 1; // Initial page to load from API

  const logoWidth = 100;
  const logoHeight = 100;

  return (
    <>
      {/* Header */}
      <header className="fixed z-50 flex justify-center items-center bg-white px-10 py-2 w-full shadow-md">
        <Image
          alt="doctors hub logo"
          src="/logo.svg"
          width={logoWidth}
          height={logoHeight}
        />
      </header>

      {/* Content */}
      <div className="container mx-auto min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-40 pb-10">
          <Doctors doctors={[] as Doctor[]} page={initPage} />
        </div>
      </div>
    </>
  );
};

export default Page;
