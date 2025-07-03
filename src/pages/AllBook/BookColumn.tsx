import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { useDeleteBooksMutation } from "@/redux/api/baseApi";
import { Eye, Loader2, Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import UpdateBook from "../UpdateBook/UpdateBook";
import BorrowBook from "../BorrowSummary/BorrowBook";
import { useNavigate } from "react-router";

const BookColumn = ({ book, idx }: any) => {
  const [open, setOpen] = useState(false);
  const [deleteBook, { isLoading }] = useDeleteBooksMutation();
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    deleteBook(id).unwrap();
    setOpen(false);
    toast.success("Book Deleted Successfully!");
  };

  return (
    <TableRow
      className={`${idx % 2 ? "bg-blend-color" : "bg-accent"}`}
      key={book._id}
    >
      <TableCell>{book.title}</TableCell>
      <TableCell>{book.author}</TableCell>
      <TableCell>{book.genre}</TableCell>
      <TableCell>{book.isbn}</TableCell>
      <TableCell>{book.copies}</TableCell>
      <TableCell>
        {book.available ? (
          <span className="text-green-600">Available</span>
        ) : (
          <span className="text-red-600">Not Available</span>
        )}
      </TableCell>
      <TableCell className="flex gap-2 items-center justify-center">
        <Eye onClick={() => navigate(`/books/${book._id}`)} className="text-blue-600 cursor-pointer" />
        <UpdateBook book={book} />
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <Trash className="text-red-600 cursor-pointer" />
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                book and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button onClick={() => handleDelete(book._id)} type="submit">
                {isLoading ? (
                  <Loader2 className="animate-spin w-4 h-4 mr-2" />
                ) : (
                  "Yes"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </TableCell>
      <TableCell className="text-center">
        <BorrowBook book={book} />
      </TableCell>
    </TableRow>
  );
};

export default BookColumn;
