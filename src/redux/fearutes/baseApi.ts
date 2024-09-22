import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assinment-3-one.vercel.app/api",
  }),
  tagTypes: ["cart", "poduct"],
  endpoints: (builder) => ({
    getAllRooms: builder.query({
      query: (data) => ({
        url: "/rooms",
        method: "GET",
        data: data,
      }),
    }),
  }),
});

export const { useGetAllRoomsQuery } = baseApi;
