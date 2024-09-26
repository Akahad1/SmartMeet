import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { TMeetingRoom } from "../component/RoomCards/RoomCards";

export type TQureyParam = {
  name: string;
  value: string;
};
export type TError = {
  data: {
    success: boolean;
    message: string;
    stack: string;
  };
  status: number;
};
type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};
export type TResponse<T> = {
  data?: T;

  success: boolean;
  message: string;
};
export type TResponsRedux<T> = TResponse<T> & BaseQueryApi;

export type TSlote = {
  _id: string;
  room: TMeetingRoom;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
};
