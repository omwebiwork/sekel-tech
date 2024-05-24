import React, { useCallback, useState } from "react";
import Button from "../Button";
import DownArrow from "@/assets/DownArrow";

const SidebarSection = ({
  sidebarTitle,
  sidebarFilterData,
  renderElement,
  cardList,
  onHandleFilter,
  cardContainerSty = "grid grid-cols-12 gap-4 lg:gap-8",
  sliderColSty = "col-span-12 lg:col-span-4 pt-[50px] lg:pt-[100px]",
  galleryColSty = "col-span-12 lg:col-span-8 pt-[50px] lg:pt-[100px]",
  galleryBoxSty = "",
  sliderBtnSty = "",
  sliderMainRow = "grid grid-cols-12 gap-6",
  sliderTabSty = "mb-3 lg:mb-6",
  sideTitleSty = "text-[42px] font-medium tracking-tighter mb-[52px]",
  sliderActTabSty = "mb-3 lg:mb-6",
}) => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleFilter = useCallback(
    (e) => {
      onHandleFilter && onHandleFilter(e);
    },
    [onHandleFilter]
  );
  return (
    <div className="container">
      <div className={sliderMainRow}>
        <div className={sliderColSty}>
          <h4 className={sideTitleSty}>{sidebarTitle}</h4>
          <div className={sliderBtnSty}>
            {sidebarFilterData?.map((item, index) => (
              <div
                className={`${
                  item?.value === currentFilter ||
                  item?.attributes?.slug === currentFilter
                    ? `max-lg:order-first max-lg:w-full text-left ${sliderActTabSty}`
                    : `${openDropdown ? "" : "max-lg:hidden"} ${sliderTabSty}`
                }`}
                onClick={() => {
                  handleFilter(item?.value || item?.attributes?.slug);
                  if (item?.value === currentFilter ||  item?.attributes?.slug === currentFilter ) {
                    setOpenDropdown(!openDropdown);
                  } else {
                    setOpenDropdown(false);
                  }
                  setCurrentFilter(item?.value || item?.attributes?.slug);
                }}
              >
                <Button
                  key={index}
                  data={
                    <p
                      className={`${
                        item?.value === currentFilter ||
                        item?.attributes?.slug === currentFilter
                          ? "flex justify-between items-center"
                          : ""
                      }`}
                    >
                      {item?.label || item?.attributes?.name}
                      {(item?.value === currentFilter ||
                        item?.attributes?.slug === currentFilter) && (
                        <span className="hidden max-lg:block">
                          <DownArrow />
                        </span>
                      )}
                    </p>
                  }
                  clsStyle={`max-lg:w-full max-lg:text-left py-2 border-transparent px-4 lg:px-4 text-sm whitespace-nowrap tracking-tight leading-[140%] text-black-3 block ${
                    item?.value === currentFilter ||
                    item?.attributes?.slug === currentFilter
                      ? "bg-yellow-100 max-lg:bg-white max-lg:border-gray-400 max-lg:w-full max-lg:text-start border-yellow-900"
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
              {cardList
                ? cardList.map((item, index) => {
                    if (
                      currentFilter === "all" ||
                      item?.btnLabel === currentFilter
                    )
                      return renderElement && renderElement(item, index);
                  })
                : renderElement && renderElement()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;
