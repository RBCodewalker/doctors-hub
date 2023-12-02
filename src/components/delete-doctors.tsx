import { deleteDoctor } from "@/interfaces/doctor_delete";
import { Button } from "./ui/button";

export function DeleteDoctor({
  id,
  onDelete,
}: {
  id: number;
  onDelete: Function;
}) {
  const handleDelete = async () => {
    const res = await deleteDoctor(id);
    if (res) {
      onDelete();
    }
  };

  return (
    <Button onClick={handleDelete} variant={"destructive"}>
      {" "}
      Delete{" "}
    </Button>
  );
}
