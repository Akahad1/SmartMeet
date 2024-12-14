import React, { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Loader from "../Loader/Loader";
import {
  useGetMyBookingQuery,
  useGetUserQuery,
} from "../../redux/fearutes/userManagmentApi/UsermanagmentApi";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useCurrentToken } from "../../redux/fearutes/auth/authSlice";
import { veryfiyToken } from "../../utils/veryfiyToken";

// Register Chart.js modules
Chart.register(...registerables);

const UserDashboard = () => {
  // Fetching user profile and booking data
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();
  let user;
  if (token) {
    user = veryfiyToken(token);
  }

  const { data: userProfile, isLoading: userLoading } = useGetUserQuery(
    user?.user
  );

  const { data: userBookings, isLoading: bookingsLoading } =
    useGetMyBookingQuery(undefined);

  const [chartData, setChartData] = useState<any>(null); // This will hold the chart data

  useEffect(() => {
    if (userBookings?.data) {
      // Predefined array of months
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      // Initialize an array of 0 bookings for each month
      const monthlyBookings = Array(12).fill(0);

      // Loop through bookings and count the number of bookings in each month
      userBookings.data.forEach((booking: { date: string }) => {
        const bookingMonth = new Date(booking.date).getMonth();
        monthlyBookings[bookingMonth] += 1;
      });

      // Set chart data
      setChartData({
        labels: months,
        datasets: [
          {
            label: "Bookings",
            data: monthlyBookings,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      });
    }
  }, [userBookings]);

  if (userLoading || bookingsLoading) {
    return <Loader />;
  }

  return (
    <div className="p-4 space-y-8">
      {/* Profile Section */}
      <div className="bg-white dark:bg-slate-800 dark:text-white p-4 rounded shadow">
        <span className="text-xl font-semibold mr-2">
          Hi {userProfile?.data.name},
        </span>
        here's what's happening with your store today.
      </div>

      {/* Bookings Section */}
      <div className="bg-white p-4 dark:bg-slate-800 dark:text-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">My Bookings</h2>
        <ul>
          {userBookings?.data.map((booking: any, index: number) => (
            <li key={index} className="mb-2">
              <p>Room: {booking.roomName}</p>
              <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Monthly Bookings Chart */}
      <div className="bg-white dark:bg-slate-800 dark:text-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Monthly Bookings</h2>
        {chartData && (
          <Bar
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Month",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Number of Bookings",
                  },
                  beginAtZero: true,
                },
              },
            }}
          />
        )}
      </div>

      {/* Settings Section */}
      <div className="bg-white dark:bg-slate-800 dark:text-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
