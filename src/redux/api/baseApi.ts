import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-server-kohl.vercel.app/api",
  }),
  tagTypes: ["book", "borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["book"],
    }),
    getBookDetails: builder.query({
      query: (id: string) => `/books/${id}`,
    }),
    createBooks: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["book"],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    deleteBooks: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
    getBookSummary: builder.query({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),
    borrowBooks: builder.mutation({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["borrow"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookDetailsQuery,
  useCreateBooksMutation,
  useUpdateBookMutation,
  useDeleteBooksMutation,
  useGetBookSummaryQuery,
  useBorrowBooksMutation,
} = baseApi;
