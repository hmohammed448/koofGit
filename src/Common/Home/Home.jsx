import React, { useEffect, useState } from "react";
import LikeOrderSearch from "../Components/LikeOrderSearch";
import BannerCard from "../Components/BannerCard";
import FoodCard from "../Components/FoodCard";
// import Jelly from "../../API/jelly.js";

export default function Home() {
  const [menuData, setMenuData] = useState([]);
  let [loading, setLoading] = useState(true);

  // FetchedData Function Initialized
  const fetchMenuData = async () => {
    try {
      const requests = Array.from({ length: 9 }, () =>
        fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(
          (response) => response.json()
        )
      );
      const results = await Promise.all(requests);
      const meal = results.map((el) => el.meals[0]);
      let finalMeal = [];
      let st = [];
      meal.filter((el, idx) => {
        if (st.indexOf(el.idMeal) == -1) {
          st.push(el.idMeal);
          finalMeal.push(el);
        }
      });
      setMenuData(meal);
      setLoading(false);
    } catch (error) {
      console.log("New Error : ", error);
      setLoading(false);
    }
  };

  // fetching Menu Data
  useEffect(() => {
    fetchMenuData();
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
          menuData.map((el) => (
            <FoodCard
              data={{
                key: el.idMeal,
                mealId: el.idMeal,
                mealArea: el.strArea,
                mealName: el.strMeal,
                mealImage: el.strMealThumb,
                mealTags: el.strTags,
                mealVideo: el.strYoutube,
              }}
            />
          ))
        )}
      </div>
    </>
  );
}
