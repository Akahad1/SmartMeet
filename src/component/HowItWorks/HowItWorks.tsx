// src/components/HowItWorks.tsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="p-6 bg-gray-200 rounded-lg shadow-lg"
            data-aos="fade-right"
          >
            <img
              src="/icons/room-icon.svg"
              alt="Select Room"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Select a Room</h3>
            <p>Choose from our list of available meeting rooms.</p>
          </div>
          <div
            className="p-6 bg-gray-200 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <img
              src="/icons/calendar-icon.svg"
              alt="Choose Date & Time"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Choose Date & Time</h3>
            <p>Select your preferred date and time for the meeting.</p>
          </div>
          <div
            className="p-6 bg-gray-200 rounded-lg shadow-lg"
            data-aos="fade-left"
          >
            <img
              src="/icons/confirm-icon.svg"
              alt="Confirm Booking"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Confirm Booking</h3>
            <p>
              Review the details and confirm your booking with secure payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
