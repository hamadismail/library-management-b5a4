import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetBookSummaryQuery } from "@/redux/api/baseApi";
import type { IBorrow } from "@/redux/types";

const BorrowSummary = () => {
  const { data, isLoading } = useGetBookSummaryQuery(undefined);
  if (isLoading) {
    return <h2 className="text-center mt-8">Loading...</h2>;
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Table>
        <TableCaption>Borrowed Book Summary</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Book</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Total Borrowed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isLoading &&
            data.data.map((book: IBorrow, idx: number) => (
              <TableRow
                className={`${idx % 2 ? "bg-blend-color" : "bg-accent"}`}
                key={idx}
              >
                <TableCell>{book.book.title}</TableCell>
                <TableCell>{book.book.isbn}</TableCell>
                <TableCell>{book.totalQuantity}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BorrowSummary;
