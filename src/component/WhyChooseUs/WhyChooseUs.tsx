// src/components/WhyChooseUs.tsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 bg-gray-300 dark:bg-slate-800 dark:text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose Smart Meet?</h2>
        <p className="text-lg mb-10">
          Simplify your meeting room booking process with our powerful,
          user-friendly platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div
            className="p-6 rounded-lg bg-base-200 lg:ml-5 dark:bg-gray-700 dark:text-white shadow-lg"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Effortless Room Booking
            </h3>
            <p>
              Reserve meeting rooms in just a few clicks with our intuitive
              interface and real-time availability updates.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="p-6 rounded-lg bg-base-200 dark:bg-gray-700 dark:text-white shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Advanced Search & Filters
            </h3>
            <p>
              Find the perfect room by filtering by capacity, price, and
              amenities, and sorting by cost or availability.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="p-6 rounded-lg bg-base-200 lg:mr-5 dark:bg-gray-700 dark:text-white shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-2xl font-semibold mb-4">Admin Control Panel</h3>
            <p>
              Manage rooms, bookings, and user activity with powerful tools
              designed for administrators.
            </p>
          </div>

          {/* Feature 4 */}
          <div
            className="p-6 lg:ml-5 rounded-lg bg-base-200 dark:bg-gray-700 dark:text-white shadow-lg"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3 className="text-2xl font-semibold mb-4">Secure Payments</h3>
            <p>
              Enjoy peace of mind with encrypted transactions and a reliable
              payment gateway.
            </p>
          </div>

          {/* Feature 5 */}
          <div
            className="p-6 rounded-lg bg-base-200 dark:bg-gray-700 dark:text-white shadow-lg"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <h3 className="text-2xl font-semibold mb-4">Real-Time Updates</h3>
            <p>
              Stay informed with instant notifications about bookings,
              cancellations, and room availability.
            </p>
          </div>

          {/* Feature 6 */}
          <div
            className="p-6 rounded-lg lg:mr-5 bg-base-200 dark:bg-gray-700 dark:text-white shadow-lg"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <h3 className="text-2xl font-semibold mb-4">
              User-Friendly Interface
            </h3>
            <p>
              Navigate seamlessly with a clean design tailored for both users
              and administrators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
