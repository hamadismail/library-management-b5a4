import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/redux/types";
import { Eye, SquarePen, Trash } from "lucide-react";

const AllBook = () => {
  const { data, isLoading } = useGetBooksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  if (isLoading) {
    return <h2 className="text-center mt-8">Loading...</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Table>
        <TableCaption>A list of book data.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Copies</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead className="text-center">Actions</TableHead>
            <TableHead className="text-center">Make Borrow</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isLoading &&
            data.data.map((book: IBook, idx: number) => (
              <TableRow className={`${idx%2 ? 'bg-blend-color' : 'bg-accent'}`} key={book._id}>
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
                  <Eye className="text-blue-600 cursor-pointer" />
                  <SquarePen className="text-green-600 cursor-pointer" />
                  <Trash className="text-red-600 cursor-pointer" />
                </TableCell>
                <TableCell className="text-center">
                  <Button className="cursor-pointer">Borrow</Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllBook;
