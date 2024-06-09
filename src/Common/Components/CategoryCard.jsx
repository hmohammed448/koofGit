import React from "react";
import beefMenu from "../../assets/beefMenu.jpg";
import BreakfastMenu from "../../assets/breakfastMenu.jpg";
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

export default function CategoryCard({ data }) {
  const { name, imageName } = data;
  return (
    <>
      <div className="categoryCard min-w-28 w-28 h-auto flex flex-col justify-center items-center">
        <div className="w-full mb-2">
          <img
            className="rounded-full w-full h-28 shadow-xl"
            src={beefMenu}
            alt="image_description"
          />
        </div>
        <div className="categoryCardContent text-sm font-bold text-gray-500">
          <span className="capitalize">{name}</span>
        </div>
      </div>
    </>
  );
}
