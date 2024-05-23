import React, { useState } from "react";
import Button from "../Button";
import DownArrow from "@/assets/DownArrow";

const SidebarSection = ({
  sidebarTitle,
  sidebarFilterData,
  renderElement,
  cardList,
  cardContainerSty = "grid grid-cols-12 gap-8",
  sliderColSty = "col-span-12 lg:col-span-4 pt-[50px] lg:pt-[100px]",
  galleryColSty = "col-span-12 lg:col-span-8 pt-[50px] lg:pt-[100px]",
  galleryBoxSty = "",
  sliderBtnSty = "",
  sliderTabSty = "mb-6",
  sideTitleSty = "text-[42px] font-medium tracking-tighter mb-[52px]",
}) => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-6">
        <div className={sliderColSty}>
          <h4 className={sideTitleSty}>{sidebarTitle}</h4>
          <div className={sliderBtnSty}>
            {sidebarFilterData?.map((item, index) => (
              <div
                className={`${
                  item?.value === currentFilter
                    ? "max-md:order-first max-md:w-full text-left mb-2"
                    : `${openDropdown ? "" : "max-md:hidden"} ${sliderTabSty}`
                }`}
                onClick={() => {
                  if (item?.value === currentFilter) {
                    setOpenDropdown(!openDropdown);
                  } else {
                    setOpenDropdown(false);
                  }
                  setCurrentFilter(item?.value);
                }}
              >
                <Button
                  key={index}
                  data={
                    <p
                      className={`${
                        item?.value === currentFilter
                          ? "flex justify-between items-center"
                          : ""
                      }`}
                    >
                      {item?.label}
                      {item?.value === currentFilter && (
                        <span className="hidden max-md:block">
                          <DownArrow />
                        </span>
                      )}
                    </p>
                  }
                  clsStyle={`max-md:w-full max-md:text-left py-2 px-4 lg:px-8 text-base whitespace-nowrap tracking-tight leading-[22px] text-black-3 block ${
                    item?.value === currentFilter
                      ? "bg-yellow-100 max-md:bg-white max-md:border-gray-400 max-md:w-full max-md:text-start"
                      : "text-black-33 border border-transparent"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={galleryColSty}>
          <div className={galleryBoxSty}>
            <div className={cardContainerSty}>
              {cardList &&
                cardList.map((item, index) => {
                  if (
                    currentFilter === "all" ||
                    item?.btnLabel === currentFilter
                  )
                    return renderElement && renderElement(item, index);
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;
