import { useCurrentBooking } from "../../redux/fearutes/booking/bookingSlice";
import { useAppSelector } from "../../redux/hook";
import BookingSummary from "./Sidebar";

const Checkout = () => {
  const bookingInformation = useAppSelector(useCurrentBooking);
  console.log(bookingInformation);
  return (
    <div>
      <BookingSummary booking={bookingInformation}></BookingSummary>
    </div>
  );
};

export default Checkout;
