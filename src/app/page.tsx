import { AddDoctor } from "@/components/add-doctors";
import { Doctors } from "@/components/doctors";
import { Loader } from "@/components/ui/loader";
import { Doctor } from "@/model";

const Page = async () => {
  const initPage = 1;

  return (
    <div className="container mx-auto p-4 min-h-screen max-w-5xl">
      <div className="flex justify-center items-center gap-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Doctors Hub</h1>
        <AddDoctor/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <Doctors doctors={[] as Doctor[]} page={initPage} />
        {/* <LoadDoctors /> */}
      </div>
    </div>
  );
};

export default Page;
