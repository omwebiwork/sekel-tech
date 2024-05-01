import React from "react";
import Button from "../ButtonComponent/Index";
import Image from "next/image";

const Banner = ({
  title,
  desciption,
  desciptionSty = false,
  renderElement = null,
  image,
  containerStyle,
  headinWidth,
}) => {
  return (
    <section className="bg-blue-900">
      <div className={`flex ${containerStyle} items-center`}>
        <div className={` ${headinWidth} `}>
          <div className={` text-white`}>
            <h1 className="text-[54px] font-normal leading-[75px] mb-4 tracking-tighter">
              {title}
            </h1>
            {desciption && (
              <p
                className={`text-base font-normal leading-[22px] mb-8 ${
                  desciptionSty ? "text-yellow-900 mb-0" : ""
                }`}
              >
                {desciption}
              </p>
            )}
            {renderElement}
          </div>
        </div>
        <div className="">
          {image && (
            <div className="">
              <Image className="w-full object-cover object-center" {...image} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
