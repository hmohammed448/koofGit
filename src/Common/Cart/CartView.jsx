import React, { useEffect } from "react";

export default function CartView({ data, setItemRemoved }) {
  const { key, mealId, mealPrc, mealNaam, mealImg } = data;

  return (
    <>
      <tr
        key={key}
        id={mealId}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <td className="flex justify-center px-4 py-2">
          {/* Image */}
          <img
            src={mealImg}
            className="w-16 md:w-32 max-w-full max-h-full rounded-full"
            alt="food_item"
          />
        </td>
        {/* Name */}
        <td className="px-6 py-2 font-semibold text-gray-900 dark:text-white">
          {mealNaam}
        </td>
        <td className="px-2 py-2">
          <p className="w-20 mx-auto text-center border border-orange-500 text-sm rounded-lg block px-2 py-1 dark:bg-gray-700 dark:text-white">
            1
          </p>
        </td>
        {/* PRICE */}
        <td className="px-6 py-2 font-semibold text-gray-900 dark:text-white text-center">
          {mealPrc}
        </td>
        <td className="px-6 py-2 text-center">
          <button
            href="#"
            className="font-medium rounded-full"
            onClick={() => setItemRemoved(mealId)}
          >
            ❌
          </button>
        </td>
      </tr>
    </>
  );
}
