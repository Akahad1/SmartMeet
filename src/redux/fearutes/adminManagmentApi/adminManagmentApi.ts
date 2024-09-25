import { baseApi } from "../baseApi";

const adminManagmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRoom: builder.mutation({
      query: (data) => {
        return {
          url: "/rooms",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["room"],
    }),
  }),
});

export const { useCreateRoomMutation } = adminManagmentApi;
