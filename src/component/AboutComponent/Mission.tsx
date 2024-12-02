import React from "react";

const Mission: React.FC = () => {
  return (
    <section className="py-10 bg-white dark:bg-gray-900 dark:text-white ">
      <div className="container mx-auto text-center lg:grid lg:grid-cols-8 ">
        <img
          src="https://i.ibb.co.com/2KJTDDH/5898741.jpg"
          alt="Mission Graphic"
          className="w-full lg:col-span-5 mx-auto animate-pulse"
        />
        <div className="lg:ml-10 lg:col-span-3">
          <h2 className="text-4xl font-bold mb-6 mt-10 lg:mt-40">
            Our Mission
          </h2>
          <p className="   mb-6">
            Our mission is to provide co-working spaces with an efficient and
            user-friendly Meeting Room Booking System that simplifies the
            scheduling process. We aim to enhance productivity by eliminating
            double bookings and streamlining room reservations, allowing users
            to focus on collaboration and growth. By offering a flexible,
            intuitive platform, we empower co-working spaces to deliver seamless
            service and foster a thriving community of professionals and
            innovators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
