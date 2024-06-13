import React, { useEffect, useState } from "react";
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
import ctList from "../../API/category.js";

export default function Reviews() {
  const [loading, setLoading] = useState(true);
  const [localData, setLocalData] = useState([]);
  const [inputValue, setInputValue] = useState(""); // Customer Review Field

  const [userComment, setUserComments] = useState([
    {
      postDate: "2024-05-02",
      ratingByUser: 5.0,
      profile_url:
        "https://media.licdn.com/dms/image/D4D03AQHBWtOu21KNCw/profile-displayphoto-shrink_800_800/0/1695903639882?e=1723680000&v=beta&t=3lhu1x9ua6p7ZUWdEjZN2CtknKkB4-Z5AOWETiyqn3E",
      userName: "Mohammed Hussain",
      userPosition: "Manager",
      userComment: "Perfect choice for your next SaaS application.",
    },
    {
      postDate: "2024-04-23",
      ratingByUser: 3.5,
      profile_url:
        "https://img.freepik.com/free-photo/smiley-father-posing-with-arms-crossed_23-2148414862.jpg?w=900",
      userName: "Bonnie Green",
      userPosition: "CTO at Flowbite",
      userComment:
        "The food quality was not up to the mark. Disappointed with the taste. I ordered sushi, and it tasted a bit off. The rice was too dry, and the fish didn't seem very fresh.",
    },
    {
      postDate: "2024-04-19",
      ratingByUser: 4.0,
      profile_url:
        "https://img.freepik.com/free-photo/portrait-happy-smiley-man_23-2149022624.jpg?w=900",
      userName: "Amit",
      userPosition: "Developer",
      userComment:
        "I'm impressed by the customer service. There was an issue with my order, but it was quickly resolved by the support team. The food itself was fantastic. I ordered their seafood platter and it was fresh and flavorful.",
    },
    {
      postDate: "2024-04-15",
      ratingByUser: 5.0,
      profile_url:
        "https://img.freepik.com/free-photo/young-determined-armenian-curlyhaired-female-university-student-listen-carefully-asignment-look-confident-ready-task-cross-hands-chest-smiling-selfassured-standing-white-background_176420-56066.jpg?w=900",
      userName: "Sakshi Mehta",
      userPosition: "Designer",
      userComment:
        "Amazing service! The food arrived hot and fresh. Will definitely order again. I tried their pasta dish, and it was divine. The sauce was rich and creamy, and the pasta was cooked to perfection.",
    },
    {
      postDate: "2024-04-12",
      ratingByUser: 3.0,
      profile_url:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      userName: "Anil Dubey",
      userPosition: "Mechanic",
      userComment:
        "The food was okay, but the delivery took longer than expected. I ordered a burger and fries, and while the burger was decent, the fries were a bit soggy.",
    },
  ]);

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

  // setting reviews to Local storage for demo purpose
  useEffect(() => {
    let localStorageInfo = JSON.parse(localStorage.getItem("reviews"));
    if (!localStorageInfo) {
      // demo comments if no data
      let comm = [...userComment];
      console.log("Demo Data saved : ", comm);
      localStorage.setItem("reviews", JSON.stringify(comm));
      return;
    } else {
      console.log("Data exist merged : ", localStorageInfo);
      setLocalData(JSON.parse(localStorage.getItem("reviews")));
    }
  }, []);

  function handleAddComment() {
    const newObj = {
      postDate: "2024-05-02",
      ratingByUser: 5.0,
      profile_url:
        "https://media.licdn.com/dms/image/D4D03AQHBWtOu21KNCw/profile-displayphoto-shrink_800_800/0/1695903639882?e=1723680000&v=beta&t=3lhu1x9ua6p7ZUWdEjZN2CtknKkB4-Z5AOWETiyqn3E",
      userName: "Aman Jain",
      userPosition: "CEO",
      userComment: inputValue,
    };

    let localStorageInfo = JSON.parse(localStorage.getItem("reviews"));
    if (!localStorageInfo) {
      localStorage.setItem("reviews", JSON.stringify(newObj));
      console.log("Data saved add button :");
      return;
    } else {
      let destruct = [...localStorageInfo, newObj];
      localStorage.setItem("reviews", JSON.stringify(destruct));
      setLocalData(destruct);
      console.log("Data exist add button settolocadata :");
      return;
    }
  }

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <center className="bg-white text-black mt-8 mb-16 py-8">
      {/* Reviews */}
      <div className="flex justify-center items-center flex-row flex-wrap mb-8">
        <div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              color: "rgb(249, 115, 22)",
              width: "50px",
              height: "auto",
            }}
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6.43 9.57L12 15l-1.57-3.43L7 10l3.43-1.57L12 5l1.57 3.43L17 10l-3.43 1.57z"></path>
          </svg>
        </div>
        <div className="m-2">
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Write your review"
            className="p-4 bg-transparent border-none rounded-lg outline-orange-500"
            style={{ borderBottom: "1px solid gray" }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></textarea>
        </div>
        <button
          className="bg-orange-500 rounded-lg py-2 px-4 text-white hover:font-bold hover:shadow-lg"
          onClick={handleAddComment}
        >
          Add
        </button>
      </div>

      {/* If loaded show data setTimeout 1.5sec */}
      {loading ? (
        <center>
          <div className="loader my-24 mx-auto"></div>
        </center>
      ) : (
        <>
          {/* Customers IMAGES */}
          <div className="px-3">
            <h1
              className="font-bold text-3xl text-red-500 pb-4"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              Images From Our Customers 🥰
            </h1>
            <div
              className="immagineParent max-w-[50%] px-4 my-4 flex items-center overflow-x-scroll scroll-smooth whitespace-nowrap gap-8"
              style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
            >
              {ctList.map((el, idx) => {
                return (
                  <div key={idx} className="immagine min-w-56 h-52 rounded-lg">
                    <img
                      className="w-52 h-52 rounded-lg"
                      src={images[el.menu_image]}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* COMMENTS */}
          <div className="m-16 max-w-[50%]" id="customReviews">
            <div className="min-w-full px-8 py-4 bg-orange-500 rounded-t-lg text-white text-left text-2xl font-extrabold">
              Customer Reviews
            </div>
            {localData?.map((el, idx) => {
              const {
                ratingByUser: rating,
                profile_url: profile,
                userName: name,
                userPosition: position,
                userComment: comment,
              } = el;

              return (
                <figure
                  key={idx}
                  className="figSectionChild max-w-screen-md p-2 pt-0 bg-yellow-50 mb-3 border border-gray-400"
                >
                  <figcaption className="flex items-center mt-6 mb-2 space-x-3 rtl:space-x-reverse">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={profile}
                      alt="profile picture"
                    />
                    <div className="citeFonts flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                      <cite
                        className="pe-3 text-xl font-semibold text-gray-900 dark:text-gray-700"
                        style={{ textShadow: "1px 1px 2px white" }}
                      >
                        {name}
                      </cite>
                      <cite
                        className="ps-3 text-sm text-gray-500 dark:text-gray-600"
                        style={{ textShadow: "1px 1px 2px red" }}
                      >
                        {position}
                      </cite>
                    </div>
                  </figcaption>
                  <blockquote>
                    <p
                      style={{
                        borderLeft: "5px solid gray",
                        borderBottom: "1px solid gray",
                        borderRadius: "0.5rem 0 0.2rem 1rem",
                        paddingBottom: "0.5rem",
                        lineHeight: "1.5",
                      }}
                      className="pl-2 text-lg font-medium text-left dark:text-gray-700"
                    >
                      {comment}
                    </p>
                  </blockquote>
                </figure>
              );
            })}
          </div>
        </>
      )}
    </center>
  );
}
