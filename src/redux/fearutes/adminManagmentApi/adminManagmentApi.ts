import { TQureyParam } from "../../../types/gobal";
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
    updateRooms: builder.mutation({
      query: (data) => {
        return {
          url: `/rooms/${data.id}`,
          method: "PUT",
          body: data.body,
        };
      },
      invalidatesTags: ["room"],
    }),
    createSlote: builder.mutation({
      query: (data) => {
        return {
          url: "/slots",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["slot"],
    }),
    getAllSlote: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQureyParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/slots",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["slot"],
    }),
    deleteSlote: builder.mutation({
      query: (id) => {
        return {
          url: `/slots/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["slot"],
    }),
    deleteRoom: builder.mutation({
      query: (id) => {
        return {
          url: `/rooms/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["room"],
    }),
    UpdateSlote: builder.mutation({
      query: (data) => {
        return {
          url: `/slots/${data.id}`,
          method: "PUT",
          body: data.body,
        };
      },
      invalidatesTags: ["slot"],
    }),
    getAllBooking: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQureyParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/bookings",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["booking"],
    }),
    updateBooking: builder.mutation({
      query: (data) => {
        return {
          url: `/bookings/${data.id}`,
          method: "PUT",
          body: data.body,
        };
      },
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useCreateRoomMutation,
  useUpdateRoomsMutation,
  useCreateSloteMutation,
  useGetAllSloteQuery,
  useDeleteSloteMutation,
  useDeleteRoomMutation,
  useUpdateSloteMutation,
  useGetAllBookingQuery,
  useUpdateBookingMutation,
} = adminManagmentApi;
