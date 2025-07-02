import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://library-management-server-kohl.vercel.app/api" }),
  tagTypes: ["task"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/books",
      providesTags: ["task"],
    }),
    createTasks: builder.mutation({
      query: (taskData) => ({
        url: "/tasks",
        method: "POST",
        body: taskData,
      }),
      invalidatesTags: ["task"],
    }),
  }),
});

export const { useGetTasksQuery, useCreateTasksMutation } = baseApi;
