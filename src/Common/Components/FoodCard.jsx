import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function FoodCard(props) {
  // Object Destructuring
  const { key, mealId, mealPrice, mealName, mealImage } = props.data;

  return (
    <>
      <div
        key={key}
        className="w-full relative max-w-sm bg-white border border-gray-200 rounded-2xl shadow dark:bg-white dark:border-gray-300"
      >
        <NavLink to={`viewItem/${mealId}/${Number(mealPrice)}`}>
          <img
            className="w-full rounded-t-2xl"
            src={mealImage}
            alt="product_image"
          />
        </NavLink>
        <div className="px-5 my-4">
          <div href="#">
            <h5 className="nameEllipses">{mealName}</h5>
          </div>

          {/* Free Delivery - 15-30 mins */}
          <div className="flex justify-start items-center mb-2">
            <div className="freeDelivery text-gray-500 flex justify-start items-center mr-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                color="#fa4a0c"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(250, 74, 12)" }}
              >
                <g id="Delivery_Truck">
                  <g>
                    <path d="M21.47,11.185l-1.03-1.43a2.5,2.5,0,0,0-2.03-1.05H14.03V6.565a2.5,2.5,0,0,0-2.5-2.5H4.56a2.507,2.507,0,0,0-2.5,2.5v9.94a1.5,1.5,0,0,0,1.5,1.5H4.78a2.242,2.242,0,0,0,4.44,0h5.56a2.242,2.242,0,0,0,4.44,0h1.22a1.5,1.5,0,0,0,1.5-1.5v-3.87A2.508,2.508,0,0,0,21.47,11.185ZM7,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,7,18.935Zm6.03-1.93H9.15a2.257,2.257,0,0,0-4.3,0H3.56a.5.5,0,0,1-.5-.5V6.565a1.5,1.5,0,0,1,1.5-1.5h6.97a1.5,1.5,0,0,1,1.5,1.5ZM17,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,17,18.935Zm3.94-2.43a.5.5,0,0,1-.5.5H19.15a2.257,2.257,0,0,0-4.3,0h-.82v-7.3h4.38a1.516,1.516,0,0,1,1.22.63l1.03,1.43a1.527,1.527,0,0,1,.28.87Z"></path>
                    <path d="M18.029,12.205h-2a.5.5,0,0,1,0-1h2a.5.5,0,0,1,0,1Z"></path>
                  </g>
                </g>
              </svg>
              <span className="text-sm font-thin">Free-Delivery</span>
            </div>

            <div className="approxTime text-gray-500 flex justify-start items-center mr-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                color="red"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "red" }}
              >
                <path d="M256 456c-110.3 0-200-89.7-200-200 0-54.8 21.7-105.9 61.2-144 6.4-6.2 16.6-6 22.7.4 6.2 6.4 6 16.6-.4 22.7-33.1 32-51.3 74.9-51.3 120.9 0 92.5 75.3 167.8 167.8 167.8S423.8 348.5 423.8 256c0-87.1-66.7-159-151.8-167.1v62.6c0 8.9-7.2 16.1-16.1 16.1s-16.1-7.2-16.1-16.1V72.1c0-8.9 7.2-16.1 16.1-16.1 110.3 0 200 89.7 200 200S366.3 456 256 456z"></path>
                <path d="M175.9 161.9l99.5 71.5c13.5 9.7 16.7 28.5 7 42s-28.5 16.7-42 7c-2.8-2-5.2-4.4-7-7l-71.5-99.5c-3.2-4.5-2.2-10.8 2.3-14 3.6-2.6 8.3-2.4 11.7 0z"></path>
              </svg>
              <span className="text-sm font-thin">15-30 mins</span>
            </div>
          </div>
          {/*  */}

          <div className="flex justify-start items-start flex-col gap-4">
            <div className=" text-gray-500 text-lg font-bold pr-2.5 py-0.5 ">
              <span className="text-orange-500">Price:</span> $
              {Number(mealPrice)}
              /serving
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span
              className="foodCodeSpan text-xs absolute font-bold text-gray-900 px-2 py-1"
              style={{
                border: "none",
                borderRadius: "0px 5px 5px 0",
                top: "20px",
                backgroundColor: "#ffa500",
                left: "0",
              }}
            >
              Food code : #{mealId}
            </span>
            <a
              href="#"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-0 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
