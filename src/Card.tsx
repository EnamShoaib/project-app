import React from "react";
import img from "../src/1.jpg";

interface props {
  title: string[];
  Click: (title: string) => void;
}

function Card({ title, Click }: props) {
  return (
    <div className="content">
      <img
        style={{ width: "100%", height: "100%" }}
        className="image"
        src={img}
        alt=""
      />
      <p>{title}</p>
    </div>
  );
}

export default Card;
