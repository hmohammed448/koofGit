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

  return (
    <>
      {loading ? (
        <center>
          <div className="loader my-24 mx-auto"></div>
        </center>
      ) : (
        <ItemDetailedCard data={menuDetails} mealPrice={price} />
      )}
    </>
  );
}
