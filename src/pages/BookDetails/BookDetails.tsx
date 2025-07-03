import { useGetBookDetailsQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetBookDetailsQuery(id!, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  if (isLoading) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto px-6 py-10 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white mb-6 border-b pb-4">
          📖 {data?.data?.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-zinc-700 dark:text-zinc-200">
          <div>
            <p className="mb-2">
              <span className="font-semibold">Author:</span>{" "}
              {data?.data?.author}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Genre:</span> {data?.data?.genre}
            </p>
            <p className="mb-2">
              <span className="font-semibold">ISBN:</span> {data?.data?.isbn}
            </p>
          </div>

          <div>
            <p className="mb-2">
              <span className="font-semibold">Copies:</span>{" "}
              {data?.data?.copies}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Availability:</span>{" "}
              <span
                className={`inline-block px-2 py-1 text-sm font-medium rounded-full ${
                  data?.data?.available
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {data?.data?.available ? "Available" : "Not Available"}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-zinc-100">
            📚 Description
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {data?.data?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
