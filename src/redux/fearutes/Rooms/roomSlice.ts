import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TAuth = {
  id: string;
};
const initialState: TAuth = {
  id: "",
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    addRoomId: (state, action) => {
      const { id } = action.payload;
      console.log("internal", id);
      state.id = id;
    },
  },
});
export const { addRoomId } = roomSlice.actions;
export default roomSlice.reducer;

export const useCurrentId = (state: RootState) => state.room.id;
