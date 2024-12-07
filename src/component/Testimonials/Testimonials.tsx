const testimonials = [
  {
    name: "Sarah Williams",
    feedback:
      "Booking meeting rooms has never been easier. Smart Meet is a lifesaver!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlgt-vJV3knuL3V-7ouIoAet_VkXPag6i1YQ&usqp=CAU",
  },
  {
    name: "Michael Brown",
    feedback:
      "Efficient and reliable service. Smart Meet streamlines the whole process!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhpR47uioH7CIHEzPmi_J6NfMyIiEFnSrEw&usqp=CAU",
  },
  {
    name: "Lisa Adams",
    feedback: "Great for managing room bookings as an admin. Highly recommend!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxzVyc43dv5VWrphP0R9x9ha3PhhhSMS_wg&usqp=CAU",
  },
  {
    name: "James Carter",
    feedback:
      "The filtering and sorting features are top-notch. Perfect for businesses!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ697qrwKnPnwZv2R9PC3xHIXmOMGvvHdQZAA&usqp=CAU",
  },
];

const TestimonialsMarquee = () => {
  return (
    <div className="overflow-hidden bg-base-300  dark:bg-slate-900 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        What Our Users Say
      </h2>
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-80 flex-shrink-0 mx-4 dark:bg-slate-800 dark:text-white bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border border-gray-200"
              />
              <p className="text-gray-600 mb-4 italic dark:text-white truncate overflow-hidden">
                "{testimonial.feedback}"
              </p>
              <h3 className="font-semibold text-lg dark:text-white text-gray-800">
                {testimonial.name}
              </h3>
            </div>
          ))}
          {/* Duplicate testimonials to create a seamless loop */}
          {testimonials.map((testimonial, index) => (
            <div
              key={`duplicate-${index}`}
              className="w-80 flex-shrink-0 mx-4 bg-white dark:bg-slate-800 dark:text-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border border-gray-200"
              />
              <p className="text-gray-600 dark:text-white mb-4 italic truncate overflow-hidden">
                "{testimonial.feedback}"
              </p>
              <h3 className="font-semibold dark:text-white text-lg text-gray-800">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsMarquee;
