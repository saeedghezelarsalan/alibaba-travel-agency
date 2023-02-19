import Image from "next/image";
import React from "react";

export const PagesDescription = ({
  id,
  title,
  description,
  image,
}) => {
  return (
    <div>
      <div
        key={id}
        className="leading-10 text-justify mb-8 max-w-screen-2xl mx-auto "
      >
        {title && (
          <h3 className="text-base mb-4 text-black dark:text-[#07ce39] !font-black">
            {title}
          </h3>
        )}

        {description.map((item) => (
          <p
            key={item.id}
            className="leading-8 text-justify text-sm mb-4 text-[#4b5259] dark:text-white"
          >
            {item.description}
          </p>
        ))}

        {image && (
          <div className="relative block images">
            <Image src={image} layout="fill" objectFit="fill" alt="" />
          </div>
        )}
        <></>
      </div>
    </div>
  );
};