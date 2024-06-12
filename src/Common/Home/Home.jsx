import React, { useEffect, useState } from "react";
import LikeOrderSearch from "../Components/LikeOrderSearch";
import BannerCard from "../Components/BannerCard";
import ctList from "../../API/category.js";
import ExploreMenu from "../Components/ExploreMenu.jsx";
import MenuList from "../Components/ExploreMenu/MenuList.jsx";
// import cartItemsJS from "../../API/cartItemsJS.js";

export default function Home() {
  const [apiMenuData, setAPIMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [queryCount, setQueryCount] = useState(9);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cartItem, setCartItem] = useState([]);

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
    if (apiMenuData && apiMenuData.length > queryCount) {
      setLoading(false);
    }
    // console.log(cartItem);
  }, [apiMenuData]);

  function handleSearchValue(value) {
    setSearch(value);
  }

  // Filtered Data here only
  const filteredMenuData = apiMenuData
    ?.filter((catFilter) => {
      if (category == "All") {
        return catFilter;
      } else {
        return catFilter.strCategory.includes(category);
      }
    })
    ?.filter((item) => {
      if (search.toLowerCase() == "") {
        return item;
      } else {
        return item.strMeal.toLowerCase().includes(search.toLowerCase());
      }
    });

  return (
    <>
      {/* FRONT Page RED Banner */}
      <BannerCard />

      {/* SEARCH SECTION */}
      <div id="mainMenu" className="px-4 mt-8 text-[3vw] font-extrabold">
        What would you like to order?
        <LikeOrderSearch onValueChange={handleSearchValue} />
      </div>

      {/* HR */}
      <hr className="border border-solid border-gray-300" />

      {/* CATEGORY SECTION */}
      <ExploreMenu
        ctList={ctList}
        category={category}
        setCategory={setCategory}
      />

      {/* HR */}
      <hr className="border border-solid border-gray-300" />

      {/* MENU SECTION */}
      <div className="mainMenu bg-[gainsboro] rounded-lg p-4 my-4">
        <div className=" text-4xl font-extrabold mb-4">Popular Foods</div>

        {/* MENU LIST */}
        <MenuList
          filteredMenuData={filteredMenuData}
          loading={loading}
          queryCount={queryCount}
          setQueryCount={setQueryCount}
          cartItem={cartItem}
          setCartItem={setCartItem}
        />
      </div>
    </>
  );
}

//
