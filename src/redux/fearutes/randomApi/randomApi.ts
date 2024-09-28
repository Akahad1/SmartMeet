import { TQureyParam } from "../../../types/gobal";
import { baseApi } from "../baseApi";

const randomApi = baseApi.injectEndpoints({
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
      providesTags: ["room"],
    }),
    getSpecificRooms: builder.query({
      query: (id) => {
        // const params = new URLSearchParams();
        // if (args) {
        //   args.forEach((item: TQureyParam) => {
        //     params.append(item.name, item.value as string);
        //   });
        // }
        console.log(id);
        return {
          url: `/rooms/${id}`,
          method: "GET",
          // params: params,
        };
      },
      // transformResponse: (response: TResponsRedux<TMeetingRoom>) => {
      //   return {
      //     data: response.data,
      //   };
      // },
    }),
  }),
});

export const { useGetAllRoomsQuery, useGetSpecificRoomsQuery } = randomApi;
