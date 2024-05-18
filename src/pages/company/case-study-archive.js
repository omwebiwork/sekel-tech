import Button from "@/Components/comman/Button";
import StoreCard from "@/Components/comman/Card/StoreCard";
import LovedThisContent from "@/Components/comman/Form/LovedThisContent";
import { caseStudyCardData } from "@/static/json/caseStudyArchive";
import React from "react";

const CaseStudyArchive = () => {

  return (
    <section>
      <div className="container">
        <div className="pt-[100px] pb-[50px]">
          <div className="flex items-center gap-8">
            <div className="w-1/5">
              <h4 className="text-[42px] font-medium leading-[65px] text-black-33 tracking-tight">
                Case Study
              </h4>
            </div>
            <div className="w-[80%]">
              <div className="flex justify-between  overflow-x-auto">
                {caseFilterData?.map((item, index) => (
                  <div className="mb-2">
                    <Button
                      key={index}
                      data={item?.label}
                      filled={item?.active ? true : false}
                      clsStyle={`py-2 px-5 text-sm whitespace-nowrap ${
                        item?.active
                          ? "bg-[#FCFBB3]"
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
                return (
                  <div key={index} className="col-span-4 mb-[52px]">
                    <StoreCard {...item} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
     <LovedThisContent/>
    </section>
  );
};

export default CaseStudyArchive;
