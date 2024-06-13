import React, { useEffect, useState } from "react";
import beefMenu from "../../assets/beefMenu.jpg";
import breakfastMenu from "../../assets/breakfastMenu.jpg";
import chickenMenu from "../../assets/chickenMenu.jpg";
import dessertMenu from "../../assets/dessertMenu.jpg";
import goatMenu from "../../assets/goatMenu.jpg";
import lambMenu from "../../assets/lambMenu.jpg";
import miscellaneousMenu from "../../assets/miscellaneousMenu.jpg";
import pastaMenu from "../../assets/pastaMenu.jpg";
import porkMenu from "../../assets/porkMenu.jpg";
import seafoodMenu from "../../assets/seafoodMenu.jpg";
import sideMenu from "../../assets/sideMenu.jpg";
import starterMenu from "../../assets/starterMenu.jpg";
import veganMenu from "../../assets/veganMenu.jpg";
import vegetarianMenu from "../../assets/vegetarianMenu.jpg";
import ctList from "../../API/category.js";
import Button from "../Components/Button.jsx";

export default function Reviews() {
  const [apiMenuData, setAPIMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  const images = {
    beefMenu,
    breakfastMenu,
    chickenMenu,
    dessertMenu,
    goatMenu,
    lambMenu,
    miscellaneousMenu,
    pastaMenu,
    porkMenu,
    seafoodMenu,
    sideMenu,
    starterMenu,
    veganMenu,
    vegetarianMenu,
  };

  // FetchedData Function Initialized
  const fetchMenuData = async () => {
    try {
      const requests = await fetch(
        `https://api.npoint.io/586fefa33a897bf5cbae`
      );
      const result = await requests.json();
      // set API Fetched Data to state
      setAPIMenuData(result);
      console.log("Home.jsx API Fetched");
    } catch (error) {
      console.error("Home.jsx Error occurred : ", error);
    }
  };

  // run on first render
  useEffect(() => {
    fetchMenuData();
  }, []);

  // useEffect fetching Menu Data
  useEffect(() => {
    if (apiMenuData && apiMenuData.length > 0) {
      setLoading(false);
    }
  }, [apiMenuData]);

  return (
    <center className="bg-orange-200 text-black mt-8 mb-16 py-8">
      {/* Reviews */}
      <div className="flex justify-center items-center flex-row flex-wrap mb-8">
        <div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              color: "rgb(249, 115, 22)",
              width: "50px",
              height: "auto",
            }}
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6.43 9.57L12 15l-1.57-3.43L7 10l3.43-1.57L12 5l1.57 3.43L17 10l-3.43 1.57z"></path>
          </svg>
        </div>
        <div className="m-2">
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Write your review"
            className="p-4 bg-transparent border-none rounded-lg outline-orange-500"
            style={{ borderBottom: "1px solid gray" }}
          ></textarea>
        </div>
        <Button addClass={"bg-orange-500"} btnName={"Submit"} />
      </div>

      {loading ? (
        <center>
          <div className="loader my-24 mx-auto"></div>
        </center>
      ) : (
        <>
          <div>
            <h1 className="font-bold text-xl">Images From Our Customers</h1>
            <div
              className="max-w-[50%] px-4 my-4 flex justify-start items-center overflow-x-scroll scroll-smooth whitespace-nowrap gap-8"
              style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
            >
              {ctList.map((el) => {
                return (
                  <div
                    className="immagine min-w-56 h-52 rounded-lg"
                    style={{ willChange: "transform" }}
                  >
                    <img
                      className="w-52 h-52 rounded-lg"
                      src={images[el.menu_image]}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="m-16">

          </div>
          <figure className="max-w-screen-md px-8">
            <figcaption className="flex items-center mt-6 mb-2 space-x-3 rtl:space-x-reverse">
              <img
                className="w-12 h-12 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                alt="profile picture"
              />
              <div className="citeFonts flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                <cite
                  className="pe-3 text-xl font-bold text-gray-900 dark:text-white"
                  style={{ textShadow: "1px 1px 2px black" }}
                >
                  Bonnie Green
                </cite>
                <cite
                  className="ps-3 text-sm text-gray-500 dark:text-gray-600"
                  style={{ textShadow: "1px 1px 2px red" }}
                >
                  CTO at Flowbite
                </cite>
              </div>
            </figcaption>
            <blockquote>
              <p
                style={{
                  borderLeft: "3px solid lightgray",
                  borderBottom: "1px solid lightgray",
                  paddingBottom: "0.5rem",
                  lineHeight: "1.5",
                }}
                className="pl-2 text-lg font-medium text-left dark:text-gray-700"
              >
                "Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </blockquote>
          </figure>
        </>
      )}
    </center>
  );
}
