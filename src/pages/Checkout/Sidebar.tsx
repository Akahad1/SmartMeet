import React, { useState } from "react";
import { TBook } from "../../redux/fearutes/booking/bookingSlice";
import { useAppSelector } from "../../redux/hook";
import { useCurrentId } from "../../redux/fearutes/Rooms/roomSlice";

const BookingSummary: React.FC<{ booking: TBook | null }> = ({ booking }) => {
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const id = useAppSelector(useCurrentId);

  const handlePaymentSelection = (method: string) => {
    setPaymentMethod(method);
  };

  const handleConfirmBooking = () => {
    setShowModal(true);

    const bookingData = {
      date: booking?.slot.date.split("T")[0] as string,
      slots: [booking?.slot?.id],
      room: id,
      user: booking?.userinfo.userid,
    };
    console.log("bookingData", bookingData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
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
          className={`border rounded-lg py-2 px-4 mr-2 ${
            paymentMethod === "Credit Card"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Credit Card
        </button>
        <button
          onClick={() => handlePaymentSelection("PayPal")}
          className={`border rounded-lg py-2 px-4 ${
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
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
