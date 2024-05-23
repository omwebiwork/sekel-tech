import StoreCard from "@/Components/comman/Card/StoreCard";
import LovedThisContent from "@/Components/comman/Form/LovedThisContent";
import SidebarSection from "@/Components/comman/SidebarSection";
import { caseFilterData, caseStudyCardData } from "@/static/json/caseStudy";
import React, { useState } from "react";

const CaseStudy = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <section>
      <SidebarSection
        sidebarTitle="Case Study"
        sidebarFilterData={caseFilterData}
        cardList={caseStudyCardData}
        cardContainerSty="grid grid-cols-12 gap-8"
        sliderColSty="col-span-12 pb-[25px] xl:pb-[50px] pt-[50px] xl:pt-[100px] md:flex items-center"
        galleryColSty="col-span-12 md:pt-[10px] xl:pt-[100px]"
        galleryBoxSty=""
        sliderTabSty="my-2 md:mt-0 md:mb-2 max-md:w-full text-left"
        sliderBtnSty="flex max-md:flex-wrap md:overflow-x-auto md:max-w-[calc(100%_-_250px)]"
        sideTitleSty="text-[32px] lg:text-[42px] font-medium tracking-tighter mb-8 md:mb-0 xl:w-[250px] md:pr-7"
        renderElement={(item, index) => (
          <div
            key={index}
            className="col-span-6 lg:col-span-4 md:col-span-6 mb-10 xl:mb-[52px]"
          >
            <StoreCard {...item} />
          </div>
        )}
      />
      {/* <div className="container">
        <div className="py-[50px] lg:pt-[100px] lg:pb-[50px] ">
          <div className="flex items-center gap-8 max-md:flex-col max-md:items-start">
            <div className="w-1/5 max-md:w-full">
              <h4 className="text-[42px] font-medium leading-[65px] text-black-33 tracking-tight">
                Case Study
              </h4>
            </div>
            <div className="w-[80%] max-md:w-full">
              <div className="flex justify-between lg:overflow-x-auto max-md:flex-col ">
                {caseFilterData?.map((item, index) => (
                  <div
                    className={`mb-2 ${
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
                        <div
                          className={`${
                            item?.value === currentFilter
                              ? "flex justify-between items-center"
                              : ""
                          }`}
                        >
                          {item?.label}
                          {item?.value === currentFilter && (
                            <div className="hidden max-md:block">
                              <DownArrow />
                            </div>
                          )}
                        </div>
                      }
                      clsStyle={`py-2 px-5 text-sm whitespace-nowrap ${
                        item?.value === currentFilter
                          ? "bg-[#FCFBB3] max-md:bg-white max-md:border-gray-400 max-md:w-full max-md:text-start"
                          : " text-black-33 border-none"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[50px] lg:pb-[50px] lg:pt-[100px]">
          <div className="grid grid-cols-12 gap-8">
            {caseStudyCardData &&
              caseStudyCardData.map((item, index) => {
                if (currentFilter === "all" || item?.btnLabel === currentFilter)
                  return (
                    <div
                      key={index}
                      className="lg:col-span-4 md:col-span-6 mb-[52px]"
                    >
                      <StoreCard {...item} />
                    </div>
                  );
              })}
          </div>
        </div>
      </div> */}
      <LovedThisContent loveDesSty="text-black-33 max-lg:mb-5 text-base lg:max-w-[570px] font-medium" />
    </section>
  );
};

export default CaseStudy;
