import Button from "@/Components/comman/Button";
import StoreCard from "@/Components/comman/Card/StoreCard";
import LovedThisContent from "@/Components/comman/Form/LovedThisContent";
import DownArrow from "@/assets/DownArrow";
import { caseFilterData, caseStudyCardData } from "@/static/json/caseStudy";
import React, { useState } from "react";

const CaseStudy = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <section>
      <div className="container">
        <div className="pt-[100px] pb-[50px] ">
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
                      filled={item?.value === currentFilter ? true : false}
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
        <div className="py-[100px]">
          <div className="grid grid-cols-12 gap-8">
            {caseStudyCardData &&
              caseStudyCardData.map((item, index) => {
                if (currentFilter === "all" || item?.btnLabel === currentFilter)
                  return (
                    <div
                      key={index}
                      className="col-span-4 max-md:col-span-6 mb-[52px]"
                    >
                      <StoreCard {...item} />
                    </div>
                  );
              })}
          </div>
        </div>
      </div>
      <LovedThisContent />
    </section>
  );
};

export default CaseStudy;
