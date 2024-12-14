import UsersTable from "./UsersTable/UsersTable";
import DashboardCards from "./DashboardCards/DashboardCards";

import {
  useGetAllBookingQuery,
  useGetAllUserQuery,
} from "../../redux/fearutes/adminManagmentApi/adminManagmentApi";
import Loader from "../Loader/Loader";
import BookingsChart from "./BookingsChart/BookingsChart";

const Dashboard = () => {
  const { data: userData, isLoading: userLoading } =
    useGetAllUserQuery(undefined);
  const { data: BookingData, isLoading } = useGetAllBookingQuery(undefined);
  if (userLoading) {
    return <Loader></Loader>;
  }
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="p-4 space-y-8">
        <DashboardCards />
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Monthly Bookings</h2>
          <BookingsChart />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <UsersTable users={userData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;