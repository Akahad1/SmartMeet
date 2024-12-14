import { TQureyParam } from "../../../types/gobal";
import { baseApi } from "../baseApi";

const userManagmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (data) => {
        return {
          url: "/bookings",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["booking"],
    }),
    updateProfile: builder.mutation({
      query: (data) => {
        console.log("inner", data);
        return {
          url: `/user/${data.id}`,
          method: "PUT",
          body: data.data,
        };
      },
      invalidatesTags: ["user"],
    }),

    getRooms: builder.query({
      query: (id) => {
        return {
          url: `/rooms/${id}`,
          method: "GET",
        };
      },
      providesTags: ["room"],
    }),
    getUser: builder.query({
      query: (id) => {
        return {
          url: `/user/${id}`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    getQuerySlote: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQureyParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/slots/availability",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["slot"],
    }),
    getMyBooking: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQureyParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/my-bookings",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["booking"],
    }),
  }),
});

export const {
  //   useCreateRoomMutation,
  useGetRoomsQuery,
  useGetUserQuery,
  useGetQuerySloteQuery,
  useGetMyBookingQuery,
  useCreateBookingMutation,
  useUpdateProfileMutation,
} = userManagmentApi;
