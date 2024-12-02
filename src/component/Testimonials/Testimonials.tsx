// src/components/Testimonials.tsx
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-200 dark:bg-slate-800 dark:text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">What Our Customers Say</h2>

        <div className="carousel w-full max-w-4xl mx-auto">
          <div id="slide1" className="carousel-item relative lg:w-1/2 w-full ">
            <div className="text-center p-6 bg-white dark:bg-gray-700 dark:text-white rounded-lg shadow-lg">
              <img
                className="mx-auto rounded-full w-24 h-24 mb-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlgt-vJV3knuL3V-7ouIoAet_VkXPag6i1YQ&usqp=CAU"
                alt="Customer 1"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-sm text-gray-500">CEO, ABC Corp</p>
              <p className="mt-4">
                The booking process was seamless, and the rooms were perfect for
                our team meetings!
              </p>
            </div>
            <a href="#slide3" className="absolute left-3 mt-32 btn btn-circle">
              ❮
            </a>
            <a
              href="#slide2"
              className="absolute right-3 mt-32  btn btn-circle "
            >
              ❯
            </a>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full lg:w-1/2 lg:ml-3"
          >
            <div className="text-center p-6 bg-white dark:bg-gray-700 dark:text-white rounded-lg shadow-lg">
              <img
                className="mx-auto rounded-full w-24 h-24 mb-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhpR47uioH7CIHEzPmi_J6NfMyIiEFnSrEw&usqp=CAU"
                alt="Customer 2"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-sm text-gray-500">Manager, XYZ Ltd</p>
              <p className="mt-4">
                A wonderful experience from booking to using the meeting room!
              </p>
            </div>
            <a href="#slide1" className="absolute left-3 mt-32  btn btn-circle">
              ❮
            </a>
            <a
              href="#slide3"
              className="absolute right-3 mt-32  btn btn-circle"
            >
              ❯
            </a>
          </div>
          {/* 3 */}
          <div
            id="slide3"
            className="carousel-item relative w-full lg:w-1/2 lg:ml-3"
          >
            <div className="text-center p-6 bg-white dark:bg-gray-700 dark:text-white rounded-lg shadow-lg">
              <img
                className="mx-auto rounded-full w-24 h-24 mb-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxzVyc43dv5VWrphP0R9x9ha3PhhhSMS_wg&usqp=CAU"
                alt="Customer 3"
              />
              <h3 className="text-xl font-semibold">Michael Brown</h3>
              <p className="text-sm text-gray-500">Freelancer</p>
              <p className="mt-4">
                Easy to book and the room was fully equipped for my meeting
                needs!
              </p>
            </div>
            <a href="#slide2" className="absolute left-3 mt-32  btn btn-circle">
              ❮
            </a>
            <a
              href="#slide4"
              className="absolute right-3 mt-32  btn btn-circle"
            >
              ❯
            </a>
          </div>
          {/* 4 */}
          <div
            id="slide4"
            className="carousel-item relative w-full lg:w-1/2 lg:ml-3"
          >
            <div className="text-center p-6 bg-white dark:bg-gray-700 dark:text-white rounded-lg shadow-lg">
              <img
                className="mx-auto rounded-full w-24 h-24 mb-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ697qrwKnPnwZv2R9PC3xHIXmOMGvvHdQZAA&usqp=CAU"
                alt="Customer 4"
              />
              <h3 className="text-xl font-semibold"> Mrs Michael Brown</h3>
              <p className="text-sm text-gray-500">Freelancer</p>
              <p className="mt-4">
                Easy to book and the room was fully equipped for my meeting
                needs!
              </p>
            </div>
            <a href="#slide2" className="absolute left-3 mt-32  btn btn-circle">
              ❮
            </a>
            <a
              href="#slide1"
              className="absolute right-3 mt-32  btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
