import React, { useState } from "react";
import { TBook } from "../../redux/fearutes/booking/bookingSlice";
import { useAppSelector } from "../../redux/hook";
import { useCurrentId } from "../../redux/fearutes/Rooms/roomSlice";
import { toast } from "sonner";
import { useCreateBookingMutation } from "../../redux/fearutes/userManagmentApi/UsermanagmentApi";

const BookingSummary: React.FC<{ booking: TBook | null }> = ({ booking }) => {
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const id = useAppSelector(useCurrentId);
  const [addbooking] = useCreateBookingMutation();
  const handlePaymentSelection = (method: string) => {
    setPaymentMethod(method);
  };

  const handleConfirmBooking = async () => {
    const tostID = toast.loading("Create Booking...");
    try {
      const bookingData = {
        date: booking?.slot.date.split("T")[0] as string,
        slots: [booking?.slot?.id],
        room: id,
        user: booking?.userinfo.userid,
      };
      console.log(bookingData);

      const res = await addbooking(bookingData);
      if (res.error) {
        toast.error("SomeThing is Rong", { id: tostID });
      } else {
        toast.success("Booking Create succesfuly", { id: tostID });
        setShowModal(true);
      }
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="max-w-md mx-auto border border-gray-500 dark:bg-slate-800 dark:text-white bg-white p-6 rounded-lg shadow-md mt-16 mb-16">
      <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
      <div className="mb-4">
        <p>
          <strong>Room Name:</strong> {booking?.slot?.roomName}
        </p>
        <p>
          <strong>Date:</strong> {booking?.slot?.date}
        </p>
        <p>
          <strong>Time:</strong> {booking?.slot?.startTime}
        </p>
        <p>
          <strong>Cost:</strong> ৳{booking?.slot?.pricePerSlot.toFixed(2)}
        </p>
        <p>
          <strong>User Info:</strong> {booking?.userinfo?.name} (
          {booking?.userinfo?.email})
        </p>
      </div>

      <h3 className="text-lg font-semibold mb-2">Payment Selection Options</h3>
      <div className="mb-4">
        <button
          onClick={() => handlePaymentSelection("Credit Card")}
          className={`border rounded-lg py-2 px-4 mr-2 dark:bg-slate-700 dark:text-white${
            paymentMethod === "Credit Card"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 "
          }`}
        >
          Credit Card
        </button>
        <button
          onClick={() => handlePaymentSelection("PayPal")}
          className={`border rounded-lg py-2 px-4 dark:bg-slate-700 dark:text-white ${
            paymentMethod === "PayPal"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          PayPal
        </button>
      </div>

      <button
        onClick={handleConfirmBooking}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Confirm Booking
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50">
          <div className="bg-white dark:bg-slate-800 dark:text-white  p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Booking Confirmation</h3>
            <p className="lg:text-xl">Thank you for your booking!</p>
            <p>
              <strong>Room Name:</strong> {booking?.slot?.roomName}
            </p>
            <p>
              <strong>Date:</strong> {booking?.slot?.date}
            </p>
            <p>
              <strong>Time:</strong> {booking?.slot?.startTime}
            </p>
            <p>
              <strong>Cost:</strong> ৳{booking?.slot?.pricePerSlot.toFixed(2)}
            </p>
            <p>
              <strong>Payment Method:</strong> {paymentMethod}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSummary;
