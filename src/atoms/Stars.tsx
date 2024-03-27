// components/DynamicDivs.js
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Stars = ({ numberOfStars }: { numberOfStars: number }) => {
  const stars = [];

  if (numberOfStars > 5) numberOfStars = 5;
  if (numberOfStars < 0) numberOfStars = 0;

  if (numberOfStars === 0) {
    for (let i = 0; i < numberOfStars; i++) {
      stars.push(
        <AiFillStar key={i} className={`text-slate-500 text-[18px]`} />
      );
    }
    return <div className="flex gap-2">{stars}</div>;
  }

  for (let i = 0; i < numberOfStars; i++) {
    stars.push(
      <AiFillStar key={i} className={`text-yellow-400 text-[18px]`} />
    );
  }

  if (stars.length < 5) {
    for (let i = 0; i < 5 - numberOfStars; i++) {
      stars.push(
        <AiFillStar key={i} className={`text-slate-500 text-[18px]`} />
      );
    }
  }

  return <div className="flex gap-2">{stars}</div>;
};

export default Stars;
