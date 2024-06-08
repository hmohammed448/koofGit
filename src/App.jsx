import { useState } from "react";
import "./App.css";
import Footer from "./Common/Navbar&Footer/Footer";
import Navbar from "./Common/Navbar&Footer/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
