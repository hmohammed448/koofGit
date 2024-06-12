import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../Components/Button";

export default function Navbar2() {
  const [navToggle, setNavToggle] = useState(false);

  function toggleNavbarLinks() {
    setNavToggle(!navToggle);
  }

  return (
    <>
      <nav className="w-[100vw] bg-white sticky z-20 top-0 start-0 border-none">
        <div className="w-[90%] flex flex-wrap items-center justify-between mx-auto px-8 ">
          {/* NAVBAR LOGO AREA */}
          <div className="navbarLogoSection">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                color="#c82125"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(200, 33, 37)" }}
              >
                <path d="M425.208 118.428c-9.115.04-17.29 2.663-25.45 5.927-9.33 3.732-18.268 8.75-27.847 12.13-6.67 2.356-14.156 3.768-21.694 2.615-22.832 71.052-27.844 149.083-28.654 219.9h68.322c-1.45-5.723-1.952-12.17-1.916-19.543.09-18.73 3.936-43.15 10.523-69.63 12.235-49.176 33.65-104.615 60.876-139.776-11.49-7.335-21.364-10.784-30.19-11.476-1.345-.105-2.666-.152-3.968-.146zM330.95 140.39c-12.268 3.536-23.886 8.28-38.29 10.81-17.517 3.073-38.528 1.747-67.245-9.64V359h78.14c.756-69.366 5.42-146.51 27.395-218.61zm-123.535 4.823c-17.95 11.885-33.58 18.606-50.568 18.578-16.442-.026-33.08-6.19-53.598-17.17 18.834 69.4 24.842 144.742 25.946 212.38h78.22V145.213zM84.7 147.055c-11.136 11.845-23.253 18.937-35.195 22.353-9.05 2.59-17.778 3.007-25.92 2.363 12.242 29.09 21.534 63.203 25.182 96.45 3.63 33.078 1.834 65.296-9.413 90.78h71.834c-1.15-68.14-7.4-143.78-26.488-211.945zM408.823 309c-.05.322-.105.65-.154.97l-2.667 27.608c-.014.66-.032 1.328-.035 1.965-.04 8.135.928 14.47 2.107 17.578.41 1.086.744 1.595.953 1.88h40.387v16h18v-34h-44v-32h-14.592zM33.415 377v46H47.99c2.265-18.264 11.31-34.465 24.538-46H33.415zm134.887 0c13.227 11.535 22.273 27.736 24.537 46h47.15c2.265-18.264 11.31-34.465 24.538-46h-96.226zm192 0c13.227 11.535 22.273 27.736 24.537 46h46.575v-14h57v-18h-57v-14h-71.113zm-248.887.738c-8.502 1.388-16.332 4.71-23.033 9.502l23.033 23.033v-32.535zm18 0v32.535l23.033-23.033c-6.7-4.793-14.53-8.114-23.033-9.502zm174 0c-8.502 1.388-16.332 4.71-23.033 9.502l23.033 23.033v-32.535zm18 0v32.535l23.033-23.033c-6.7-4.793-14.53-8.114-23.033-9.502zm-245.76 22.23c-4.793 6.7-8.114 14.53-9.502 23.032h32.535l-23.033-23.033zm89.52 0L142.142 423h32.535c-1.388-8.502-4.71-16.332-9.502-23.033zm102.48 0c-4.793 6.7-8.114 14.53-9.502 23.032h32.535l-23.033-23.033zm89.52 0L334.142 423h32.535c-1.388-8.502-4.71-16.332-9.502-23.033zM66.153 441c1.388 8.502 4.71 16.332 9.502 23.033L98.688 441H66.153zm75.99 0l23.032 23.033c4.793-6.7 8.114-14.53 9.502-23.033h-32.535zm116.01 0c1.388 8.502 4.71 16.332 9.502 23.033L290.688 441h-32.535zm75.99 0l23.032 23.033c4.793-6.7 8.114-14.53 9.502-23.033h-32.535zm-222.728 12.727L88.382 476.76c6.7 4.793 14.53 8.114 23.033 9.502v-32.535zm18 0v32.535c8.502-1.388 16.332-4.71 23.033-9.502l-23.033-23.033zm174 0l-23.033 23.033c6.7 4.793 14.53 8.114 23.033 9.502v-32.535zm18 0v32.535c8.502-1.388 16.332-4.71 23.033-9.502l-23.033-23.033z"></path>
              </svg>
              <span
                className="logoFoodFont self-center"
                style={{
                  color: "#ed272b",
                  fontSize: "48px",
                  fontWeight: 400,
                  fontFamily: "'Pacifico', cursive",
                  marginRight: 0,
                }}
              >
                Food
              </span>
              <span
                className="logoCardFont self-center "
                style={{
                  color: "#ff7c18",
                  fontSize: "48px",
                  fontWeight: 400,
                  fontFamily: "'Pacifico', cursive",
                  marginLeft: 0,
                }}
              >
                Cart
              </span>
            </Link>
          </div>
          {/* LOGIN & SIGNUP */} {/* Authentication Buttons */}
          {/* <div className="border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700"> */}
          <div className="navbarAuthentication flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button
              rot={"#"}
              addClass={"bg-orange-700 mobDisNone"}
              btnName={"Signup"}
            />
            <Button
              rot={"#"}
              addClass={"bg-orange-700 mobDisNone"}
              btnName={"Login"}
            />
            <button
              id="nabarMobileToggler"
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 md:hidden justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-white"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggleNavbarLinks}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {/* NAVBAR MIDDLE NAVLINKS */}
          <div
            className={`navbarNavlinksSection items-center justify-between ${
              navToggle ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-row p-4 md:p-0 font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive &&
                      "text-white font-bold bg-orange-500 rounded-lg hover:text-white hover:bg-orange-600"
                    } block py-2 px-3 text-gray-900 hover:text-orange-500`
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="reviews"
                  className={({ isActive }) =>
                    `${
                      isActive &&
                      "text-white font-bold bg-orange-500 rounded-lg hover:text-white hover:bg-orange-600"
                    } block py-2 px-3 text-gray-900 hover:text-orange-500`
                  }
                  aria-current="page"
                >
                  Reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="cart"
                  className={({ isActive }) =>
                    `${
                      isActive &&
                      "text-white font-bold bg-orange-500 rounded-lg hover:text-white hover:bg-orange-600"
                    } block py-2 px-3 text-gray-900 hover:text-orange-500`
                  }
                  aria-current="page"
                >
                  Cart
                </NavLink>
              </li>
              <Button
                rot={"#"}
                addClass={"mobDisBlock bg-orange-500"}
                btnName={"Login"}
              />
              <Button
                rot={"#"}
                addClass={"mobDisBlock bg-orange-500"}
                btnName={"Signup"}
              />
            </ul>
          </div>
          {/* </div> */}
        </div>
      </nav>
    </>
  );
}
