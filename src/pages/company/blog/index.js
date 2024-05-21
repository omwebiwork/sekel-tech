import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import StoreCard from "@/Components/comman/Card/StoreCard";
import LovedThisContent from "@/Components/comman/Form/LovedThisContent";
import DownArrow from "@/assets/DownArrow";
import { blogCardData, blogsFilterData } from "@/static/json/blog";
import React, { useState } from "react";

const Blog = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <section>
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/company", label: "Company" },
          { link: "/company/blog", label: "Blog" },
        ]}
      />
      <div className="container">
        <div className="flex">
          <div className="max-w-[275px] w-full pt-[100px] pr-[60px]">
            <h4 className="text-[42px] font-medium tracking-tighter mb-[52px]">
              Blogs
            </h4>
            <div className="">
              {blogsFilterData?.map((item, index) => (
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
          <div className="max-w-[calc(100%_-_275px)] w-full pt-[100px] ">
            <div className="max-w-[790px] ml-auto">

            <div className="grid grid-cols-12 gap-8">
              {blogCardData &&
                blogCardData.map((item, index) => {
                  if (
                    currentFilter === "all" ||
                    item?.btnLabel === currentFilter
                  )
                    return (
                      <div
                        key={index}
                        className="col-span-6 max-md:col-span-6 mb-[52px]"
                      >
                        <StoreCard {...item} />
                      </div>
                    );
                })}
            </div>
            </div>
          </div>
        </div>
      </div>
      <LovedThisContent />
    </section>
  );
};

export default Blog;
