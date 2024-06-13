import React, { useEffect, useState } from "react";
import CartView from "../Cart/CartView";
import CheckOutCart from "../../assets/checkout.gif";

export default function Cart() {
  const [localData, setLocalData] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const [totalBillQty, setTotalBillQty] = useState(0);
  const [tableFoot, setTableFoot] = useState(false);

  // getting Data from locaStorage
  function getLocalStorage() {
    const getLocalCartInfo = JSON.parse(localStorage.getItem("localCart"));
    if (!getLocalCartInfo) {
      alert("Cart is Empty, add your 😋 food!");
      return;
    } else {
      setLocalData(getLocalCartInfo);
      return;
    }
  }

  // load on first render
  useEffect(() => {
    getLocalStorage();
  }, []);

  // calculateBill
  function calculateBill() {
    let totalQty = localData
      .map((el) => el.qty)
      .reduce((accum, curr) => (accum += Number(curr)), 0);
    let total = localData
      .map((el) => el.price * el.qty)
      .reduce((accum, curr) => Number(accum) + Number(curr), 0);

    console.log(totalQty);
    setTotalBill(total);
    setTotalBillQty(totalQty);
  }

  // localData updates render below
  useEffect(() => {
    setTimeout(() => {
      if (localData.length > 0) {
        setTableFoot(true);
      } else {
        setTableFoot(false);
      }
      calculateBill();
    }, 0);
  }, [localData]);

  // Set updated data (Items removed)
  function setItemRemoved(value) {
    let filteredData = localData.filter((el) => el.id !== value && el);
    setLocalData(filteredData);
    localStorage.setItem("localCart", JSON.stringify(filteredData));
  }
  return (
    <>
      <div
        className="relative overflow-x-auto shadow-2xl sm:rounded-lg my-8 mx-auto w-3/4"
        id="catItemTable"
        data-aos="zoom-in"
      >
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          {/* TABLE HEAD */}
          <thead className="text-xs text-white uppercase bg-orange-50 dark:bg-orange-500 dark:text-white-400">
            <tr>
              <th scope="col" className="text-left px-10 py-3">
                Image
              </th>
              <th scope="col" className="text-left px-6 py-3">
                Product
              </th>
              <th scope="col" className="text-center px-2 py-3">
                Qty
              </th>
              <th scope="col" className="text-center px-6 py-3">
                Price
              </th>
              <th scope="col" className="text-center px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {/* TABLE BODY */}
          <tbody>
            {localData?.map((item, index) => (
              <CartView
                data={{
                  key: index,
                  mealId: item.id,
                  mealQty: item.qty,
                  mealNaam: item.name,
                  mealPrc: item.price,
                  mealImg: item.image_url,
                }}
                setItemRemoved={setItemRemoved}
              />
            ))}
          </tbody>
          {/* TABLE FOOTER */}
          {tableFoot && (
            <tfoot>
              <tr
                // key={key}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                style={{ backgroundColor: "rgb(249 115 22)" }}
              >
                <td
                  className="flex justify-center px-4 py-3"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <img
                    className="w-12 h-12 rounded-full"
                    src={CheckOutCart}
                    alt=""
                  />
                </td>
                {/* Name */}
                <td className="px-6 py-3 font-black text-white items-center">
                  <span>TOTAL Bill :</span>
                </td>
                {/* Total Quantity */}
                <td className="px-2 py-3">
                  <p className="w-20 mx-auto text-center text-white font-black border border-white text-sm bg-gray-700 rounded-md px-2 py-1">
                    {totalBillQty}
                  </p>
                </td>
                {/* PRICE */}
                <td className="px-6 py-3">
                  <p className="w-20 mx-auto text-center text-white font-black border border-white text-sm bg-gray-700 rounded-md px-2 py-1">
                    ₹ {totalBill}
                  </p>
                </td>
                <td className="py-3 px-2 text-center"></td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </>
  );
}
