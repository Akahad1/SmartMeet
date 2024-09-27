import { TQureyParam } from "../../../types/gobal";
import { baseApi } from "../baseApi";

const userManagmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // createRoom: builder.mutation({
    //   query: (data) => {
    //     return {
    //       url: "/rooms",
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    //   invalidatesTags: ["room"],
    // }),

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
      //   providesTags: [""],
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
} = userManagmentApi;
