import React from "react";
import FoodCard from "../FoodCard";

export default function MenuList({
  filteredMenuData,
  loading,
  queryCount,
  setQueryCount,
  cartItem,
  setCartItem,
}) {
  return (
    <>
      <div className="w-full">
        <div className="container flex justify-center items-start gap-6 flex-row flex-wrap">
          {loading ? (
            <center>
              <div className="loader my-24 mx-auto"></div>
            </center>
          ) : (
            filteredMenuData?.slice(0, queryCount).map((el, index) => {
              return (
                <>
                  <FoodCard
                    key={index}
                    data={{
                      mealId: el.idMeal,
                      mealPrice: el.strePrice,
                      mealName: el.strMeal,
                      mealImage: el.strMealThumb,
                    }}
                    cartItem={cartItem}
                    setCartItem={setCartItem}
                  />
                </>
              );
            })
          )}
        </div>
        <div className="w-full mt-4 text-center">
          {/* if Count is 0 and loading not done don't show View More button */}
          {!loading && filteredMenuData.length >= queryCount ? (
            <div className="viewMoreBtn font-bold bg-orange-500 text-white px-8 py-4 rounded-md inline-table">
              <button
                onClick={() => {
                  setQueryCount(queryCount + 9);
                }}
              >
                View More
              </button>
            </div>
          ) : (
            <div
              className="bg-gray-400 text-white font-bold text-3xl px-8 py-2 rounded-lg"
              style={{ fontFamily: "'Roboto Mono', monospace" }}
            >
              Enjoy! 😎
            </div>
          )}
        </div>
      </div>
    </>
  );
}
