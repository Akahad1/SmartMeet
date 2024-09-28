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
export type TUser = {
  _id: string; // Mongoose ID is usually represented as a string
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string; // You can use union type if there are fixed roles like 'user' | 'admin'
  address: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TSlot = {
  id: string; // Mongoose ObjectId as string
  room: TMeetingRoom; // Mongoose ObjectId as string
  date: string; // ISO 8601 Date string
  startTime: string; // Format: 'HH:mm'
  endTime: string; // Format: 'HH:mm'
  isBooked: boolean;
};

export type TBooking = {
  _id: string;
  room: TMeetingRoom;
  slots: [TSlot];
  user: TUser;
  date: string;
  totalAmount: number;
  isConfirmed: "confirmed" | "unconfirmed" | "canceled";
  isDeleted: boolean;
};
