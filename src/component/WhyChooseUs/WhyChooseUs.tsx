import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const WhyChooseMe = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      title: "User-Friendly Interface",
      description:
        "Easily navigate and book meeting rooms with intuitive design.",
      icon: "📱",
    },
    {
      title: "Reliability",
      description:
        "Real-time availability updates and dependable booking system.",
      icon: "⏰",
    },
    {
      title: "Flexibility",
      description: "Search, filter, and sort rooms to match your exact needs.",
      icon: "🔍",
    },
    {
      title: "Admin Control",
      description: "Efficiently manage rooms, bookings, and user data.",
      icon: "🛠️",
    },
  ];

  return (
    <section className="bg-base-300 dark:text-white dark:bg-slate-900  py-12">
      <div className="container mx-auto px-6 text-center">
        <h2
          className="text-3xl font-bold text-gray-800 dark:text-white  mb-6"
          data-aos="fade-up"
        >
          Why Choose Smart Meet?
        </h2>
        <p className="text-gray-600 dark:text-white mb-8" data-aos="fade-up">
          Discover the features that make our meeting room booking system the
          best choice.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:text-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="zoom-in"
            >
              <div className="text-4xl mb-4 ">{feature.icon}</div>
              <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
