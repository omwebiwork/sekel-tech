import React from "react";
import Button from "../ButtonComponent/Index";
import Image from "next/image";

const Banner = ({
  title,
  subTitle = null,
  description,
  descriptionSty = "text-yellow-900 mb-8",
  renderElement = null,
  image,
  containerStyle,
  headinWidth,
  sectionSty = "",
  subTitleSty = "mb-8",
  imgContainerSty,
  aboutHead,
  aboutHeadBox,
  imgGridSty,
}) => {
  return (
    <div className={` ${sectionSty} bg-blue-900`}>
      <div className={`flex ${containerStyle} items-center`}>
        <div className={` ${headinWidth} `}>
          <div className={` ${aboutHead} text-white`}>
            <div className={` ${aboutHeadBox} `}>
              <h1 className="text-[54px] font-normal leading-[75px] mb-4 tracking-tighter">
                {title}
              </h1>
              {subTitle && (
                <p
                  className={`text-[28px] font-medium leading-[32px] tracking-tight ${subTitleSty}`}
                >
                  {subTitle}
                </p>
              )}
            </div>
            {description && (
              <p
                className={`text-base font-normal leading-[25px] ${descriptionSty}`}
              >
                {description}
              </p>
            )}
            {renderElement}
          </div>
        </div>
        <div className={`${imgGridSty}`}>
          {image && (
            <div className={`${imgContainerSty}`}>
              <Image className="w-full object-cover object-center" {...image} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
