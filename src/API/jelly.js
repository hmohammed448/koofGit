// Search by name
// https://www.themealdb.com/api/json/v1/1/search.php?s=${name}

// Search by category
// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

// Lookup full meal details by id
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772

// List all meals by first letter
// www.themealdb.com/api/json/v1/1/search.php?f=a

// Search meal by name
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

// List all Categories, Area, Ingredients
// www.themealdb.com/api/json/v1/1/list.php?c=list
// www.themealdb.com/api/json/v1/1/list.php?a=list

// // Meal Areas
/* const mealsArea = [
  "American",
  "British",
  "Canadian",
  "Chinese",
  "Croatian",
  "Dutch",
  "Egyptian",
  "Filipino",
  "French",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Jamaican",
  "Japanese",
  "Kenyan",
  "Malaysian",
  "Mexican",
  "Moroccan",
  "Polish",
  "Portuguese",
  "Russian",
  "Spanish",
  "Thai",
  "Tunisian",
  "Turkish",
  "Ukrainian",
  "Unknown",
  "Vietnamese",
]; */

// // Meal Category
const mealCategory = [
/*  8 */  Breakfast,
/* 36 */  Chicken,
/* 65 */  Dessert,
/*  1 */  Goat,
/* 15 */  Lamb,
/* 11 */  Miscellaneous,
/*  9 */  Pasta,
/* 19 */  Pork,
/* 29 */  Seafood,
/* 16 */  Side,
/*  4 */  Starter,
/*  3 */  Vegan,
/* 40 */  Vegetarian,
/* 46 */  Beef,
];

// function random() {
//     let num = "";
//     for (let i = 0; i < 3; i++) {
//       const str = "1234567890";
//       let ch = Math.floor(Math.random() * 9) + 1;
//       num += str.charAt(ch);
//     }
//     return num;
//   }
// combinedMenu?.forEach((el) => (el.strPrice = random()));