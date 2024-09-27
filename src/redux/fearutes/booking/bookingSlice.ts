import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TSlote } from "../../../types/gobal";

// Define the Room interface
interface Room {
  name: string;
  pricePerSlot: number;
}

// Define the BookingObject interface
interface BookingObject {
  id: string; // Assuming _id is a string
  roomName: string;
  date: string; // You might want to use Date type if you're handling dates
  startTime: string; // Consider using Date type for better handling of time
  endTime: string; // Consider using Date type for better handling of time
  pricePerSlot: number;
}

// Define the UserInfo interface
interface UserInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
}

// Define the BookingInformation interface
export interface TBook {
  slot: BookingObject;
  userinfo: UserInfo;
}

type TBookingInformation = {
  bookingInformation: TBook | null;
};
const initialState: TBookingInformation = {
  bookingInformation: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addbooking: (state, action) => {
      const { bookingInformation } = action.payload;
      console.log("internal", bookingInformation);
      state.bookingInformation = bookingInformation;
    },
  },
});
export const { addbooking } = bookingSlice.actions;
export default bookingSlice.reducer;

export const useCurrentBooking = (state: RootState) =>
  state.booking.bookingInformation;
