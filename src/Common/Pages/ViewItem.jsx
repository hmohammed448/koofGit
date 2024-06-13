import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailedCard from "../Components/ItemDetailedCard";

export default function ViewItem() {
  const { id, price } = useParams();
  const [menuDetails, setMenuDetails] = useState();
  let [loading, setLoading] = useState(true);

  // fetchData from ID
  const fetchIdData = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      setMenuDetails(data.meals[0]);
      setLoading(false);
    } catch (error) {
      console.log("Error : ", error);
      setLoading(false);
    }
  };

  // Fetch on render
  useEffect(() => {
    fetchIdData();
  }, [id]);

  // New object to push
  const newObj = {
    id: Number(id),
    qty: 1,
    price: Number(price),
    name: menuDetails?.strMeal,
    image_url: menuDetails?.strMealThumb,
  };

  function setToLocalStorage() {
    const getLocalCartInfo = JSON.parse(localStorage.getItem("localCart"));
    // Local does not exist or length is 0
    if (!getLocalCartInfo || getLocalCartInfo.length === 0) {
      localStorage.setItem("localCart", JSON.stringify([newObj]));
      alert("First item added to Cart!");
      return; // Get out first item added and localStorage created
    }

    const itemIndex = getLocalCartInfo.findIndex((el) => el.id === newObj.id);

    if (itemIndex !== -1) {
      getLocalCartInfo[itemIndex].qty += 1;
      localStorage.setItem("localCart", JSON.stringify(getLocalCartInfo));
      alert(`Item quantity updated: ${getLocalCartInfo[itemIndex].qty}`);
    } else {
      const newItemtoCart = [...getLocalCartInfo, newObj];
      localStorage.setItem("localCart", JSON.stringify(newItemtoCart));
      alert("Item added to Cart!");
    }
  }

  return (
    <>
      {loading ? (
        <center>
          <div className="loader my-24 mx-auto"></div>
        </center>
      ) : (
        <ItemDetailedCard
          data={menuDetails}
          mealPrice={price}
          handleAddingtoCart={setToLocalStorage}
        />
      )}
    </>
  );
}
