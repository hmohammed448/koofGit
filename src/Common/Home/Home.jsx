import React, { useEffect, useState } from "react";
import LikeOrderSearch from "../Components/LikeOrderSearch";
import BannerCard from "../Components/BannerCard";
import FoodCard from "../Components/FoodCard";
import combinedMenu from "../../API/combinedMenu.js";
import ctList from "../../API/category.js";
import ExploreMenu from "../Components/ExploreMenu.jsx";

export default function Home() {
  const [menuData, setMenuData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [queryCount, setQueryCount] = useState(9);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [hideValue, setHideValue] = useState(0);
  const [oldLeft, setOldLeft] = useState(0);
  const [leftItems, setleftItems] = useState(0);
  const [viewDisplay, setViewDisplay] = useState(true);

  // FetchedData Function Initialized
  /* const fetchMenuData = async () => {
    try {
      const requests = Array.from({ length: 45 }, () =>
        fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(
          (response) => response.json()
        )
      );
      const results = await Promise.all(requests);
      const meal = results?.slice(0, 45).map((el) => el.meals[0]);
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
  }; */

  // View More Function
  function viewMore() {
    setQueryCount(queryCount + 9);
  }

  // useEffect fetching Menu Data
  useEffect(() => {
    if (combinedMenu && combinedMenu.length > queryCount) {
      setLoading(false);
      setMenuData(combinedMenu);
    }
  }, []);

  function handleSearchValue(value) {
    setSearch(value);
  }

  // Filtered Data here only
  const filteredMenuData = menuData
    ?.filter((catFilter) =>
      category == "All" ? catFilter : catFilter.strCategory.includes(category)
    )
    ?.filter((item) => {
      if (search.toLowerCase() == "") {
        return item;
      } else {
        return item.strMeal.toLowerCase().includes(search.toLowerCase());
      }
    });

  // Set Filtered Data Count
  useEffect(() => {
    setleftItems(filteredMenuData.length - queryCount);
  }, [filteredMenuData, queryCount]);

  useEffect(() => {
    if (leftItems <= 0) {
      setViewDisplay(false);
    } else {
      setViewDisplay(true);
    }
  }, [leftItems]);

  return (
    <>
      {/* FRONT Page RED Banner */}
      <BannerCard />

      {/* SEARCH SECTION */}
      <div id="mainMenu" className="px-4 mt-8 text-[3vw] font-extrabold">
        What would you like to order?
        <LikeOrderSearch onValueChange={handleSearchValue} />
      </div>
      <hr className="border border-solid border-gray-300" />

      {/* CATEGORY SECTION */}
      <ExploreMenu
        ctList={ctList}
        category={category}
        setCategory={setCategory}
      />

      <hr className="border border-solid border-gray-300" />

      {/* MENU SECTION */}
      <div className="mainMenu bg-[gainsboro] rounded-lg p-4 my-4">
        <div className=" text-4xl font-extrabold mb-4">Popular Foods</div>

        {/* MENU LIST */}
        <div className="w-full">
          <div className="container flex justify-center items-start gap-6 flex-row flex-wrap">
            {loading ? (
              <center>
                <div className="loader my-24 mx-auto"></div>
              </center>
            ) : (
              filteredMenuData?.slice(0, queryCount).map((el) => {
                return (
                  <>
                    <FoodCard
                      key={el.idMeal}
                      data={{
                        mealId: el.idMeal,
                        mealPrice: el.strPrice,
                        mealName: el.strMeal,
                        mealImage: el.strMealThumb,
                      }}
                    />
                  </>
                );
              })
            )}
          </div>
          <div className="w-full mt-4 text-center">
            {/* if Count is 0 and loading not done don't show View More button */}
            {!loading && viewDisplay && menuData.length > queryCount && (
              <button
                className="bg-orange-500 text-white px-8 py-4"
                onClick={viewMore}
              >
                View More
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
