import React, { useEffect } from "react";
import { FaRegCalendarAlt, FaSearch, FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="py-16" id="how-it-works">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-12 px-6">
          {/* Step 1 - Sign Up */}
          <div
            className="bg-base-300 dark:bg-slate-800 dark:text-white p-8 rounded-3xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-2"
            data-aos="fade-right"
          >
            <div className="flex justify-center mb-6">
              <FaRegCalendarAlt className="h-16 w-16 dark:text-white text-primary transition-all duration-300" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Sign Up</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Create an account to unlock access to all features. Manage your
              bookings and personalize your experience.
            </p>
          </div>

          {/* Step 2 - Explore Rooms */}
          <div
            className="bg-base-300 dark:bg-slate-800 dark:text-white p-8 rounded-3xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-2"
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-6">
              <FaSearch className="h-16 w-16 transition-all duration-300" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Explore Rooms</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Browse and filter rooms by capacity, price, and amenities to find
              the perfect fit for your meeting needs.
            </p>
          </div>

          {/* Step 3 - Book & Confirm */}
          <div
            className="bg-base-300 dark:bg-slate-800 dark:text-white p-8 rounded-3xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-2"
            data-aos="fade-left"
          >
            <div className="flex justify-center mb-6">
              <FaCheckCircle className="h-16 w-16 dark:text-white text-success transition-all duration-300" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Book & Confirm</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Reserve your meeting room in just a few clicks. Get instant
              confirmation and manage your bookings easily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
