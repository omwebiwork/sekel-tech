import React, { useState } from "react";
import Button from "../Button";
import DownArrow from "@/assets/DownArrow";

const SidebarSection = ({
  sidebarTitle,
  sidebarFilterData,
  renderElement,
  cardList,
  cardContainerSty='grid grid-cols-12 gap-8 '
}) => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className="container">
      <div className="flex">
        <div className="max-w-[275px] w-full pt-[100px] pr-[60px]">
          <h4 className="text-[42px] font-medium tracking-tighter mb-[52px]">
            {sidebarTitle}
          </h4>
          <div className="">
            {sidebarFilterData?.map((item, index) => (
              <div
                className={`mb-6 ${
                  item?.value === currentFilter
                    ? "max-md:order-first"
                    : `${openDropdown ? "" : "max-md:hidden"}`
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
                  clsStyle={`py-2 px-8 text-base whitespace-nowrap tracking-tight leading-[22px] text-black-3  inline-block ${
                    item?.value === currentFilter
                      ? "bg-yellow-100 max-md:bg-white max-md:border-gray-400 max-md:w-full max-md:text-start"
                      : " text-black-33 border-none"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-[calc(100%_-_275px)] w-full py-[100px]">
          <div className="max-w-[790px] ml-auto">
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
{
  /* <div
                          key={index}
                          className="col-span-6 max-md:col-span-6 "
                        >
                          <Card
                            {...item}
                            headingSty="text-[24px] font-medium leading-[140%] text-black-900 mb-4"
                            cardSty="border border-gray-400 bg-gray-100 p-6 rounded-2xl h-full"
                            cardDataSty=""
                            titleIconSty="h-[80px] w-full mb-4 max-w-[172px]"
                            iconSty="max-h-full h-full max-w-full w-auto object-contain object-left"
                            descriptionSty="mb-0 line-clamp-2 text-base font-normal text-black-33"
                          />
                        </div> */
}
