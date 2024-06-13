import React from "react";
import paymentImage from "../../assets/paymentImage.svg";
import trustCart from "../../assets/trustCart.svg";
import Button from "./Button";

export default function ItemDetailedCard({
  data,
  mealPrice,
  handleAddingtoCart,
}) {
  return (
    <>
      <div
        id={data?.idMeal}
        className="viewItemCard w-full mt-8 flex justify-between items-start mb-8 bg-white"
      >
        <div className="strImg w-1/2 px-8">
          <img
            src={data?.strMealThumb}
            className="w-full h-auto rounded-md"
            alt="mealThumbnail"
            style={{ cursor: "zoom-in" }}
          />{" "}
        </div>
        <div className="strContent w-1/2 min-w-52 px-8">
          <div className="text-3xl rounded-t-lg bg-gray-200 pl-2 py-4 text-gray-700 font-extrabold">
            {data?.strMeal}
          </div>
          <div className="text-xs px-2 mt-1 text-gray-500 font-thin max-h-60 overflow-y-scroll scroll-smooth">
            {data?.strInstructions}
          </div>
          <div className="inline-flex items-center mt-4 bg-blue-100 px-2.5 py-0.5 rounded dark:bg-blue-200">
            <svg
              className="w-4 h-4 mr-2 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <span className=" text-blue-800 text-xs font-semibold  dark:text-blue-800">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl font-bold text-gray-900">
              ₹{mealPrice}
            </span>
          </div>
          <hr className="border-2 rounded-xl" />
          <div className="flex flex-col py-4">
            <div className="text-lg font-bold text-gray-700">
              {data?.strArea} Food
            </div>
            <div
              className="text-xs font-thin text-gray-800"
              style={{ wordBreak: "break-word" }}
            >
              Tags : {data?.strTags}
            </div>
          </div>
          <hr className="border-2 rounded-xl" />
          <div className="flex items-center justify-between py-4">
            <span className="text-xs font-thin text-gray-800">
              Prime members get an extra discount of{" "}
              <del className="text-lg font-medium">&#2352;</del>60 and FREE
              shipping.
              <br />
              <span className="text-blue-400 underline text-[xx-small]">
                (Terms & conditions apply.)
              </span>
            </span>
          </div>
          <hr className="border-2 rounded-xl" />
          <div className="flex items-center justify-between py-4">
            <button
              className="text-white tracking-widest p-4 bg-red-700 font-bold rounded-lg text-sm text-center dark:bg-red-600 dark:hover:bg-red-700"
              onClick={() => handleAddingtoCart(data.idMeal)}
            >
              ADD TO CART
            </button>
            <Button
              addClass={"bg-orange-500 tracking-widest py-4"}
              btnName={"View Cart"}
            />
          </div>
          <div className="flex items-center justify-between py-4">
            <span className="w-24 text-center font-light text-xs break-words text-gray-400">
              <img src={trustCart} alt="" className="w-10 mx-auto" />
              100% SECURE PAYMENTS
            </span>
            <span className="w-24 text-center font-light text-xs break-words text-gray-400">
              <img
                src="https://images.bewakoof.com/web/original-icon.png"
                alt="certificate"
                className="w-10 mx-auto"
              />
              100% GENUINE PRODUCT
            </span>
          </div>
          <div className="w-full flex items-center justify-between py-4">
            <img src={paymentImage} alt="" className="w-full" />
          </div>
          {/* Youtube DIV */}

          <div className="w-full flex items-center justify-between py-4 flex-col">
            {data?.strYoutube != "" && (
              <div className="text-lg py-4 font-bold text-gray-700">
                Watch how to Make!
              </div>
            )}

            {data?.strYoutube != "" && (
              <iframe
                className="ytFrame w-full h-80 rounded-lg"
                src={`https://www.youtube.com/embed/${data?.strYoutube.slice(
                  32
                )}`}
                title="Breakfast Potato Recipe Share if you Like!!"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
