import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Common/Home/Home";
import Reviews from "./Common/Reviews/Reviews";
import Cart from "./Common/Pages/Cart";
import ViewItem from "./Common/Pages/ViewItem";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="viewItem/:id/:price" element={<ViewItem />}></Route>
      <Route path="reviews" element={<Reviews />}></Route>
      <Route path="cart" element={<Cart />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
