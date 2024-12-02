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
        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-lg mb-10">
          Experience a smooth and secure way to book meeting rooms with ease.
        </p>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          <div
            className="p-6 rounded-lg bg-base-200 dark:bg-gray-700 dark:text-white shadow-lg ml-3"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Seamless Booking Experience
            </h3>
            <p>
              Book meeting rooms with ease using our intuitive platform. No
              hassle, no confusion.
            </p>
          </div>
          <div
            className="p-6 rounded-lg bg-base-200 dark:bg-gray-700 dark:text-white shadow-lg mr-3"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-semibold mb-4">Secure Transactions</h3>
            <p>
              Your payments are safe with our encrypted, secure transaction
              system for a worry-free experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
