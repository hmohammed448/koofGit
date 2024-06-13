import React from "react";

export default function EmptyCard() {
  return (
    <>
      {/* <div className="mx-auto">CART is EMPTY</div> */}
      <div className="w-full bg-white mx-auto rounded-lg py-8 ">
        <div
          className="text-center text-3xl font-extrabold text-red-600 mb-6"
          style={{ fontFamily: "'Pacifico', cursive", letterSpacing: "3px" }}
        >
          Cart is Empty
        </div>
        <div className="w-full bg-orange-200 border-4 border-red-500 mx-auto rounded-lg py-8 flex justify-center items-center">
          <lottie-player
            src="https://lottie.host/ff868baa-da4b-4282-8d16-773fd8e20ea8/BPaPbH9r0L.json"
            background="##FFFFFF"
            speed="0.3"
            style={{ width: "300px", height: "300px" }}
            loop
            autoplay
            muted
            direction="2"
            mode="normal"
          ></lottie-player>
        </div>
      </div>
    </>
  );
}
