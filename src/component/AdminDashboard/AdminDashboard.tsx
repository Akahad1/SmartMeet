import UsersTable from "./UsersTable/UsersTable";
import DashboardCards from "./DashboardCards/DashboardCards";

import { useGetAllUserQuery } from "../../redux/fearutes/adminManagmentApi/adminManagmentApi";
import Loader from "../Loader/Loader";
import BookingsChart from "./BookingsChart/BookingsChart";

const Dashboard = () => {
  const { data: userData, isLoading: userLoading } =
    useGetAllUserQuery(undefined);

  if (userLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="p-4 space-y-8 ">
        <DashboardCards />
        <div className="bg-white p-4 rounded shadow dark:bg-slate-800 dark:text-white ">
          <h2 className="text-xl font-semibold mb-4">Monthly Bookings</h2>
          <BookingsChart />
        </div>
        <div className="bg-white p-4 rounded  dark:bg-slate-800 dark:text-white shadow">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <UsersTable users={userData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
