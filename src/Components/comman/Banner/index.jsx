import React from "react";
import Button from "../Button";
import Image from "next/image";

const Banner = ({
  title,
  subTitle = null,
  description,
  descriptionSty = "text-base font-normal leading-[25px] text-yellow-900 mb-8",
  renderElement = null,
  image,
  containerStyle,
  headinWidth,
  sectionSty = "",
  titleSty="text-[36px] leading-[50px] md:text-[54px] font-normal md:leading-[75px] mb-4 tracking-tighter",
  subTitleSty = "text-[28px] font-medium leading-[32px] tracking-tight mb-8",
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
              <h1 className={`${titleSty}`}>
                {title}
              </h1>
              {subTitle && (
                <p
                className={`${subTitleSty}`}
                >
                  {subTitle}
                </p>
              )}
            </div>
            {description && (
              <p
              className={`${descriptionSty}`}
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
