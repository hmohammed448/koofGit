import React, { useEffect, useState } from "react";
import LikeOrderSearch from "../Components/LikeOrderSearch";
import BannerCard from "../Components/BannerCard";
import FoodCard from "../Components/FoodCard";
import combinedMenu from "../../API/combinedMenu.js";

export default function Home() {
  const [menuData, setMenuData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [queryCount, setQueryCount] = useState(9);

  // FetchedData Function Initialized
  // const fetchMenuData = async () => {
  // try {
  //   const requests = Array.from({ length: 45 }, () =>
  //     fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(
  //       (response) => response.json()
  //     )
  //   );
  //   const results = await Promise.all(requests);
  //   const meal = results?.slice(0, 45).map((el) => el.meals[0]);
  //   let finalMeal = [];
  //   let st = [];
  //   meal.filter((el, idx) => {
  //     if (st.indexOf(el.idMeal) == -1) {
  //       st.push(el.idMeal);
  //       finalMeal.push(el);
  //     }
  //   });
  //   setMenuData(meal);
  //   setLoading(false);
  // } catch (error) {
  //   console.log("New Error : ", error);
  //   setLoading(false);
  // }

  // };

  function viewMore() {
    setQueryCount(queryCount + 9);
  }

  // fetching Menu Data
  useEffect(() => {
    // fetchMenuData();
    if (combinedMenu && combinedMenu.length > queryCount) {
      setLoading(false);
      setMenuData(combinedMenu);
    }
  }, []);

  return (
    <>
      <BannerCard />
      <div className="px-4 mt-8 text-2xl font-extrabold">
        What would you like to order?
      </div>
      <LikeOrderSearch />
      <hr className="border border-solid border-gray-300" />
      <div id="mainMenu" className="px-4 mt-8 text-2xl font-extrabold">
        Popular Foods
      </div>
      <div className="container flex justify-center items-start gap-6 flex-row flex-wrap mb-8">
        {loading ? (
          <div>
            <span className="loader"></span>
          </div>
        ) : (
          menuData?.slice(0, queryCount).map((el) => (
            <FoodCard
              key={el.idMeal}
              data={{
                mealId: el.idMeal,
                mealPrice: el.strPrice,
                mealName: el.strMeal,
                mealImage: el.strMealThumb,
              }}
            />
          ))
        )}

        {/* if Count is 0 and loading not done don't show View More button */}
        {!loading && menuData.length > queryCount && (
          <button
            className="bg-orange-500 text-white px-8 py-4"
            onClick={viewMore}
          >
            View More
          </button>
        )}
      </div>
    </>
  );
}
