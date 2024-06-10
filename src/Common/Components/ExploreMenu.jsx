import React, { useState } from "react";
import beefMenu from "../../assets/beefMenu.jpg";
import breakfastMenu from "../../assets/breakfastMenu.jpg";
import chickenMenu from "../../assets/chickenMenu.jpg";
import dessertMenu from "../../assets/dessertMenu.jpg";
import goatMenu from "../../assets/goatMenu.jpg";
import lambMenu from "../../assets/lambMenu.jpg";
import miscellaneousMenu from "../../assets/miscellaneousMenu.jpg";
import pastaMenu from "../../assets/pastaMenu.jpg";
import porkMenu from "../../assets/porkMenu.jpg";
import seafoodMenu from "../../assets/seafoodMenu.jpg";
import sideMenu from "../../assets/sideMenu.jpg";
import starterMenu from "../../assets/starterMenu.jpg";
import veganMenu from "../../assets/veganMenu.jpg";
import vegetarianMenu from "../../assets/vegetarianMenu.jpg";

// Create a mapping object
const images = {
  beefMenu,
  breakfastMenu,
  chickenMenu,
  dessertMenu,
  goatMenu,
  lambMenu,
  miscellaneousMenu,
  pastaMenu,
  porkMenu,
  seafoodMenu,
  sideMenu,
  starterMenu,
  veganMenu,
  vegetarianMenu,
};

export default function ExploreMenu({ ctList, category, setCategory }) {
  console.log("Exploremenu set name : ", category);

  return (
    <>
      {/* CATEGORY SECTION */}
      <div className="categorySection px-4 my-4 flex justify-start items-center overflow-x-scroll scroll-smooth whitespace-nowrap gap-8">
        {ctList.map((el, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === el.menu_name ? "All" : el.menu_name
                )
              }
              className="cursor-pointer categoryCard min-w-28 w-28 h-auto flex flex-col justify-center items-center"
            >
              <div className="w-full mb-2">
                <img
                  className={category === el.menu_name ? "activeCategory" : ""}
                  src={images[el.menu_image]}
                  alt="image_description"
                />
              </div>
              <div className="categoryCardContent text-sm font-bold text-gray-500">
                <span className="capitalize">{el.menu_name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
