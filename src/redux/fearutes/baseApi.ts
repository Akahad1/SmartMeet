import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TQureyParam } from "../../types/gobal";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["rooms", "sloat"],
  endpoints: (builder) => ({
    getAllRooms: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQureyParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/rooms",
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});

export const { useGetAllRoomsQuery } = baseApi;
