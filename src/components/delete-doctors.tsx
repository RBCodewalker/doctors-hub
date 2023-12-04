import { deleteDoctor } from "@/interfaces/doctor-delete";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "./ui/use-toast";

export function DeleteDoctor({
  id,
  onDeleteDoctor,
}: {
  id: number;
  onDeleteDoctor: Function;
}) {
  const { toast } = useToast();

  const handleDelete = async () => {
    try {
      const res = await deleteDoctor(id);

      if (res) {
        onDeleteDoctor(id);
      }

      toast({
        description: "Deleted doctor successfully",
      });
    } catch (e: any) {
      toast({
        title: "Error deleting doctor!!!",
        description: "Deleting doctor was not successfull",
      });
    }
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="p-2 rounded-xl hover:rounded-3xl hover:bg-red-600 transition-all duration-300">
          <Trash2 className="text-red-500 hover:text-white" />
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>

            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              selected doctor and remove the data from the API.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <AlertDialogAction className="bg-red-500" onClick={handleDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
