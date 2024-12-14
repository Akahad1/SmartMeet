import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useGetAllBookingQuery } from "../../../redux/fearutes/adminManagmentApi/adminManagmentApi";
import Loader from "../../Loader/Loader";

// Register Chart.js modules
Chart.register(...registerables);

// Define the type for chart data
interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}

const Dashboard = () => {
  const { data: BookingData, isLoading } = useGetAllBookingQuery(undefined);

  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (BookingData?.data) {
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

      // Initialize a map for each month with 0 bookings
      const monthlyCounts = Array(12).fill(0);

      // Populate the counts based on booking data
      BookingData?.data.forEach((booking: { date: string }) => {
        const date = new Date(booking.date);
        const monthIndex = date.getMonth(); // Get the month index (0-11)
        monthlyCounts[monthIndex] += 1; // Increment the count for the respective month
      });

      // Update chart data state
      setChartData({
        labels: months,
        datasets: [
          {
            label: "Monthly Bookings",
            data: monthlyCounts,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      });
    }
  }, [BookingData]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-4 space-y-8 ">
      <div className="bg-white p-4 rounded shadow dark:bg-slate-800 dark:text-white  ">
        {/* <h2 className="text-xl font-semibold mb-4">Monthly Bookings</h2> */}
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
      </div>
    </div>
  );
};

export default Dashboard;
