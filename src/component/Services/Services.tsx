const ServiceAdvertisement = () => {
  return (
    <div>
      <div className="lg:ml-0 md:ml-16 ml-10 lg:mt-10 md:mt-10 mt-5 pb-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
        <div className="card bg-base-300 dark:bg-slate-800 dark:text-white w-72 shadow-xl lg:mb-0 md:mb-9 mb-8">
          <div className="card-body">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="lg:size-16 size-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <p className="font-semibold  text-2xl">Real-Time Availability</p>
            <p></p>
          </div>
        </div>
        {/* 2 */}
        <div className="card bg-base-300 dark:bg-slate-800 dark:text-white w-72 lg:ml-8 shadow-xl lg:mb-0 md:mb-9 mb-8">
          <div className="card-body">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="lg:size-16 size-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>

            <p className="font-semibold  text-2xl">
              Flexible <br></br>Scheduling
            </p>
            <p></p>
          </div>
        </div>
        {/* 3 */}
        <div className="card bg-base-300 dark:bg-slate-800 dark:text-white w-72 lg:ml-10 shadow-xl lg:mb-0 md:mb-9 mb-8">
          <div className="card-body">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="lg:size-16 size-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>

            <p className="font-semibold  text-2xl">
              Instant Booking Confirmation
            </p>
            <p></p>
          </div>
        </div>
        {/* 4 */}
        <div className="card bg-base-300 w-72 dark:bg-slate-800 dark:text-white  lg:ml-10 shadow-xl lg:mb-0 md:mb-9 mb-8">
          <div className="card-body">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="lg:size-16 size-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>

            <p className="font-semibold  text-2xl">24/7 Support</p>
            <p>Ready for you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAdvertisement;
