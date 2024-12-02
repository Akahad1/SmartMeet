import Loader from "../../component/Loader/Loader";
import { useGetMyBookingQuery } from "../../redux/fearutes/userManagmentApi/UsermanagmentApi";
import { TBooking } from "../../types/gobal";

const MyBooking = () => {
  const { data: bookingData, isLoading } = useGetMyBookingQuery(undefined);

  if (isLoading) {
    return <Loader></Loader>;
  }
  console.log(bookingData);
  return (
    <div className="min-h-screen">
      <h1 className="text-xl mt-10 mb-6">Hello, MyBooking!</h1>

      <div>
        {bookingData?.data?.length === 0 ? (
          <p className="text-center lg:text-xl dark:text-white ">
            You have no slots to booking !!
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-base-300 dark:text-white dark:bg-slate-600">
                <tr>
                  <th>Room Name</th>
                  <th>Date</th>

                  <th>Status</th>
                  <th>Email</th>
                </tr>
              </thead>
              {bookingData?.data?.map((item: TBooking) => (
                <tbody key={item._id}>
                  {/* row 1 */}
                  <tr className="bg-base-200 dark:text-white dark:bg-slate-800">
                    <td className="w-60">{item?.room?.name}</td>
                    <td>{item.date}</td>
                    <td>{item.isConfirmed}</td>
                    <td>{item.user.email}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
