import React from "react";
import OrderPrepareVideo from "../../assets/PrepareVideo.mp4";

export default function BannerCard() {
  return (
    <>
      <div className="relative py-4 w-full">
        {/* Modal content */}
        <div className="banner relative flex py-24 justify-center items-center flex-row flex-wrap bg-white rounded-lg shadow dark:bg-red-600">
          <div className="bannerSideLeft w-1/2 p-4 md:p-5 ">
            <h1
              className="mb-8 text-6xl font-bold text-gray-900 dark:text-white"
              style={{ fontFamily: "'Courgette',cursive" }}
            >
              Are You Starving?
            </h1>
            <p className="text-white dark:text-white mb-6">
              Within a few clicks, find meals that are accessible near you...
            </p>

            {/* Modal footer */}
            <div className="flex items-center mt-6 space-x-4 rtl:space-x-reverse">
              <a
                data-modal-hide="progress-modal"
                type="button"
                href="#mainMenu"
                className="text-black bg-white hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-white font-medium text-sm px-5 py-2.5 text-center dark:bg-white dark:hover:bg-orange-500 dark:focus:ring-orange-300"
              >
                View Menu
              </a>
            </div>
          </div>
          <div className="bannerSideRight w-96 flex justify-center items-center videoBox">
            <video className="w-96" autoPlay loop muted>
              <source src={OrderPrepareVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
}
