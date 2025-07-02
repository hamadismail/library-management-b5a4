import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/redux/types";
import BookColumn from "./BookColumn";

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
              <BookColumn key={idx} book={book} idx={idx}/>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllBook;
