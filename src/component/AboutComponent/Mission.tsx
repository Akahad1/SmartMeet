import React from "react";

const Mission: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto text-center lg:flex">
        <img
          src="https://i.ibb.co.com/2KJTDDH/5898741.jpg"
          alt="Mission Graphic"
          className="w-full mx-auto animate-pulse"
        />
        <div className="lg:w-2/3 lg:ml-10">
          <h2 className="text-4xl font-bold mb-6 mt-10 lg:mt-40">
            Our Mission
          </h2>
          <p className="  text-gray-700 mb-6">
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
