import React from "react";

const Story: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center lg:flex">
        <div>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className=" text-gray-700 mb-6">
            Our Meeting Room Booking System was created to solve the challenges
            we faced in co-working spaces, from double bookings to scheduling
            confusion. Through collaboration with space managers and users, we
            designed an intuitive platform that simplifies reservations,
            enhances communication, and ensures real-time availability. Evolving
            from a simple booking tool to a comprehensive solution, we’re proud
            to support co-working spaces in fostering productivity, flexibility,
            and community growth.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/pZZzBnN/room-used-official-event.jpg"
            alt="Our Story Timeline"
            className="w-full md:w-2/3"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
