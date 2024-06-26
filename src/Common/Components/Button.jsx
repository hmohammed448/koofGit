import React from "react";
import { Link } from "react-router-dom";

export default function Button({ rot, addClass, btnName, onClk }) {
  return (
    <>
      <Link
        to={rot}
        type="button"
        className={`authBtn text-white ${addClass} hover:shadow-lg hover:bg-orange-700 font-medium rounded-lg text-sm px-4 py-2 me-2 dark:hover:bg-orange-600 focus:outline-none foodCardContentBtn`}
        onClick={onClk}
      >
        {btnName}
      </Link>
    </>
  );
}
