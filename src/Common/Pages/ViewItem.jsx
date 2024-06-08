import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "../Components/FoodCard";

export default function ViewItem() {
  const { id } = useParams();
  const [menuData, setMenuData] = useState();
  let [loading, setLoading] = useState(true);

  const fetchIdData = async () => {
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data) => setMenuData(data.meals[0]));
      setLoading(false);
    } catch (error) {
      console.log("Error : ", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchIdData();
    console.log(menuData);
  }, [id]);

  //   if (!menuData) return console.log("NO Data Found");

  return (
    <>
      <center>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <FoodCard
            data={{
              mealId: menuData?.idMeal,
              mealArea: menuData?.strArea,
              mealName: menuData?.strMeal,
              mealImage: menuData?.strMealThumb,
              mealTags: menuData?.strTags,
              mealVideo: menuData?.strYoutube,
            }}
          />
        )}
      </center>
    </>
  );
}
