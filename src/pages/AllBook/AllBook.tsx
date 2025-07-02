import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetTasksQuery } from "@/redux/api/baseApi";

const AllBook = () => {
  const { data, isLoading, isError } = useGetTasksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  console.log(data);

  if (isLoading) {
    return <h2>Loading...</h2>;
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
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default AllBook;
