import React, { useEffect, useState } from "react";
import cartItemsJS from "../../API/cartItemsJS";
import CartView from "../Cart/CartView";

export default function Cart() {
  const [newCartItem, setNewCartItem] = useState([...cartItemsJS], {});

  function handleCartQty(qty, idx) {
    // setNewCartItem([...newCartItem, (newCartItem[idx].mealQty = qty)]);
    console.log((newCartItem[idx].mealQty = Number(qty)));
    console.log(newCartItem);
  }
  useEffect(() => {
    console.log(newCartItem);
  });
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          {/* TABLE HEAD */}
          <thead className="text-xs text-white uppercase bg-orange-50 dark:bg-orange-500 dark:text-white-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {/* TABLE BODY */}
          <tbody>
            {newCartItem.map((item, index) => (
              <CartView
                data={{
                  key: index,
                  mealNaam: item.mealNaam,
                  mealImg: item.mealImg,
                  mealPrc: item.mealPrc,
                  mealQty: item.mealQty,
                }}
                handleCartQty={handleCartQty}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
