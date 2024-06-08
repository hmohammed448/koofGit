import React from "react";
import Navbar from "./Common/Navbar&Footer/Navbar";
import Footer from "./Common/Navbar&Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4" style={{ maxWidth: "87%" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
